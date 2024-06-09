import { useGetMyProfileQuery } from "@/redux/api/profileApi";
import { getUserInfo } from "@/services/auth-services";
import { Avatar } from "@mui/material";
import Image from "next/image";

import Link from "next/link";

function ProfileNav({ responsive }: { responsive: boolean }) {
  const userInfo = getUserInfo();
  const { data, isLoading } = useGetMyProfileQuery({});
  console.log(userInfo);
  return (
    <>
      {userInfo?.role && (
        <div
          className={`${
            responsive ? "lg:hidden block mt-6" : "lg:block hidden "
          }`}
        >
          {!isLoading ? (
            <Link title="Go to Dashboard" href={`/dashboard/${userInfo?.role}`}>
              {data?.profilePhoto ? (
                <Image
                  className=" w-10 h-10 rounded-full border border-orange-500"
                  src={data?.profilePhoto}
                  alt="Profile Image"
                  height={200}
                  width={200}
                />
              ) : (
                <Avatar
                  sx={{ border: 3, borderRadius: 50, borderColor: "#FFC96F" }}
                  src="/broken-image.jpg"
                />
              )}
            </Link>
          ) : (
            <Avatar
              sx={{ border: 3, borderRadius: 50, borderColor: "#FFC96F" }}
              src="/broken-image.jpg"
            />
          )}
        </div>
      )}
    </>
  );
}

export default ProfileNav;
