import { axiosInstance } from "@/axios/axiosInstances";
import { authKey } from "@/constant/constant";
import { decodedToken } from "@/utils/jwt";
import {
  getLocalStorageUserInfo,
  removedUserInfo,
  setLocalStorage,
} from "@/utils/local-stoarge";

export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
  return setLocalStorage(authKey, accessToken);
};

export const getUserInfo = () => {
  const authToken = getLocalStorageUserInfo(authKey);
  if (authToken) {
    const decodedData: any = decodedToken(authToken);
    if (decodedData) {
      return {
        ...decodedData,
        role: decodedData?.role.toLowerCase(),
      };
    }
  }
  return null;
};

export const isLoggedIn = () => {
  const authToken = getLocalStorageUserInfo(authKey);
  if (authToken) {
    return !!authToken;
  }
};

export const removedUser = () => {
  return removedUserInfo(authKey);
};

export const getNewAccessToken = async () => {
  return await axiosInstance({
    url: `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/refresh-token`,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });
};
