import httpStatus from "http-status";

import { ZodError } from "zod";
import { THandlerError } from "../interface/error";

export const handleZodValidation = (err: ZodError): THandlerError => {
  const errorField = err.issues.map((err) => err.path);

  return {
    statusCode: httpStatus.BAD_REQUEST,
    errorMessage: `${errorField} ${
      errorField.length > 0 && errorField.length === 1
        ? "is"
        : errorField.length >= 2 && "are"
    } required`,
    message: "Required Fields",
  };
};
