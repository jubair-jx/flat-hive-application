import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { authKey } from "./constant/constant";
type Role = keyof typeof roleBasedPrivateRoutes;
// This function can be marked `async` if using `await` inside
const AuthRoutes = ["/"];
const commonPrivateRoutes = ["/dashboard", "/dashboard/change-password"];
const roleBasedPrivateRoutes = {
  USER: [/^\/dashboard\/user/],
  ADMIN: [/^\/dashboard\/admin/],
  SUPER_ADMIN: [/^\/dashboard\/super_admin/],
};
function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const accessToken = cookies().get(authKey)?.value;
  //this condition for login and register routes

  if (!accessToken) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  if (accessToken && commonPrivateRoutes.includes(pathname)) {
    return NextResponse.next();
  }
  // if (
  //   accessToken &&
  //   (commonPrivateRoutes.includes(pathname) ||
  //     commonPrivateRoutes.some((route) => pathname.startsWith(route)))
  // ) {
  //   return NextResponse.next();
  // }
  let decodedData = null;
  if (accessToken) {
    decodedData = jwtDecode(accessToken) as any;
  }
  const role = decodedData?.role;

  //   if (role === "ADMIN" && pathname.startsWith("/dashboard/admin")) {
  //     return NextResponse.next();
  //   }

  //   if (role === "DOCTOR" && pathname.startsWith("/dashboard/doctor")) {
  //     return NextResponse.next();
  //   }
  if (role && roleBasedPrivateRoutes[role as Role]) {
    const routes = roleBasedPrivateRoutes[role as Role];
    if (routes.some((route) => pathname.match(route))) {
      return NextResponse.next();
    }
  }
  return NextResponse.redirect(new URL("/", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/dashboard/:page*", "/dashboard"],
};

export default middleware;
