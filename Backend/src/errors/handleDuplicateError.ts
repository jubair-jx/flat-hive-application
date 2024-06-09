/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from "http-status";
import { THandlerError } from "../interface/error";
export const handleDuplicateError = (err: any): THandlerError => {
  const errorMessage = err.message;
  const regex = /"(.*?)"/;
  const match = errorMessage.match(regex);
  if (match) {
    const value = match[1];
    return {
      statusCode: httpStatus.CONFLICT,
      message: "Already Exist",
      errorMessage: `${value} is already exist`,
    };
  } else {
    return {
      statusCode: httpStatus.CONFLICT,
      message: "Already Exist",
      errorMessage: `Value is already exist`,
    };
  }
};
