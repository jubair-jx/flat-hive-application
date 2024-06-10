"use client";
import HomeSectionTitle from "@/components/shared/SectionTitle/HomeSectionTitle";
import { getUserInfo } from "@/services/auth-services";
import Link from "next/link";

export default function OneStopSolution() {
  const userInfo = getUserInfo();

  return (
    <section className=" mt-10 mb-10">
      <HomeSectionTitle
        mainTitle="One-Stop Solution For You"
        subTitle="Hey!!! you can see buy, post, check everything is here..."
      />
      <div className="container flex flex-col items-center gap-6 mx-auto my-14">
        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 px-4">
          <div className="flex flex-col h-56 w-full px-8 py-4 gap-2 border border-orange-300 border-dashed bg-gradient-to-r from-white to-orange-50 rounded-lg shadow-sm hover:translate-y-1 duration-300 cursor-pointer">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 text-orange-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </span>
            <p className="sm:text-2xl text-xl font-semibold text-dark-grey-900 font-Kanit">
              Find Your Dream Home
            </p>
            <p className="text-sm font-poppins text-dark-grey-600">
              Explore a wide range of properties to buy and make your dream home
              a reality. Our platform offers detailed listings and expert
              assistance.
            </p>
            <p>
              <Link href={"/all-flats"}>
                <button className=" px-2 py-1 mt-1 text-sm bg-orange-600 font-Kanit text-white hover:bg-orange-700 rounded duration-300 shadow-md">
                  Explore More
                </button>
              </Link>
            </p>
          </div>
          <div className="flex flex-col h-56 w-full px-8 py-4 gap-2 border border-orange-300 border-dashed bg-gradient-to-r from-white to-orange-50 rounded-lg shadow-sm hover:translate-y-1 duration-300 cursor-pointer">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 text-orange-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
                />
              </svg>
            </span>
            <p className="sm:text-2xl text-xl font-semibold text-dark-grey-900 font-Kanit">
              List Your Property for Sale
            </p>
            <p className="text-sm font-poppins text-dark-grey-600">
              Sell your property effortlessly with our comprehensive selling
              tools and expert advice. Reach a vast audience of potential
              buyers.
            </p>
            <p>
              <Link href={`/dashboard/${userInfo?.role}/post-flat`}>
                <button className=" px-2 py-1 mt-1 text-sm bg-orange-600 font-Kanit text-white hover:bg-orange-700 rounded duration-300 shadow-md">
                  Post Flat
                </button>
              </Link>
            </p>
          </div>
          <div className="flex flex-col h-56 w-full px-8 py-4 gap-2 border border-orange-300 border-dashed bg-gradient-to-r from-white to-orange-50 rounded-lg shadow-sm hover:translate-y-1 duration-300 cursor-pointer">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 text-orange-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                />
              </svg>
            </span>
            <p className="sm:text-2xl text-xl font-semibold text-dark-grey-900 font-Kanit">
              Find Rental Flats
            </p>
            <p className="text-sm font-poppins text-dark-grey-600">
              Discover the best rental properties that fit your lifestyle and
              budget. Our user-friendly platform makes renting easy and
              hassle-free.
            </p>
            <p>
              <Link href={"/all-flats"}>
                <button className=" px-2 py-1 mt-1 text-sm bg-orange-600 font-Kanit text-white hover:bg-orange-700 rounded duration-300 shadow-md">
                  View All
                </button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
