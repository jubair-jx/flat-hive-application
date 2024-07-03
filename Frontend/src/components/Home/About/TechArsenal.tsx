"use client";
import { myTechStack } from "@/data";
import Marquee from "react-fast-marquee";
import { Block } from "./Block";
export const TechArsenal = () => (
  <Block className="col-span-12 md:col-span-9">
    <p className="mb-2 text-lg font-semibold sm:text-xl font-Rubik text-gray-300 text-center">
      Meet My Tech{" "}
      <span className="bg-gradient-to-r animate-text font-bold from-violet-500 via-purple-300 to-violet-400 bg-clip-text text-transparent">
        Arsenal
      </span>
    </p>

    <Marquee
      gradient={true}
      speed={30}
      gradientColor={"#131426c6"}
      pauseOnHover={true}
      gradientWidth={200}
      direction="right"
    >
      {myTechStack?.map((item) => (
        <div
          key={item?.id}
          className="inline-block mr-1 sm:mr-2 justify-center items-center rounded-md mx-auto"
        >
          <button className="inline-flex gap-2 h-9 shadow-md animate-shimmer items-center justify-center rounded-md border border-gray-400 bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-[length:200%_100%] px-4 sm:px-6 font-normal text-slate-100 mx-auto font-Kanit text-sm  transition-colors focus:outline-none ">
            <span>
              {" "}
              <item.icon fontSize={20} />
            </span>
            {item?.name}
          </button>
        </div>
      ))}
    </Marquee>
    <Marquee
      gradient={true}
      speed={30}
      gradientColor={"#131426c6"}
      pauseOnHover={true}
      className=" mt-2"
      gradientWidth={200}
    >
      {myTechStack?.map((item) => (
        <div
          key={item?.id}
          className="inline-block mr-1 sm:mr-2 justify-center items-center rounded-md mx-auto"
        >
          <button className="inline-flex gap-2 h-9 shadow-md animate-shimmer items-center justify-center rounded-md border border-gray-400 bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-[length:200%_100%] px-4 sm:px-6 font-normal text-slate-100 mx-auto font-Kanit text-sm  transition-colors focus:outline-none ">
            <span>
              {" "}
              <item.icon fontSize={20} />
            </span>
            {item?.name}
          </button>
        </div>
      ))}
    </Marquee>
  </Block>
);
