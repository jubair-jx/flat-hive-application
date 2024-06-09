import { Status, Users } from "@prisma/client";
import httpStatus from "http-status";
import AppError from "../../../errors/AppError";
import { TAuthUser } from "../../../interface/common";
import prisma from "../../../shared/prisma";

const bookingFlatIntoDB = async (body: any, userMail: any) => {
  const getSingleUser = (await prisma.users.findUnique({
    where: {
      email: userMail.email,
    },
  })) as Users;
  if (!getSingleUser) {
    throw new AppError(httpStatus.NOT_FOUND, "User not found");
  }
  const isExitsFlat = await prisma.flat.findFirstOrThrow({
    where: {
      id: body.flatId,
    },
    include: {
      bookings: true,
    },
  });
  if (!isExitsFlat) {
    throw new AppError(httpStatus.NOT_FOUND, "Flat not found");
  }
  const currentBooking = isExitsFlat.bookings.find(
    (booking) => booking.status === "BOOKED" || booking.status === "REJECTED"
  );
  if (currentBooking) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      `Cannot book the flat. Current status is ${currentBooking.status}.`
    );
  }

  const userBooking = await prisma.booking.findFirst({
    where: {
      userId: getSingleUser?.id,
      flatId: body.flatId,
    },
  });
  if (userBooking) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "You have already booked this flat."
    );
  }
  const result = await prisma.booking.create({
    data: {
      userId: getSingleUser.id,
      flatId: body.flatId,
    },
  });
  return result;
};

const getAllBookingFlatFromDB = async () => {
  const result = await prisma.booking.findMany({
    where: {},
    include: {
      flat: true,
      user: true,
    },
  });
  return result;
};

const updateFlatBookingStatusIntoDB = async (
  id: string,
  fromStatus: { status: Status }
) => {
  const { status } = fromStatus;
  const isExistBookingFlat = await prisma.booking.findUnique({
    where: {
      id,
    },
  });
  if (!isExistBookingFlat) {
    throw new AppError(httpStatus.NOT_FOUND, "This flat is not available");
  }
  const changeFlatBookingStatus = await prisma.booking.update({
    where: {
      id,
    },
    data: {
      status,
    },
  });
  return changeFlatBookingStatus;
};

const getMyRequestedFlatFromDB = async (user: TAuthUser) => {
  const getSingleUser = await prisma.users.findUnique({
    where: {
      email: user?.email,
    },

    // select: {
    //   bookings:true
    //   id: true,
    //   email: true,
    //   needPasswordChange: true,
    //   role: true,
    //   status: true,
    // },
  });
  const getMyRequestBooking = await prisma.booking.findMany({
    where: {
      userId: getSingleUser?.id,
    },
    include: {
      flat: true,
    },
  });
  console.log(getMyRequestBooking);
  return getMyRequestBooking;
  // return result;
};

export const bookingServices = {
  bookingFlatIntoDB,
  getAllBookingFlatFromDB,
  updateFlatBookingStatusIntoDB,
  getMyRequestedFlatFromDB,
};
