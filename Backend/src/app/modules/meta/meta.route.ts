import { UserRole } from "@prisma/client";
import { Router } from "express";
import auth from "../../middlewares/auth";
import { MetaController } from "./meta.controller";

const metaRoutes = Router();

metaRoutes.get(
  "/",
  auth(UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.USER),
  MetaController.getAllMetaData
);

export default metaRoutes;
