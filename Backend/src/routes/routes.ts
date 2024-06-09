import { Router } from "express";
import adminRoutes from "../app/modules/Admin/admin.router";
import bookingRoutes from "../app/modules/Bookings/booking.route";
import flatRoutes from "../app/modules/Flat/flat.route";
import profileRoutes from "../app/modules/Profile/profile.route";
import authRoutes from "../app/modules/auth/auth.route";
import metaRoutes from "../app/modules/meta/meta.route";
import userRoutes from "../app/modules/users/user.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/users",
    route: userRoutes,
  },
  {
    path: "/admin",
    route: adminRoutes,
  },
  {
    path: "/auth",
    route: authRoutes,
  },
  {
    path: "/flats",
    route: flatRoutes,
  },
  {
    path: "/meta",
    route: metaRoutes,
  },
  {
    path: "/bookings",
    route: bookingRoutes,
  },
  {
    path: "/profile",
    route: profileRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
