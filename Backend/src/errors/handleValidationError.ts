/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from "http-status";
import { THandlerError } from "../interface/error";

export const handleValidationError = (err: any): THandlerError => {
  const requiredField = Object.keys(err?.errors);
  return {
    statusCode: httpStatus.BAD_REQUEST,
    message: "Validation Error",
    errorMessage: `${requiredField} ${
      requiredField.length > 0 && requiredField.length === 1
        ? "is"
        : requiredField.length >= 2 && "are"
    } required`,
  };
};
