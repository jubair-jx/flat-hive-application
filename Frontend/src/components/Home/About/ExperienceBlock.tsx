"use client";

import { ExperineceData } from "@/data";
import { Block } from "./Block";

export const ExperineceBlock = () => (
  <>
    {ExperineceData?.map((item) => (
      <Block
        key={item.id}
        whileHover={{
          rotate: "2.5deg",
          scale: 1.1,
        }}
        className="col-span-6 bg-[#131426c6] md:col-span-3 cursor-pointer"
      >
        <div className="grid h-full place-content-center mx-auto  ">
          <h1 className=" font-Rubik text-center text-3xl sm:text-4xl font-bold bg-gradient-to-b from-gray-100 to-gray-400 bg-clip-text text-transparent">
            {item?.count}{" "}
            <span
              className="
         sm:text-4xl text-3xl font-semibold bg-gradient-to-r animate-text from-violet-500 via-purple-300 to-violet-400 bg-clip-text text-transparent"
            >
              +
            </span>
          </h1>
          <div className="flex items-center gap-1 cursor-pointer mx-auto text-center duration-200 mt-1 sm:mt-2 hover:scale-95  rounded-full px-4 py-2 text-gray-200 font-Poppins bg-[#191919cb] border-[#383838] border leading-none text-[10px] sm:text-sm font-normal">
            <item.icon />

            {item?.title}
          </div>
        </div>
      </Block>
    ))}
  </>
);
