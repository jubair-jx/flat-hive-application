"use client";
import {
  useGetMyProfileQuery,
  useUpdateProfileMutation,
} from "@/redux/api/profileApi";
import { getUserInfo } from "@/services/auth-services";
import axios from "axios";
import Image from "next/image";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import JubairImg from "../../../../../assests/info/jubair.jpg";
import ProfileUpdateModal from "./components/ProfileUpdateModal";
function UserProfileCard() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  const { role } = getUserInfo();
  const { data, isLoading, refetch } = useGetMyProfileQuery(undefined);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updateProfile] = useUpdateProfileMutation();
  const [file, setSelectedFile] = useState<string | Blob>("");
  const [uploading, setUploading] = useState(false);

  const handleFileChange = async (e: any) => {
    const selectedFile = e.target.files[0];
    setSelectedFile(selectedFile);

    if (selectedFile) {
      const cloudName = "dh0qpppfr";
      const formData = new FormData();
      formData.append("file", selectedFile);
      formData.append("upload_preset", "zx1udxzx");
      formData.append("cloud_name", cloudName);

      try {
        setUploading(true);
        const response = await axios.post(
          `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
          formData
        );
        const profilePhotoInfo = {
          profilePhoto: response?.data?.secure_url,
        };

        const res = await updateProfile(profilePhotoInfo).unwrap();
        if (res?.id) {
          toast.success("Your profile image is uploaded successfully");
        }
        await refetch();
        setUploading(false);
      } catch (error) {
        console.log(error);

        setUploading(false);
      }
    } else {
      toast.info("Please select an image file to upload");
    }
  };

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <main>
          <div
            data-aos="fade-up"
            className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10"
          >
            <div className="mx-auto max-w-242.5">
              <div className="overflow-hidden rounded-sm border">
                <div className="relative z-20 h-35 md:h-65">
                  <div
                    className={`w-full h-40 bg-gradient-to-r ${
                      role === "user"
                        ? "from-purple-800 to-slate-400 "
                        : "bg-gradient-to-r from-purple-400 to-purple-900"
                    } rounded-lg`}
                  ></div>
                  <div className="flex justify-end mt-2 sm:mt-3 mr-4">
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="font-poppins sm:text-sm text-xs font-medium bg-blue-600 sm:px-4 sm:py-2 py-2 px-3 rounded-md text-white"
                    >
                      Edit Profile
                    </button>
                  </div>
                </div>
                <div className="px-4 text-center ">
                  <div className="relative z-30 mx-auto w-full sm:max-w-44 sm:p-3">
                    <div className="relative bottom-24">
                      <Image
                        height={600}
                        width={600}
                        src={data?.profilePhoto || JubairImg}
                        alt="Profile Image"
                        className="rounded-full h-[85px] w-20 sm:h-[160px] sm:w-40 border-orange-500 sm:border-8 border-2"
                      />
                      <label
                        htmlFor="profile"
                        className="absolute -bottom-3 right-36 flex h-8.5 w-8.5 cursor-pointer items-center justify-center rounded-full bg-primary hover:bg-opacity-90 sm:bottom-2 sm:right-2 bg-blue-700 p-2"
                      >
                        <svg
                          className="fill-current size-4 sm:size-6 text-white"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.76464 1.42638C4.87283 1.2641 5.05496 1.16663 5.25 1.16663H8.75C8.94504 1.16663 9.12717 1.2641 9.23536 1.42638L10.2289 2.91663H12.25C12.7141 2.91663 13.1592 3.101 13.4874 3.42919C13.8156 3.75738 14 4.2025 14 4.66663V11.0833C14 11.5474 13.8156 11.9925 13.4874 12.3207C13.1592 12.6489 12.7141 12.8333 12.25 12.8333H1.75C1.28587 12.8333 0.840752 12.6489 0.512563 12.3207C0.184375 11.9925 0 11.5474 0 11.0833V4.66663C0 4.2025 0.184374 3.75738 0.512563 3.42919C0.840752 3.101 1.28587 2.91663 1.75 2.91663H3.77114L4.76464 1.42638ZM5.56219 2.33329L4.5687 3.82353C4.46051 3.98582 4.27837 4.08329 4.08333 4.08329H1.75C1.59529 4.08329 1.44692 4.14475 1.33752 4.25415C1.22812 4.36354 1.16667 4.51192 1.16667 4.66663V11.0833C1.16667 11.238 1.22812 11.3864 1.33752 11.4958C1.44692 11.6052 1.59529 11.6666 1.75 11.6666H12.25C12.4047 11.6666 12.5531 11.6052 12.6625 11.4958C12.7719 11.3864 12.8333 11.238 12.8333 11.0833V4.66663C12.8333 4.51192 12.7719 4.36354 12.6625 4.25415C12.5531 4.14475 12.4047 4.08329 12.25 4.08329H9.91667C9.72163 4.08329 9.53949 3.98582 9.4313 3.82353L8.43781 2.33329H5.56219Z"
                            fill=""
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.00004 5.83329C6.03354 5.83329 5.25004 6.61679 5.25004 7.58329C5.25004 8.54979 6.03354 9.33329 7.00004 9.33329C7.96654 9.33329 8.75004 8.54979 8.75004 7.58329C8.75004 6.61679 7.96654 5.83329 7.00004 5.83329ZM4.08337 7.58329C4.08337 5.97246 5.38921 4.66663 7.00004 4.66663C8.61087 4.66663 9.91671 5.97246 9.91671 7.58329C9.91671 9.19412 8.61087 10.5 7.00004 10.5C5.38921 10.5 4.08337 9.19412 4.08337 7.58329Z"
                            fill=""
                          />
                        </svg>
                        <input
                          type="file"
                          onChange={handleFileChange}
                          name="profile"
                          id="profile"
                          className="sr-only"
                        />
                      </label>
                    </div>
                  </div>

                  <div className="relative bottom-20">
                    <h3 className="sm:text-3xl text-xl font-semibold font-Kanit text-black ">
                      {data?.name}
                    </h3>
                    <p className="font-medium font-poppins text-lg text-gray-700">
                      {data?.profession || "Coming soon..."}
                    </p>
                    <p className="font-medium font-poppins text-sm mt-1 text-gray-600">
                      @{data?.username}
                    </p>

                    <div className="mx-auto mb-5 font-poppins mt-6 grid md:w-2/3 sm:w-2/5 w-full grid-cols-3 rounded-md border border-gray-500 py-2.5 shadow-1 border-strokedark bg-[#ebeff6] border-dashed">
                      <div className="flex flex-col items-center justify-center gap-1 border-r border-stroke px-4 border-strokedark xsm:flex-row">
                        <span className="font-bold sm:text-lg text-xs text-black ">
                          259
                        </span>
                        <span className="sm:text-sm text-xs">Flat</span>
                      </div>
                      <div className="flex flex-col items-center justify-center gap-1 border-r border-stroke px-4 dark:border-strokedark xsm:flex-row">
                        <span className="font-bold sm:text-lg text-xs text-black ">
                          129K
                        </span>
                        <span className="sm:text-sm text-xs">Pending</span>
                      </div>
                      <div className="flex flex-col items-center justify-center gap-1 px-4 xsm:flex-row">
                        <span className="font-bold sm:text-lg text-xs text-black ">
                          2K
                        </span>
                        <span className="sm:text-sm text-xs">Confirmed</span>
                      </div>
                    </div>

                    <div className="mx-auto max-w-180">
                      <h4 className="font-semibold font-Kanit text-2xl text-black ">
                        About Me
                      </h4>
                      <p className="mt-4.5 text-sm font-normal w-full sm:w-96 mx-auto text-center font-poppins">
                        {data?.bio || "Coming soon..."}
                      </p>
                    </div>
                    <div>
                      <div className="mt-4">
                        <h1 className="text-center text-2xl font-semibold font-Kanit">
                          Personal information
                        </h1>
                        <div className="bg-gray-50 max-w-[660px] mx-auto shadow-sm overflow-hidden sm:rounded-lg rounded-md">
                          <div className="px-4 py-5 sm:px-6">
                            <p className="mt-1 max-w-2xl text-sm font-poppins text-gray-800 font-semibold">
                              Details and information about user.
                            </p>
                          </div>
                          <div className="border border-dashed shadow border-gray-400">
                            <dl>
                              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="sm:text-xl text-lg font-medium font-Kanit text-gray-800">
                                  Full name
                                </dt>
                                <dd className="mt-1 text-sm font-medium font-poppins text-gray-900 sm:mt-0 sm:col-span-2">
                                  {data?.name}
                                </dd>
                              </div>
                              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="sm:text-xl text-lg font-medium font-Kanit text-gray-800">
                                  Role
                                </dt>
                                <dd className="mt-1 text-sm font-medium font-poppins text-gray-900 sm:mt-0 sm:col-span-2">
                                  {data?.user?.role}
                                </dd>
                              </div>
                              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="sm:text-xl text-lg font-medium font-Kanit text-gray-800">
                                  Email Address
                                </dt>
                                <dd className="mt-1 text-sm font-medium font-poppins text-gray-900 sm:mt-0 sm:col-span-2">
                                  {data?.email}
                                </dd>
                              </div>

                              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="sm:text-xl text-lg font-medium font-Kanit text-gray-800">
                                  Contact
                                </dt>
                                <dd className="mt-1 text-sm font-medium font-poppins text-gray-900 sm:mt-0 sm:col-span-2">
                                  {data?.contactNumber}
                                </dd>
                              </div>
                              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="sm:text-xl text-lg font-medium font-Kanit text-gray-800">
                                  Address
                                </dt>
                                <dd className="mt-1 text-sm font-medium font-poppins text-gray-900 sm:mt-0 sm:col-span-2">
                                  {data?.address || "Coming soon..."}
                                </dd>
                              </div>
                              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="sm:text-xl text-lg font-medium font-Kanit text-gray-800">
                                  Profession
                                </dt>
                                <dd className="mt-1 text-sm font-medium font-poppins text-gray-900 sm:mt-0 sm:col-span-2">
                                  {data?.profession || "Coming soon..."}
                                </dd>
                              </div>
                              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="sm:text-lg text-sm font-medium font-Kanit text-gray-800">
                                  About
                                </dt>
                                <dd className="mt-1 text-sm font-poppins text-gray-900 sm:mt-0 sm:col-span-2">
                                  {data?.bio || "Coming soon..."}
                                </dd>
                              </div>
                            </dl>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      )}
      <ProfileUpdateModal
        refetch={refetch}
        open={isModalOpen}
        setOpen={setIsModalOpen}
        id={data?.id}
        data={data}
      />
    </>
  );
}

export default UserProfileCard;
