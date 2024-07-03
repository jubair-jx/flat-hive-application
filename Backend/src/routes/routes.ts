import { Router } from "express";

import authRoutes from "../app/modules/auth/auth.route";
import userRoutes from "../app/modules/users/user.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/owner",
    route: userRoutes,
  },
  {
    path: "/auth",
    route: authRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
