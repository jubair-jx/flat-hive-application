import httpStatus from "http-status";
import { THandlerError } from "../interface/error";

export const handleCastError = (err: any): THandlerError => {
  return {
    message: "Invalid ID",
    errorMessage: `${err.value} is a invalid iD`,
    statusCode: httpStatus.BAD_REQUEST,
  };
};
