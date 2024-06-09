import { PrismaClient, UserRole, UserStatus } from "@prisma/client";
import httpStatus from "http-status";
import AppError from "../../../errors/AppError";
import { TAuthUser } from "../../../interface/common";
import prisma from "../../../shared/prisma";
const prismaForUpdate = new PrismaClient();

const getAllProfilesFromDB = async () => {
  const result = await prisma.userProfile.findMany({
    select: {
      id: true,
      user: true,
      bio: true,
      profession: true,
      address: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return result;
};

const updateUserProfileIntoDB = async (userData: TAuthUser, body: any) => {
  const isExistUser = await prisma.users.findUnique({
    where: {
      email: userData.email,
    },
  });

  if (!isExistUser) {
    throw new AppError(httpStatus.NOT_FOUND, "This user is not available");
  }

  if (body.email && body.email !== isExistUser.email) {
    const emailExists = await prisma.users.findUnique({
      where: {
        email: body.email,
      },
    });

    if (emailExists) {
      throw new AppError(httpStatus.CONFLICT, "Email is already in use");
    }
  }

  if (body.username) {
    const usernameExistsInAdmin = await prisma.admin.findUnique({
      where: {
        username: body.username,
      },
    });

    const usernameExistsInNormalUser = await prisma.normalUser.findUnique({
      where: {
        username: body.username,
      },
    });

    if (
      (usernameExistsInAdmin &&
        usernameExistsInAdmin.email !== isExistUser.email) ||
      (usernameExistsInNormalUser &&
        usernameExistsInNormalUser.email !== isExistUser.email)
    ) {
      throw new AppError(httpStatus.CONFLICT, "Username is already in use");
    }
  }

  const result = await prisma.$transaction(async (tx) => {
    let updatedProfile;

    if (isExistUser.role === "ADMIN") {
      // First, update the admin table
      updatedProfile = await tx.admin.update({
        where: { email: isExistUser.email },
        data: {
          username: body.username,
          name: body?.name,
          email: body.email || isExistUser.email,
          profilePhoto: body.profilePhoto,
          contactNumber: body.contactNumber,
        },
      });

      // Then, update the users table and user profile
      await tx.users.update({
        where: { id: isExistUser.id },
        data: { email: body.email || isExistUser.email },
      });

      if (body.bio || body.profession || body.address) {
        await tx.userProfile.update({
          where: { id: isExistUser.id },
          data: {
            bio: body.bio,
            profession: body.profession,
            address: body.address,
          },
        });
      }
    } else if (isExistUser.role === "USER") {
      // First, update the normalUser table
      updatedProfile = await tx.normalUser.update({
        where: { email: isExistUser.email },
        data: {
          username: body.username,
          name: body?.name,
          email: body.email || isExistUser.email,
          profilePhoto: body.profilePhoto,
          contactNumber: body.contactNumber,
        },
      });

      // Then, update the users table and user profile
      await tx.users.update({
        where: { id: isExistUser.id },
        data: { email: body.email || isExistUser.email },
      });

      if (body.bio || body.profession || body.address) {
        await tx.userProfile.update({
          where: { id: isExistUser.id },
          data: {
            bio: body.bio,
            profession: body.profession,
            address: body.address,
          },
        });
      }
    } else if (isExistUser.role === "SUPER_ADMIN") {
      updatedProfile = await tx.admin.update({
        where: { email: isExistUser.email },
        data: {
          username: body.username,
          name: body?.name,
          email: body.email || isExistUser.email,
          profilePhoto: body.profilePhoto,
          contactNumber: body.contactNumber,
        },
      });

      // Then, update the users table and user profile
      await tx.users.update({
        where: { id: isExistUser.id },
        data: { email: body.email || isExistUser.email },
      });

      if (body.bio || body.profession || body.address) {
        await tx.userProfile.update({
          where: { id: isExistUser.id },
          data: {
            bio: body.bio,
            profession: body.profession,
            address: body.address,
          },
        });
      }
    } else {
      throw new AppError(httpStatus.BAD_REQUEST, "Invalid user role");
    }

    return updatedProfile;
  });

  return result;
};

const getMyProfileFromDB = async (user: TAuthUser) => {
  const userInfo = await prisma.userProfile.findFirstOrThrow({
    where: {
      user: {
        email: user?.email,
        status: UserStatus.ACTIVE,
      },
    },
    include: {
      user: {
        select: {
          id: true,
          email: true,
          needPasswordChange: true,
          role: true,
          status: true,
        },
      },
    },
  });
  let userData;
  if (userInfo?.user?.role === UserRole.SUPER_ADMIN) {
    userData = await prisma.admin.findUnique({
      where: {
        email: userInfo?.user?.email,
      },
    });
  } else if (userInfo?.user?.role === UserRole.ADMIN) {
    userData = await prisma.admin.findUnique({
      where: {
        email: userInfo?.user?.email,
      },
    });
  } else if (userInfo?.user?.role === UserRole.USER) {
    userData = await prisma.normalUser.findUnique({
      where: {
        email: userInfo?.user?.email,
      },
    });
  }
  return {
    ...userData,
    ...userInfo,
  };
};

export const profileServices = {
  getAllProfilesFromDB,
  updateUserProfileIntoDB,
  getMyProfileFromDB,
};
