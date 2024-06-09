import { USER_ROLE } from "@/constant/role";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export type TMeta = {
  page: number;
  limit: number;
  totalCount: number;
};

export interface TDrawerItem {
  title: string;
  path: string;
  parentPath?: string;
  icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };

  child?: TDrawerItem[];
}

export type UserRole = keyof typeof USER_ROLE;

export type ResponseSuccessType = {
  data: any;
  meta?: TMeta;
};

export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessage[];
};

export type IGenericErrorMessage = {
  path: string | number;
  message: string;
};

export const Gender = ["MALE", "FEMALE"];

export interface Flat {
  id: string;
  squareFeet: number;
  totalBedrooms: number;
  totalRooms: number;
  utilitiesDescription: string;
  location: string;
  description: string;
  rent: number;
  availability: boolean;
  advanceAmount: number;
  amenities: string;
  flatPhoto: string[];
  createdAt: string;
  updatedAt: string;
  userId: string;
}

export interface Booking {
  id: string;
  flatId: string;
  userId: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  flat: Flat;
}
