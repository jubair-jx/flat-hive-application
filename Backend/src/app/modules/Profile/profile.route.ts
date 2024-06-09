import { UserRole } from "@prisma/client";
import { Router } from "express";
import auth from "../../middlewares/auth";
import { profileControllers } from "./profile.controller";

const profileRoutes = Router();

profileRoutes.get(
  "/",
  auth(UserRole.ADMIN, UserRole.SUPER_ADMIN),
  profileControllers.getAllProfiles
);
profileRoutes.put(
  "/update-info",
  auth(UserRole.ADMIN, UserRole.SUPER_ADMIN, UserRole.USER),
  profileControllers.updateUserProfile
);
profileRoutes.get(
  "/get-my-profile",
  auth(UserRole.ADMIN, UserRole.SUPER_ADMIN, UserRole.USER),
  profileControllers.getMyUserProfile
);

export default profileRoutes;
