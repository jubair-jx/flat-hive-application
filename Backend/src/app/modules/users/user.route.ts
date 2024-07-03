import { UserRole } from "@prisma/client";
import { Router } from "express";
import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import { userControllers } from "./user.controller";
import { userValidationSchemas } from "./user.validation";

const userRoutes = Router();
userRoutes.post(
  "/create-user",
  validateRequest(userValidationSchemas.createUser),
  userControllers.createUser
);
userRoutes.post(
  "/create-dashboard-admin",
  validateRequest(userValidationSchemas.createAdmin),
  userControllers.createAdmin
);

//Modifed the get all user endpoint
userRoutes.get(
  "/get-all-users",
  auth(UserRole.ADMIN, UserRole.SUPER_ADMIN),
  userControllers.getAllUsers
);

export default userRoutes;
