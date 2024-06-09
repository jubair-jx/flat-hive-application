import { UserRole } from "@prisma/client";
import { Router } from "express";
import auth from "../../middlewares/auth";
import { authControllers } from "./auth.controller";

const authRoutes = Router();

authRoutes.post("/login", authControllers.loginUser);
authRoutes.post("/refresh-token", authControllers.refreshToken);
authRoutes.post(
  "/change-password",
  auth(UserRole.ADMIN, UserRole.USER, UserRole.SUPER_ADMIN),
  authControllers.changePassword
);

export default authRoutes;
