import { UserStatus } from "@prisma/client";
import * as bcrypt from "bcrypt";
import httpStatus from "http-status";
import config from "../../../config";
import AppError from "../../../errors/AppError";
import generateToken from "../../../helpers/generateToken";
import verifyToken from "../../../helpers/verifyToken";
import prisma from "../../../shared/prisma";
import { TLogin } from "./auth.interface";
const loginIntoDB = async (payload: TLogin) => {
  let isExistUser : any;

  if (payload.email) {
    // Check if the user exists in the Users table via email
    isExistUser = await prisma.users.findFirstOrThrow({
      where: {
        email: payload.email,
        status: UserStatus.ACTIVE,
      },
    });

    // Fetch related user data from Admin or normalUser table
    const adminUser = await prisma.admin.findUnique({
      where: { email: payload.email },
    });

    const normalUser = await prisma.normalUser.findUnique({
      where: { email: payload.email },
    });

    isExistUser = adminUser ? { ...isExistUser, ...adminUser } : isExistUser;
    isExistUser = normalUser ? { ...isExistUser, ...normalUser } : isExistUser;
  } else if (payload.username) {
    // Check if the user exists in the Admin or normalUser table via username
    let adminUser, normalUser;

    try {
      adminUser = await prisma.admin.findUniqueOrThrow({
        where: { username: payload.username },
        include: { user: true },
      });
    } catch (e:any) {
      if (e.code !== "P2025") throw e;
    }

    try {
      normalUser = await prisma.normalUser.findUniqueOrThrow({
        where: { username: payload.username },
        include: { user: true },
      });
    } catch (e:any) {
      if (e.code !== "P2025") throw e;
    }

    if (!adminUser && !normalUser) {
      throw new AppError(
        httpStatus.BAD_REQUEST,
        "No user found with the provided username."
      );
    }

    isExistUser = adminUser ? adminUser.user : isExistUser;
    isExistUser = normalUser ? normalUser.user : isExistUser;
  } else {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "Email or username is required."
    );
  }

  const isCorrectPassword = await bcrypt.compare(
    payload.password,
    isExistUser.password
  );

  if (!isCorrectPassword) {
    throw new AppError(httpStatus.BAD_REQUEST, "Your Password is incorrect.");
  }

  const accessToken = generateToken(
    { email: isExistUser.email, role: isExistUser.role },
    config.jwt.jwt_secret_key as string,
    config.jwt.jwt_expires_in as string
  );

  const refreshToken = generateToken(
    { email: isExistUser.email, role: isExistUser.role },
    config.jwt.refresh_token_key as string,
    config.jwt.refresh_token_expires_in as string
  );

  return {
    isExistUser,
    accessToken,
    refreshToken,
    needPasswordChange: isExistUser.needPasswordChange,
  };
};

const refreshToken = async (token: string) => {
  let decodedData;

  try {
    decodedData = verifyToken(token, config.jwt.refresh_token_key as string);
  } catch (err) {
    throw new Error("You are not authorized!!");
  }

  const isExistUser = await prisma.users.findUniqueOrThrow({
    where: {
      email: decodedData?.email,
      status: UserStatus.ACTIVE,
    },
  });

  const accessToken = generateToken(
    { email: isExistUser.email, role: isExistUser.role },
    config.jwt.jwt_secret_key as string,
    config.jwt.jwt_expires_in as string
  );
  return {
    accessToken,
    needPasswordChange: isExistUser.needPasswordChange,
  };
};

const changePassword = async (userData: any, payload: any) => {
  const isExistUser = (await prisma.users.findUnique({
    where: {
      email: userData.email,
      status: UserStatus.ACTIVE,
    },
  })) as any;

  const isCorrectPassword: boolean = await bcrypt.compare(
    payload.oldPassword,
    isExistUser.password
  );
  if (!isCorrectPassword) {
    throw new Error("Invalid password");
  }

  const hashedPassword: string = await bcrypt.hash(payload.newPassword, 12);

  await prisma.users.update({
    where: {
      email: userData.email,
    },
    data: {
      password: hashedPassword,
      needPasswordChange: false,
    },
  });
  return {
    message: "Password changed successfully!",
  };
};

export const authServices = {
  loginIntoDB,
  changePassword,
  refreshToken,
};
