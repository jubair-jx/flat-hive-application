export type TErrorDetails = string | Error | any;
export interface THandlerError {
  statusCode: number;
  message: string;
  errorMessage: string;
}
