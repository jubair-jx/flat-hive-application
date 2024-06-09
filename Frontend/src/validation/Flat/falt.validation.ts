import { z } from "zod";

const createFlatValidation = z.object({
  squareFeet: z.preprocess(
    (x) => (x ? x : undefined),
    z.coerce.number({ required_error: "Square feet is required" }).int()
  ),
  totalBedrooms: z.preprocess(
    (x) => (x ? x : undefined),
    z.coerce.number({ required_error: "Total Bed is required" }).int()
  ),
  totalRooms: z.preprocess(
    (x) => (x ? x : undefined),
    z.coerce.number({ required_error: "Total Rooms is required" }).int()
  ),
  utilitiesDescription: z
    .string({ required_error: "Utilities Description is required" })
    .max(255),
  location: z.string({ required_error: "Location is required" }).max(255),
  description: z.string({ required_error: "Description is required" }).max(255),
  rent: z.preprocess(
    (x) => (x ? x : undefined),
    z.coerce.number({ required_error: "Rent is required" }).int()
  ),
  advanceAmount: z.preprocess(
    (x) => (x ? x : undefined),
    z.coerce.number({ required_error: "Advanced amount is required" }).int()
  ),
  availability: z.boolean().default(true),
  amenities: z.string({ required_error: "Amenities is required" }).max(255),
  flatPhoto: z.array(z.string()).optional(), // Optional array of strings
});

export const flatValidations = {
  createFlatValidation,
};
