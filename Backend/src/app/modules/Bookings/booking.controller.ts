import { Request, Response } from "express";
import httpStatus from "http-status";
import config from "../../../config";
import verifyToken from "../../../helpers/verifyToken";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { bookingServices } from "./booking.services";

const bookingFlat = catchAsync(async (req, res) => {
  const token = req.headers.authorization as string;
  const userCheck = verifyToken(token, config.jwt.jwt_secret_key as string);
  const result = await bookingServices.bookingFlatIntoDB(req.body, userCheck);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Booking requests submitted successfully",
    data: result,
  });
});

const getAllFlats = catchAsync(async (req, res) => {
  const result = await bookingServices.getAllBookingFlatFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Booking requests retrieved successfully",
    data: result,
  });
});
const UpdateFlatBookingStatus = catchAsync(async (req, res) => {
  const { bookingId } = req.params;
  const result = await bookingServices.updateFlatBookingStatusIntoDB(
    bookingId,
    req.body
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Booking requests retrieved successfully",
    data: result,
  });
});
const getMyRequestedFlat = catchAsync(
  async (req: Request & { user?: any }, res: Response) => {
    const user = req.user;

    const result = await bookingServices.getMyRequestedFlatFromDB(user);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Your requested flat retrieved successfully",
      data: result,
    });
  }
);

export const bookingsControlller = {
  bookingFlat,
  getAllFlats,
  UpdateFlatBookingStatus,
  getMyRequestedFlat,
};
