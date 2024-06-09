import { NextFunction, Request, Response } from "express";

import config from "../../config";
import AppError from "../../errors/AppError";
import { handleCastError } from "../../errors/handleCastError";
import { handleDuplicateError } from "../../errors/handleDuplicateError";
import { handleValidationError } from "../../errors/handleValidationError";
import { handleZodValidation } from "../../errors/handleZodError";
import { TErrorDetails } from "../../interface/error";

const globalErrorHandelar = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = 500;
  let message = "Something went wrong!";
  let errorMessage = "";
  const errorDetails: TErrorDetails = err;
  if (err instanceof AppError) {
    statusCode = err.statusCode;
    message = err.message;
  }
  if (err?.code === 11000) {
    const duplicateError = handleDuplicateError(err);
    statusCode = duplicateError.statusCode;
    message = duplicateError.message;
    errorMessage = duplicateError.errorMessage;
  }
  if (err?.name === "ValidationError") {
    const validationError = handleValidationError(err);
    statusCode = validationError.statusCode;
    message = validationError.message;
    errorMessage = validationError.errorMessage;
  }

  if (err?.name === "CastError") {
    const castError = handleCastError(err);
    statusCode = castError.statusCode;
    message = castError.message;
    errorMessage = castError.errorMessage;
  }
  if (err.name === "ZodError") {
    const zodError = handleZodValidation(err);
    statusCode = zodError.statusCode;
    message = zodError.message;
    errorMessage = zodError.errorMessage;
  }

  res.status(statusCode).json({
    success: false,
    message,
    errorMessage,
    errorDetails,
    stack: config.env === "development" ? err?.stack : null,
  });
};

export default globalErrorHandelar;
