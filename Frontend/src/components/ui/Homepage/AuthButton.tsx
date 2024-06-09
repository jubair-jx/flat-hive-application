import { logoutUser } from "@/services/action/logOutUser";
import { getUserInfo, isLoggedIn } from "@/services/auth-services";

import { useRouter } from "next/navigation";
import React from "react";
type TProps = {
  responsive: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function AuthButton({ setModalOpen, responsive }: TProps) {
  const userInfo = getUserInfo();
  const loggedIn = isLoggedIn();
  const router = useRouter();
  const logOutHandler = () => {
    logoutUser(router);
  };
  return (
    <>
      {userInfo?.role ? (
        <button
          onClick={logOutHandler}
          className="hidden lg:flex items-center justify-end md:flex-1 font-Kanit lg:w-0"
        >
          <span
            className={`${
              responsive ? "w-full" : ""
            } ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-1 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#F47C21] duration-300 hover:bg-[#f47c21e4]`}
          >
            Sign out
          </span>
        </button>
      ) : (
        <button
          onClick={() => setModalOpen(true)}
          className="hidden md:flex items-center justify-end md:flex-1 font-Kanit lg:w-0"
        >
          <span
            className={`${
              responsive ? "w-full" : ""
            } ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-1 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#F47C21] duration-300 hover:bg-[#f47c21e4]`}
          >
            Sign in
          </span>
        </button>
      )}
    </>
  );
}
