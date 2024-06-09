import { z } from "zod";

const createFlatValidation = z.object({
  squareFeet: z
    .number({ required_error: "Squere Feet is required" })
    .int()
    .positive(),
  totalBedrooms: z
    .number({ required_error: "Squere Feet is required" })
    .int()
    .positive(),
  totalRooms: z
    .number({ required_error: "Total Rooms is required" })
    .int()
    .positive(),
  utilitiesDescription: z
    .string({ required_error: "Total Rooms is required" })
    .max(255),
  location: z.string({ required_error: "Location is required" }).max(255),
  description: z.string({ required_error: "Description is required" }).max(255),
  rent: z.number({ required_error: "Rent is required" }).int().positive(),
  advanceAmount: z
    .number({ required_error: "Advance Amount is required" })
    .int()
    .positive(),
});

const updateFlatValidation = z.object({
  squareFeet: z
    .number({ required_error: "Squere Feet is required" })
    .int()
    .positive()
    .optional(),
  totalBedrooms: z
    .number({ required_error: "Squere Feet is required" })
    .int()
    .positive()
    .optional(),
  totalRooms: z
    .number({ required_error: "Total Rooms is required" })
    .int()
    .positive()
    .optional(),
  utilitiesDescription: z
    .string({ required_error: "Total Rooms is required" })
    .max(255)
    .optional(),
  location: z
    .string({ required_error: "Location is required" })
    .max(255)
    .optional(),
  description: z
    .string({ required_error: "Description is required" })
    .max(255)
    .optional(),
  rent: z
    .number({ required_error: "Rent is required" })
    .int()
    .positive()
    .optional(),
  advanceAmount: z
    .number({ required_error: "Advance Amount is required" })
    .int()
    .positive()
    .optional(),
});

export const flatValidations = {
  createFlatValidation,
  updateFlatValidation,
};
