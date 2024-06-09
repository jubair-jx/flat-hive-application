import { UserRole } from "@prisma/client";
import { Router } from "express";
import auth from "../../middlewares/auth";
import { bookingsControlller } from "./booking.controller";

const bookingRoutes = Router();

bookingRoutes.post(
  "/create-booking",
  auth(UserRole.ADMIN, UserRole.USER),
  bookingsControlller.bookingFlat
);
bookingRoutes.get(
  "/booking-application",
  auth(UserRole.ADMIN, UserRole.USER, UserRole.SUPER_ADMIN),
  bookingsControlller.getAllFlats
);
bookingRoutes.get(
  "/my-booking-application",
  auth(UserRole.ADMIN, UserRole.USER),
  bookingsControlller.getMyRequestedFlat
);
bookingRoutes.put(
  "/:bookingId",
  auth(UserRole.ADMIN, UserRole.SUPER_ADMIN),
  bookingsControlller.UpdateFlatBookingStatus
);

export default bookingRoutes;
