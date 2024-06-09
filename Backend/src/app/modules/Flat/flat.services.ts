import { Flat, Prisma } from "@prisma/client";
import { helperFunction } from "../../../helpers/calculate.pagination";
import { TAuthUser } from "../../../interface/common";
import { TpaginationItems } from "../../../interface/pagination.interface";
import prisma from "../../../shared/prisma";
import { flatSearchAbleFields } from "./flat.constant";

const createFlatIntoDB = async (body: Flat) => {
  const result = await prisma.flat.create({
    data: {
      ...body,
      flatPhoto: body?.flatPhoto || [],
    },
  });

  return result;
};
const getAllFlatFromDB = async (params: any, options: TpaginationItems) => {
  const { searchTerm, availability, ...filterData } = params;

  const { limit, sortBy, sortOrder, skip, page } =
    helperFunction.calculatePaginationFiltering(options);

  const andCondition: Prisma.FlatWhereInput[] = [];

  const isNumeric = !isNaN(Number(searchTerm));
  if (isNumeric) {
    const numericSearchTerm = Number(searchTerm);
    andCondition.push({
      OR: flatSearchAbleFields.numericFields.map((field) => ({
        [field]: numericSearchTerm,
      })),
    });
  } else if (searchTerm) {
    andCondition.push({
      OR: flatSearchAbleFields.stringFields.map((field) => ({
        [field]: {
          contains: searchTerm,
          mode: "insensitive",
        },
      })),
    });
  }

  // Condition for other filters
  if (availability !== undefined) {
    const availabilityBool = availability.toLowerCase() === "true";
    andCondition.push({
      availability: availabilityBool,
    });
  }

  // This condition for specific fields, for example location, description, utilitiesDescription, etc.
  if (Object.keys(filterData).length > 0) {
    Object.entries(filterData).forEach(([key, value]) => {
      if (flatSearchAbleFields.numericFields.includes(key)) {
        // Handle numeric fields
        const numericValue = Number(value);
        if (!isNaN(numericValue)) {
          andCondition.push({ [key]: numericValue });
        }
      } else if (flatSearchAbleFields.stringFields.includes(key)) {
        // Handle string fields
        andCondition.push({ [key]: { contains: value, mode: "insensitive" } });
      } else {
        // Default equals condition for other fields
        andCondition.push({ [key]: { equals: value } });
      }
    });
  }

  const whereCondition: Prisma.FlatWhereInput =
    andCondition.length > 0 ? { AND: andCondition } : {};

  const result = await prisma.flat.findMany({
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
  });
  const totalCount = await prisma.flat.count({
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

const updateFlatIntoDB = async (id: string, body: Flat) => {
  const isExistFlat = await prisma.flat.findUniqueOrThrow({
    where: {
      id,
    },
  });

  const result = await prisma.flat.update({
    where: {
      id,
    },
    data: body,
  });

  return result;
};
const getMyFlatPostFromDB = async (user: TAuthUser) => {
  const result = await prisma.users.findUnique({
    where: {
      email: user?.email,
    },
    select: {
      flats: true,
      id: true,
      email: true,
      needPasswordChange: true,
      role: true,
      status: true,
    },
  });
  return result;
};
const deleteFlatById = async (id: string) => {
  const isExistFlat = await prisma.flat.findUniqueOrThrow({
    where: {
      id,
    },
  });
  const result = await prisma.$transaction(async (tx) => {
    await tx.booking.deleteMany({
      where: {
        flat: {
          id,
        },
      },
    });
    const deleteFlat = await tx.flat.delete({
      where: {
        id,
      },
      include: {},
    });
    return deleteFlat;
  });
  return result;
};
const getByIdFromDB = async (id: string): Promise<Flat | null> => {
  const result = await prisma.flat.findUniqueOrThrow({
    where: {
      id,
      availability: true,
    },
    include: {
      bookings: true,
    },
  });

  return result;
};
export const flatServices = {
  createFlatIntoDB,
  getAllFlatFromDB,
  updateFlatIntoDB,
  getMyFlatPostFromDB,
  deleteFlatById,
  getByIdFromDB,
};
