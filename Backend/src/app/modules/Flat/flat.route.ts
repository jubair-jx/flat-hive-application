import { UserRole } from "@prisma/client";
import { Router } from "express";
import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import { flatControllers } from "./flat.controller";
import { flatValidations } from "./flat.validation";

const flatRoutes = Router();

flatRoutes.post(
  "/create-flat",
  auth(UserRole.ADMIN, UserRole.SUPER_ADMIN, UserRole.USER),
  validateRequest(flatValidations.createFlatValidation),
  flatControllers.createFlat
);
flatRoutes.get("/", flatControllers.getAllFlats);
flatRoutes.get(
  "/get-my-flat",
  auth(UserRole.USER, UserRole.ADMIN),
  flatControllers.getMyCreatedFlat
);
flatRoutes.put(
  "/:flatId",
  auth(UserRole.ADMIN, UserRole.SUPER_ADMIN, UserRole.USER),
  validateRequest(flatValidations.updateFlatValidation),
  flatControllers.updateFlat
);
flatRoutes.delete(
  "/:id",
  auth(UserRole.ADMIN, UserRole.SUPER_ADMIN),
  flatControllers.deleteFlatFromDB
);
flatRoutes.get(
  "/:id",
  // auth(UserRole.ADMIN, UserRole.SUPER_ADMIN, UserRole.USER),
  flatControllers.getByIdFromDB
);
export default flatRoutes;
