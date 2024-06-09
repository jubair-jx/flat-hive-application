import { Prisma, UserRole } from "@prisma/client";
import * as bcrypt from "bcrypt";
import { helperFunction } from "../../../helpers/calculate.pagination";
import { TpaginationItems } from "../../../interface/pagination.interface";
import prisma from "../../../shared/prisma";
import { updateAdminUserInfo } from "../Admin/admin.interface";
import { updateNormalUserInfo } from "../NormalUser/normal.interface";
import { userSearchAbleFields } from "./user.constant";
type TInputData = {
  name: string;
  email: string;
  password: string;
  bio?: string;
  profession?: string;
  address?: string;
};

const createAdminIntoDB = async (body: any) => {
  const hashPassword = await bcrypt.hash(body.password, 12);
  const userData = {
    email: body.admin.email,
    password: hashPassword,
    role: UserRole.ADMIN,
  };
  const adminData = {
    name: body.admin.name,
    username: body.admin.username,
    email: body.admin.email,
    contactNumber: body.admin.contactNumber,
  };

  const result = await prisma.$transaction(async (tx) => {
    const createUser = await tx.users.create({
      data: userData,
    });
    const createAdmin = await tx.admin.create({
      data: adminData,
    });
    const createUserProfile = await tx.userProfile.create({
      data: {
        user: {
          connect: {
            id: createUser.id,
          },
        },
        bio: body.admin.bio,
        profession: body.admin.profession,
        address: body.admin.address,
      },
    });
    return createAdmin;
  });
  return result;
};

const createUserIntoDB = async (body: any) => {
  const hashPassword = await bcrypt.hash(body.password, 12);
  const userData = {
    email: body.user.email,
    password: hashPassword,
    role: UserRole.USER,
  };
  const normalUserData = {
    name: body.user.name,
    username: body.user.username,
    email: body.user.email,
    contactNumber: body.user.contactNumber,
  };
  const result = await prisma.$transaction(async (tx) => {
    const createUser = await tx.users.create({
      data: userData,
    });
    const createNormalUser = await tx.normalUser.create({
      data: normalUserData,
    });
    const createUserProfile = await tx.userProfile.create({
      data: {
        user: {
          connect: {
            id: createUser.id,
          },
        },
        bio: body.user.bio,
        profession: body.user.profession,
        address: body.user.address,
      },
    });
    return createNormalUser;
  });
  return result;
};

const getAllUserFromDB = async (params: any, options: TpaginationItems) => {
  const { searchTerm, ...filterData } = params;

  const { limit, sortBy, sortOrder, skip, page } =
    helperFunction.calculatePaginationFiltering(options);

  const andCondition: Prisma.UsersWhereInput[] = [];
  //This condition for only search any items
  if (params.searchTerm) {
    andCondition.push({
      OR: userSearchAbleFields.map((field) => ({
        [field]: {
          contains: params.searchTerm,
          mode: "insensitive",
        },
      })),
    });
  }

  //This condition for specific field, for example name, email, contactnumber, etc
  if (Object.keys(filterData).length > 0) {
    andCondition.push({
      AND: Object.keys(filterData).map((key) => ({
        [key]: {
          equals: (filterData as any)[key],
        },
      })),
    });
  }

  const whereCondition: Prisma.UsersWhereInput =
    andCondition.length > 0 ? { AND: andCondition } : {};

  const result = await prisma.users.findMany({
    where: whereCondition,
    skip,
    take: limit,
    orderBy:
      sortBy && sortOrder
        ? {
            [sortBy]: sortOrder,
          }
        : {
            createdAt: "desc",
          },
    select: {
      id: true,
      email: true,
      role: true,
      needPasswordChange: true,
      status: true,
      createdAt: true,
      updatedAt: true,
      admin: true,
      normalUser: true,
      profile: true,
    },
  });

  const totalCount = await prisma.users.count({
    where: whereCondition,
  });
  return {
    meta: {
      page,
      limit,
      totalCount,
    },

    data: result,
  };
};

const getAllNormalUsersFromDB = async () => {
  const result = await prisma.normalUser.findMany({
    include: {
      user: true,
    },
  });

  return result;
};
const updateNormaUserInfoDataById = async (
  id: string,
  data: updateNormalUserInfo
) => {
  const isExistData = await prisma.normalUser.findUniqueOrThrow({
    where: {
      id,
      isDeleted: false,
    },
  });

  const isUserExist = await prisma.users.findFirstOrThrow({
    where: {
      normalUser: {
        id: isExistData.id,
      },
    },
  });

  const result = await prisma.users.update({
    where: {
      id: isUserExist?.id,
    },
    data: {
      status: data?.status,
      role: data?.role,
    },
    select: {
      id: true,
      email: true,
      status: true,
      needPasswordChange: true,
      role: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  return result;
};

const getUserByIdFromDB = async (id: string) => {
  const getUser = await prisma.users.findUniqueOrThrow({
    where: {
      id,
    },
    include: {
      normalUser: true,
      admin: true,
    },
  });
  return getUser;
};

const getAllAdminFromDB = async () => {
  const result = await prisma.admin.findMany({
    where: {
      isDeleted: false,
      user: {
        role: UserRole?.ADMIN,
      },
    },
    include: {
      user: true,
    },
  });

  return result;
};
const updateAdminInfoDataById = async (
  id: string,
  data: updateAdminUserInfo
) => {
  const isExistData = await prisma.admin.findUniqueOrThrow({
    where: {
      id,
      isDeleted: false,
    },
  });

  const isUserExist = await prisma.users.findFirstOrThrow({
    where: {
      admin: {
        id: isExistData.id,
      },
    },
  });

  const result = await prisma.users.update({
    where: {
      id: isUserExist?.id,
    },
    data: {
      status: data?.status,
      role: data?.role,
    },
    select: {
      id: true,
      email: true,
      status: true,
      needPasswordChange: true,
      role: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  return result;
};
export const userServices = {
  createUserIntoDB,
  createAdminIntoDB,
  getAllUserFromDB,
  getAllNormalUsersFromDB,
  updateNormaUserInfoDataById,
  getAllAdminFromDB,
  getUserByIdFromDB,
  updateAdminInfoDataById,
};
