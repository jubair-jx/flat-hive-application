import { Request, Response } from "express";
import httpStatus from "http-status";
import { TAuthUser } from "../../../interface/common";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { profileServices } from "./profile.services";

const getAllProfiles = catchAsync(async (req, res) => {
  const result = await profileServices.getAllProfilesFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User profile retrieved successfully",
    data: result,
  });
});

const updateUserProfile = catchAsync(
  async (req: Request & { user?: TAuthUser }, res: Response) => {
    const user = req.user;
    const result = await profileServices.updateUserProfileIntoDB(
      user as TAuthUser,
      req.body
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "User profile updated successfully",
      data: result,
    });
  }
);
const getMyUserProfile = catchAsync(
  async (req: Request & { user?: TAuthUser }, res: Response) => {
    const user = req.user;
    const result = await profileServices.getMyProfileFromDB(user as TAuthUser);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "User profile fetched successfully",
      data: result,
    });
  }
);
export const profileControllers = {
  getAllProfiles,
  updateUserProfile,
  getMyUserProfile,
};
