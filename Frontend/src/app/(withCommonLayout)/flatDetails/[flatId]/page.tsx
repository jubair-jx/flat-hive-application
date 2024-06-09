"use client";
import RelatedFlatCard from "@/components/FlatDetailsPage/RelatedFlatCard";
import LoadingUI from "@/components/ui/Loading/Loading";
import { useGetFlatByIdQuery } from "@/redux/api/flatApi";
import { getUserInfo } from "@/services/auth-services";
import Image from "next/image";
import Link from "next/link";

type TProps = {
  params: {
    flatId: string;
  };
};
function FlatDetailPage({ params }: TProps) {
  const { flatId } = params;
  const { data, isLoading } = useGetFlatByIdQuery(flatId);
  const userInfo = getUserInfo();

  return (
    <>
      {!isLoading ? (
        <main className="my-8">
          <div className="container mx-auto px-6">
            <div
              className={`h-64 rounded-md overflow-hidden bg-cover bg-center`}
              style={{ backgroundImage: `url('${data?.flatPhoto[0]}')` }}
            >
              <div className="bg-gray-900 bg-opacity-60 flex items-center h-full shadow-md">
                <div className="px-10 max-w-xl">
                  <h2 className="sm:text-3xl text-xl text-white font-semibold font-Kanit">
                    Past is Past Living With Present...
                  </h2>
                  <p className="mt-2 text-gray-300 sm:text-base text-xs font-normal font-poppins">
                    {data?.description}
                  </p>

                  <Link
                    href={`/dashboard/${userInfo?.role}/flat-share-request`}
                  >
                    <button className="flex items-center mt-4 sm:px-4 sm:py-3 px-3 py-2 bg-orange-600 text-white text-xs sm:text-sm uppercase font-medium rounded hover:bg-orange-500 focus:outline-none ">
                      <span>Request The flat</span>
                      <svg
                        className="h-5 w-5 mx-2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="md:flex mt-8 md:-mx-4">
              <div
                className="w-full h-64 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:w-1/2"
                style={{ backgroundImage: `url('${data?.flatPhoto[1]}')` }}
              >
                <div className="bg-gray-900 bg-opacity-70 flex items-center h-full">
                  <div className="px-10 max-w-xl">
                    <h2 className="sm:text-3xl text-xl text-white font-normal font-Freeman">
                      Remember The Story
                    </h2>
                    <p className="mt-2 text-gray-300 font-poppins sm:text-base text-xs">
                      {data?.utilitiesDescription}
                    </p>
                    <button className="flex items-center mt-4 border border-white px-3 py-2 text-white text-sm uppercase duration-200 font-medium rounded hover:underline focus:outline-none">
                      <span>Visit More</span>
                      <svg
                        className="h-5 w-5 mx-2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div
                className="w-full h-64 mt-8 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:mt-0 md:w-1/2"
                style={{ backgroundImage: `url('${data?.flatPhoto[2]}')` }}
              >
                <div className="bg-gray-900 bg-opacity-70 flex items-center h-full">
                  <div className="px-10 max-w-xl">
                    <h2 className="sm:text-3xl text-xl text-white font-normal font-Freeman">
                      {" "}
                      See This Amazing way
                    </h2>
                    <p className="mt-2 text-gray-300 font-poppins text-xs sm:text-base">
                      {data?.description}
                    </p>
                    <button className="flex items-center mt-4 text-white text-sm  border-2 border-orange-600 px-3 py-2 uppercase font-medium rounded hover:underline focus:outline-none duration-200">
                      <span>Share Happiness</span>
                      <svg
                        className="h-5 w-5 mx-2 text-orange-500"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* About Section first counting others section card         */}
            <div className=" mt-8">
              <h1 className=" sm:text-3xl text-xl text-gray-800 font-semibold font-Kanit">
                About the flat details
              </h1>
              <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4 mt-6 mx-auto">
                <div className="flex items-center p-4 hover:translate-y-1 cursor-pointer duration-300 bg-white rounded-md shadow-sm border border-gray-300 border-dashed ">
                  <div
                    className={` p-3 mr-4  rounded-full bg-orange-100 text-orange-600  `}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="sm:text-[18px] text-[16px] font-semibold font-poppins text-gray-600 ">
                      {"Total Rooms"}
                    </p>
                    <p className="text-xl font-Kanit font-semibold text-gray-800">
                      {data?.totalRooms}
                    </p>
                  </div>
                </div>
                <div className="flex items-center p-4 hover:translate-y-1 cursor-pointer duration-300 bg-white rounded-md shadow-sm border border-gray-300 border-dashed ">
                  <div
                    className={` p-3 mr-4  rounded-full bg-orange-100 text-orange-600  `}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="sm:text-[18px] text-[16px] font-semibold font-poppins text-gray-600 ">
                      {"Square Feet"}
                    </p>
                    <p className="text-xl font-Kanit font-semibold text-gray-800">
                      {data?.squareFeet}
                    </p>
                  </div>
                </div>
                <div className="flex items-center p-4 hover:translate-y-1 cursor-pointer duration-300 bg-white rounded-md shadow-sm border border-gray-300 border-dashed ">
                  <div
                    className={` p-3 mr-4  rounded-full bg-orange-100 text-orange-600  `}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="sm:text-[18px] text-[16px] font-semibold font-poppins text-gray-600 ">
                      {"Rent Price"}
                    </p>
                    <p className="text-xl font-Kanit font-semibold text-gray-800">
                      {data?.rent} ৳
                    </p>
                  </div>
                </div>
                <div className="flex items-center p-4 hover:translate-y-1 cursor-pointer duration-300 bg-white rounded-md shadow-sm border border-gray-300 border-dashed ">
                  <div
                    className={` p-3 mr-4  rounded-full bg-orange-100 text-orange-600  `}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="sm:text-[18px] text-[16px] font-semibold font-poppins text-gray-600 ">
                      {"Total Bedrooms"}
                    </p>
                    <p className="text-xl font-Kanit font-semibold text-gray-800">
                      {data?.totalBedrooms}
                    </p>
                  </div>
                </div>
              </div>

              {/* About Section first counting others section card end*/}
              {/* About Section Details info card start*/}
              <div className="container mx-auto mt-8">
                <div className="flex flex-wrap items-center">
                  <div className="w-full md:w-6/12 lg:w-2/4 px-2 md:px-4 mr-auto ml-auto -mt-78">
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-orange-500">
                      <Image
                        width={300}
                        height={300}
                        alt="Flat Details Image"
                        src={data?.flatPhoto[1]}
                        className="w-full align-middle rounded-t-lg opacity-60 hover:opacity-100 duration-300 ease-linear cursor-pointer"
                      />
                      <blockquote className="relative p-8 mb-4">
                        <svg
                          preserveAspectRatio="none"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 583 95"
                          className="absolute left-0 w-full block h-95-px -top-94-px"
                        >
                          <polygon
                            points="-30,95 583,95 583,65"
                            className="text-orange-200 opacity-30 fill-current"
                          ></polygon>
                        </svg>
                        <h4 className="sm:text-2xl text-xl font-bold text-white font-Kanit">
                          Living Life With The Amazing World...
                        </h4>
                        <p className="sm:text-sm text-xs font-poppins font-light mt-2 text-white">
                          {data?.description}
                        </p>
                      </blockquote>
                    </div>
                  </div>

                  <div className="w-full md:w-6/12 px-4">
                    <div className="flex flex-wrap">
                      <div className="w-full md:w-6/12 px-4">
                        <div className="relative flex flex-col bg-violet-100 cursor-pointer hover:translate-y-1 duration-200 rounded-md">
                          <div className="px-4 py-5 flex-auto">
                            <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-violet-200 text-violet-900 ">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="size-6"
                              >
                                <path d="M11.625 16.5a1.875 1.875 0 1 0 0-3.75 1.875 1.875 0 0 0 0 3.75Z" />
                                <path
                                  fillRule="evenodd"
                                  d="M5.625 1.5H9a3.75 3.75 0 0 1 3.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 0 1 3.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 0 1-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875Zm6 16.5c.66 0 1.277-.19 1.797-.518l1.048 1.048a.75.75 0 0 0 1.06-1.06l-1.047-1.048A3.375 3.375 0 1 0 11.625 18Z"
                                  clipRule="evenodd"
                                />
                                <path d="M14.25 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 16.5 7.5h-1.875a.375.375 0 0 1-.375-.375V5.25Z" />
                              </svg>
                            </div>
                            <h6 className="sm:text-xl text-lg mb-1 font-semibold font-Kanit">
                              Utilities Description
                            </h6>
                            <p className="mb-4 text-gray-700 font-normal font-poppins sm:text-sm text-xs">
                              {data?.utilitiesDescription}
                            </p>
                          </div>
                        </div>
                        <div className="relative flex flex-col min-w-0 rounded-md">
                          <div className="px-4 py-5 flex-auto">
                            <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-violet-200 text-violet-900 ">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="size-6"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                            <h6 className="sm:text-xl text-lg mb-1 font-semibold font-Kanit">
                              Flat Location
                            </h6>
                            <p className="mb-4 text-gray-700 font-normal font-poppins sm:text-sm text-xs">
                              {data?.location}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="w-full md:w-6/12 px-4">
                        <div className="relative flex flex-col min-w-0  rounded-md">
                          <div className="px-4 py-5 flex-auto">
                            <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-violet-200 text-violet-900 ">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="size-6"
                              >
                                <path d="M18.75 12.75h1.5a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM12 6a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 6ZM12 18a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 18ZM3.75 6.75h1.5a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM5.25 18.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5ZM3 12a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 3 12ZM9 3.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM12.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM9 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
                              </svg>
                            </div>
                            <h6 className="sm:text-xl text-lg mb-1 font-semibold font-Kanit">
                              Amenities
                            </h6>
                            <p className="mb-4 text-gray-700 font-normal font-poppins sm:text-sm text-xs">
                              {data?.amenities}
                            </p>
                          </div>
                        </div>
                        <div className="relative flex flex-col cursor-pointer hover:translate-y-1 duration-300 min-w-0 mt-16 bg-violet-100 rounded-md">
                          <div className="px-4 py-5 flex-auto">
                            <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-violet-200 text-violet-900 ">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="size-6"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                            <h6 className="sm:text-xl text-lg mb-1 font-semibold font-Kanit">
                              Description
                            </h6>
                            <p className="mb-4 text-gray-700 font-normal font-poppins sm:text-sm text-xs">
                              {data?.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" flex justify-center items-center">
                  <Link
                    href={`/dashboard/${userInfo?.role}/flat-share-request`}
                  >
                    {" "}
                    <button className="flex items-center justify-center shadow-md mt-4 sm:px-4 sm:py-3 px-3 py-2 bg-orange-600 text-white text-xs sm:text-sm uppercase font-medium rounded hover:bg-orange-500 duration-300 focus:outline-none ">
                      <span>Request For The flat</span>
                      <svg
                        className="h-5 w-5 mx-2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <h3 className="sm:text-3xl text-xl text-gray-800 font-semibold font-Kanit">
                See the more related flats
              </h3>

              <RelatedFlatCard role={userInfo?.role} />
            </div>
          </div>
        </main>
      ) : (
        <div>
          <LoadingUI />
        </div>
      )}
    </>
  );
}

export default FlatDetailPage;
