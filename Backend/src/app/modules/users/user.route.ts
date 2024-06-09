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
  "/create-admin",
  auth(UserRole.SUPER_ADMIN),
  validateRequest(userValidationSchemas.createAdmin),
  userControllers.createAdmin
);

//Modifed the get all user endpoint
userRoutes.get(
  "/get-all-users",
  auth(UserRole.ADMIN, UserRole.SUPER_ADMIN),
  userControllers.getAllUsers
);
userRoutes.get(
  "/:id",
  auth(UserRole.ADMIN, UserRole.SUPER_ADMIN, UserRole.USER),
  userControllers.getUserById
);

//get all normal user api, modified api route
userRoutes.get(
  "/",
  auth(UserRole.ADMIN, UserRole.SUPER_ADMIN),
  userControllers.getNormalUsers
);
userRoutes.put(
  "/normal-user-info/:id",
  auth(UserRole.ADMIN, UserRole.SUPER_ADMIN),
  userControllers.updateNormalUserData
);

export default userRoutes;
