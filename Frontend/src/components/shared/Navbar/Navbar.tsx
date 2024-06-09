"use client";
import LoginModal from "@/components/FormModal/LoginModal";
import { logoutUser } from "@/services/action/logOutUser";
import { getUserInfo } from "@/services/auth-services";
import ApartmentIcon from "@mui/icons-material/Apartment";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import { ListItemIcon } from "@mui/material";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
const NavBar = () => {
  const AuthButton = dynamic(
    () => import("@/components/ui/Homepage/AuthButton"),
    {
      ssr: false,
    }
  );
  const ProfileNav = dynamic(
    () => import("@/components/ui/Homepage/ProfileNav"),
    {
      ssr: false,
    }
  );

  const [openModal, setModalOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const isUserExist = getUserInfo();

  useEffect(() => {
    setIsClient(true);
  }, []);
  const router = useRouter();
  const logOutHandler = () => {
    logoutUser(router);
  };
  const navData = [
    { id: 0, name: "Home", link: "/", icon: HomeIcon },
    { id: 1, name: "About Us", link: "/about", icon: InfoIcon },

    {
      id: 3,
      name: "Flats",
      link: "/all-flats",
      icon: ApartmentIcon,
    },
    {
      id: 4,
      name: "Contact Us",
      link: "/contact",
      icon: ConnectWithoutContactIcon,
    },
    { id: 2, name: "Blog", link: "/blog", icon: LocalLibraryIcon },
    {
      id: 5,
      name: "Dashboard",
      link: `/dashboard/${isUserExist?.role}`,
      icon: SpaceDashboardIcon,
    },
  ];

  const conditionFilterNavData = navData.filter((item) => {
    if (item.name === "Dashboard" && !isUserExist?.role) {
      return false;
    }
    return true;
  });

  const [open, setOpen] = useState(false);

  if (!isClient) {
    // Render a fallback while waiting for client-side hydration
    return null;
  }
  return (
    <>
      <header className=" sticky top-0 left-0 right-0 z-50 transition-all duration-300 ease-linear bg-white container mx-auto lg:px-4 px-2 ">
        <div className="  mx-auto px-4 sm:px-0">
          <div className="flex justify-between items-center border-b-2 border-gray-100 py-4 lg:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1 active:scale-110 duration-300">
              <Link href="/">
                <h1 className=" font-bold text-3xl font-Freeman">
                  Flat<span className=" text-[#F47C21]">Hive</span>
                </h1>
              </Link>
            </div>
            <div onClick={() => setOpen(!open)} className=" lg:hidden">
              <button className="bg-white rounded-md inline-flex items-center justify-center text-gray-700 hover:text-gray-500  ">
                <span className="sr-only">Open menu</span>
                {/* Heroicon name: outline/menu */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                  />
                </svg>
              </button>
            </div>
            <nav className="hidden lg:flex space-x-8 font-poppins">
              {conditionFilterNavData?.map((data) => (
                <Link
                  className="text-sm font-medium text-gray-700 hover:text-gray-900"
                  key={data.id}
                  href={data.link}
                >
                  {data.name}
                </Link>
              ))}
            </nav>
            <AuthButton responsive={false} setModalOpen={setModalOpen} />
            <ProfileNav responsive={false} />
          </div>
        </div>

        <div
          className={
            open
              ? "opacity-100 scale-100 duration-500 absolute top-0 inset-x-0 p-2 transition-all ease-linear transform origin-top-right lg:hidden block"
              : "opacity-0 scale-110 duration-500 absolute top-0 inset-x-0 p-2 transition transform origin-top-right hidden"
          }
        >
          <div className="rounded-lg shadow-lg ring-1 z-50 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between active:scale-110 duration-300">
                <Link href="/">
                  <h1 className=" font-bold text-2xl font-Freeman">
                    Flat<span className=" text-[#F47C21]">Hive</span>
                  </h1>
                </Link>
                <div className="">
                  <button
                    type="button"
                    className="bg-gray-200 rounded-md p-2 inline-flex items-center justify-center text-gray-600 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    onClick={() => setOpen(!open)}
                  >
                    <span className="sr-only">Close menu</span>

                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {conditionFilterNavData?.map((data) => (
                    <Link
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                      key={data.id}
                      href={data.link}
                    >
                      <ListItemIcon
                        sx={{
                          color: "#fb8c00",
                        }}
                      >
                        {data.icon && <data.icon />}
                      </ListItemIcon>
                      <span className="ml-3 text-base font-medium text-gray-900">
                        {data.name}
                      </span>
                    </Link>
                  ))}
                </nav>
              </div>
              <ProfileNav responsive={true} />
            </div>
            <div className="py-6 px-5 space-y-6">
              <div>
                {isUserExist?.role ? (
                  <a
                    onClick={logOutHandler}
                    className="w-full cursor-pointer flex items-center justify-center px-4 py-1 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#fb8c00]"
                  >
                    Sign out
                  </a>
                ) : (
                  <a
                    onClick={() => setModalOpen(true)}
                    className="w-full cursor-pointer flex items-center justify-center px-4 py-1 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#fb8c00]"
                  >
                    Sign in
                  </a>
                )}

                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  {"Dont't have an account?"}
                  <span className="text-orange-600">Sign up</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <LoginModal open={openModal} setModalOpen={setModalOpen} />
    </>
  );
};
export default NavBar;
