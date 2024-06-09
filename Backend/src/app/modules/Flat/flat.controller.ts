import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import pickFilterData from "../../../shared/pick";
import sendResponse from "../../../shared/sendResponse";
import {
  flatFilterAbleFields,
  paginationFilteringfield,
} from "./flat.constant";
import { flatServices } from "./flat.services";

const createFlat = catchAsync(async (req, res) => {
  const result = await flatServices.createFlatIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Flat added successfully",
    data: result,
  });
});
const getAllFlats = catchAsync(async (req, res) => {
  const filters = pickFilterData(req.query, flatFilterAbleFields);

  const options = pickFilterData(req.query, paginationFilteringfield);
  const result = await flatServices.getAllFlatFromDB(filters, options);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Flats retrieved successfully",
    meta: result.meta,
    data: result.data,
  });
});
const updateFlat = catchAsync(async (req, res) => {
  const { flatId } = req.params;
  const result = await flatServices.updateFlatIntoDB(flatId, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Flat information updated successfully",
    data: result,
  });
});

const getMyCreatedFlat = catchAsync(
  async (req: Request & { user?: any }, res: Response) => {
    const user = req.user;

    const result = await flatServices.getMyFlatPostFromDB(user);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Your all of flat retrieved successfully",
      data: result,
    });
  }
);
const deleteFlatFromDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await flatServices.deleteFlatById(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Flat deleted successfully",
    data: result,
  });
});
const getByIdFromDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await flatServices.getByIdFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Flat data fetch successfully",
    data: result,
  });
});

export const flatControllers = {
  createFlat,
  getAllFlats,
  updateFlat,
  getMyCreatedFlat,
  deleteFlatFromDB,
  getByIdFromDB,
};
