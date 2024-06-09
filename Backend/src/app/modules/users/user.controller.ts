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
const getAllNormalUsers = catchAsync(async (req, res) => {
  const result = await userServices.getAllNormalUsersFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Users data has been retrievd successfully",
    // meta: result.meta,
    // data: result.data,
    data: result,
  });
});

const updateNormalUserData = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const result = await userServices.updateNormaUserInfoDataById(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Normal User data Info has been updated successfully",
    data: result,
  });
});

const getUserById = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await userServices.getUserByIdFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User data has been retrievd successfully",

    data: result,
  });
});

const getNormalUsers = catchAsync(async (req, res) => {
  const result = await userServices.getAllNormalUsersFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Normal Users data has been retrievd successfully",
    // meta: result.meta,
    // data: result.data,
    data: result,
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

const updateAdminData = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const result = await userServices.updateAdminInfoDataById(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Admin data Info has been updated successfully",
    data: result,
  });
});

export const userControllers = {
  createUser,
  createAdmin,
  getAllNormalUsers,
  getAllUsers,
  getUserById,
  getNormalUsers,
  updateNormalUserData,
  updateAdminData,
  getAllAdminFromDB,
};
