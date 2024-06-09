import { UserRole } from "@prisma/client";
import { Router } from "express";
import auth from "../../middlewares/auth";
import { userControllers } from "../users/user.controller";

const adminRoutes = Router();

adminRoutes.get(
  "/get-admins",
  auth(UserRole.SUPER_ADMIN),
  userControllers.getAllAdminFromDB
);

adminRoutes.put(
  "/admin-info/:id",
  auth(UserRole.ADMIN, UserRole.SUPER_ADMIN),
  userControllers.updateAdminData
);
export default adminRoutes;
