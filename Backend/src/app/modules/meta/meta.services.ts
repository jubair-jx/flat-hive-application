import { UserRole } from "@prisma/client";
import httpStatus from "http-status";
import AppError from "../../../errors/AppError";
import { TAuthUser } from "../../../interface/common";
import prisma from "../../../shared/prisma";

const getAllMetaDataBasedOnRole = async (user: TAuthUser) => {
  let metaData;
  switch (user?.role) {
    case UserRole.SUPER_ADMIN:
      metaData = getSuperAdminMetaData(user);
      break;
    case UserRole.ADMIN:
      metaData = getAdminMetaData(user);
      break;
    case UserRole.USER:
      metaData = getUserMetaData(user);
      break;

    default:
      throw new AppError(httpStatus.BAD_REQUEST, "Invalid role");
  }
  return metaData;
};

const getSuperAdminMetaData = async (user: TAuthUser) => {};
const getAdminMetaData = async (user: TAuthUser) => {};
const getUserMetaData = async (user: TAuthUser) => {
  const userData = await prisma.normalUser.findUniqueOrThrow({
    where: {
      email: user.email,
    },
  });
  const flatCount = await prisma.flat.count({
    where: {
      userId: userData?.id,
    },
  });
  const flatRequest = await prisma.booking.count({
    where: {
      userId: userData?.id,
    },
  });
  return {
    flatCount,
    flatRequest,
  };
};

export const MetaServices = {
  getAllMetaDataBasedOnRole,
};
