"use client";
import HomeSectionTitle from "@/components/shared/SectionTitle/HomeSectionTitle";
import { useGetAllFlatsQuery } from "@/redux/api/flatApi";
import { useDebounce } from "@/utils/useDebounce";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SkeletonCard } from "../LoadingCard/CardSkeleton";

function SearchShowCardSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const query: Record<string, any> = {};
  const debounce = useDebounce({ searchQuery: searchTerm, delay: 700 });
  if (!!debounce) {
    query["searchTerm"] = searchTerm;
  }

  const { data: fetchedFlats, isLoading } = useGetAllFlatsQuery({ ...query });
  const [flats, setFlats] = useState([]);

  useEffect(() => {
    if (fetchedFlats) {
      const initialFlats = fetchedFlats.slice(0, 3);
      setFlats(initialFlats);
    }
  }, [fetchedFlats]);

  return (
    <section className="container mb-20">
      <HomeSectionTitle
        mainTitle="Living Life With Own Preference"
        subTitle="This is actual life, feel the fear of everything..."
      />
      <label
        className="sm:mx-auto mx-3 mt-8 relative bg-white min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-md focus-within:border-gray-300 mb-10"
        htmlFor="search-bar"
      >
        <input
          onChange={(e) => setSearchTerm(e.target.value)}
          id="search-bar"
          placeholder="Search by flat using location, rent, bedrooms, description etc..."
          className="px-6 py-2 w-full rounded-md flex-1 outline-none font-poppins text-sm bg-white"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 mr-3 text-gray-500 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </label>

      {isLoading ? (
        <div className="md:px-4 md:grid md:grid-cols-3 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0 px-4">
          {[...Array(3)].map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      ) : (
        <>
          {flats?.length === 0 ? (
            <div className="p-4 mb-4 mx-4 flex flex-col justify-center items-center text-yellow-800 border border-yellow-300 rounded-lg bg-yellow-50 ">
              <div className="flex items-center">
                <svg
                  className="flex-shrink-0 w-4 h-4 me-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                <span className="sr-only">Info</span>
                <h3 className="text-lg sm:text-2xl font-Kanit font-medium">
                  Sorry!!! Not found your searching flat...
                </h3>
              </div>
              <div className="mt-2 mb-4 text-xs font-poppins sm:text-sm">
                To know and see more flat and more details about our vision
                please click here below this button...
              </div>
              <div className="flex">
                <Link href={"/all-flats"}>
                  <button
                    type="button"
                    className="text-white duration-300 bg-black hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-xs px-3 py-1.5 me-2 text-center inline-flex items-center "
                  >
                    <svg
                      className="me-2 h-3 w-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 14"
                    >
                      <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                    </svg>
                    View more flat
                  </button>
                </Link>
                <Link href={"/contact"}>
                  <button
                    type="button"
                    className=" bg-orange-600  border border-orange-600 hover:bg-orange-700 duration-300 text-white focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center "
                    data-dismiss-target="#alert-additional-content-4"
                    aria-label="Close"
                  >
                    Contact us
                  </button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="md:px-4 md:grid md:grid-cols-2 justify-center itecm lg:grid-cols-3 gap-5 space-y-4 md:space-y-0 px-4">
              {flats?.map((item: any) => (
                <div
                  key={item?.id}
                  className="max-w-sm mx-auto  bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-95 cursor-pointer transition duration-200"
                >
                  <div className="relative mt-1">
                    <Image
                      className="w-full rounded-xl"
                      src={item?.flatPhoto[2]}
                      alt="Colors"
                      height={400}
                      width={400}
                    />
                    <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">
                      Hot Deal
                    </p>
                  </div>
                  <h1 className="mt-4 text-gray-800 flex text-lg font-Freeman sm:text-xl font-medium cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      />
                    </svg>

                    {item?.location}
                  </h1>
                  <div className="my-2 font-poppins sm:text-base text-sm">
                    <div className="flex space-x-1 items-center">
                      <span className=" font-bold text-base">৳</span>
                      <p>{item?.rent} tk</p>
                    </div>
                    <div className="flex space-x-1 items-center">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                          />
                        </svg>
                      </span>
                      <p>{item?.totalRooms} Rooms</p>
                    </div>
                    <div className="flex space-x-1 items-center">
                      <p className="inline-flex flex-col font-poppins xl:flex-row xl:items-center text-gray-800">
                        <svg
                          className="inline-block w-5 h-5 xl:w-4 xl:h-4 mr-3 fill-current text-gray-800"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="M399.959 170.585c-4.686 4.686-4.686 12.284 0 16.971L451.887 239H60.113l51.928-51.444c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0l-84.485 84c-4.686 4.686-4.686 12.284 0 16.971l84.485 84c4.686 4.686 12.284 4.686 16.97 0l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L60.113 273h391.773l-51.928 51.444c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l84.485-84c4.687-4.686 4.687-12.284 0-16.971l-84.485-84c-4.686-4.686-12.284-4.686-16.97 0l-7.07 7.071z"></path>
                        </svg>
                        <span className="mt-2 xl:mt-0">
                          {item?.squareFeet} sq. ft.
                        </span>
                      </p>
                    </div>
                    <Link href={`/flatDetails/${item?.id}`}>
                      <button className="mt-4 text-sm sm:text-base font-poppins w-full text-white bg-orange-600 py-2 rounded-xl shadow-lg">
                        Details
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </section>
  );
}

export default SearchShowCardSection;
