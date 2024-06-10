import { jwtDecode } from "jwt-decode";

export const decodedToken = (token: string) => {
  try {
    return jwtDecode(token);
  } catch (error) {
    console.error("Invalid token provided to jwtDecode:", error);
    return null; // Return null or handle error as needed
  }
};
