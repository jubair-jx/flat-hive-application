import httpStatus from "http-status";
import { paginationFilteringfield } from "../../../constant/paginationFilterAbleFields";
import catchAsync from "../../../shared/catchAsync";
import pickFilterData from "../../../shared/pick";
import sendResponse from "../../../shared/sendResponse";
import { userFilterAbleField } from "./user.constant";
import { userServices } from "./user.services";

const createAdmin = catchAsync(async (req, res) => {
  const result = await userServices.createAdminIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Admin created successfully",
    data: result,
  });
});

const createUser = catchAsync(async (req, res) => {
  const result = await userServices.createUserIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User created successfully",
    data: result,
  });
});

const getAllUsers = catchAsync(async (req, res) => {
  const filters = pickFilterData(req.query, userFilterAbleField);
  const options = pickFilterData(req.query, paginationFilteringfield);

  const result = await userServices.getAllUserFromDB(filters, options);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Users data has been retrievd successfully",
    meta: result.meta,
    data: result.data,
  });
});

const getAllAdminFromDB = catchAsync(async (req, res) => {
  const result = await userServices.getAllAdminFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Admin data has been retrievd successfully",
    // meta: result.meta,
    // data: result.data,
    data: result,
  });
});

export const userControllers = {
  createUser,
  createAdmin,

  getAllUsers,

  getAllAdminFromDB,
};
