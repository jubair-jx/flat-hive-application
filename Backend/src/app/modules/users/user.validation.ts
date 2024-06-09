import { z } from "zod";

const userSchema = z.object({
  name: z.string().min(1, "Name is required"),
  username: z.string().min(1, "Username is required"),
  email: z.string().email("Invalid email address"),
  contactNumber: z.string().optional(),
  bio: z.string().optional(),
  profession: z.string().optional(),
  address: z.string().optional(),
});

const createUser = z.object({
  password: z.string().min(6, "Password must be at least 6 characters long"),
  user: userSchema,
});

const adminSchema = z.object({
  name: z.string().min(1, "Name is required"),
  username: z.string().min(1, "Username is required"),
  email: z.string().email("Invalid email address"),
  contactNumber: z.string().optional(),
  bio: z.string().optional(),
  profession: z.string().optional(),
  address: z.string().optional(),
});

const createAdmin = z.object({
  password: z.string().min(6, "Password must be at least 6 characters long"),
  admin: adminSchema,
});

export const userValidationSchemas = {
  createUser,
  createAdmin,
};
