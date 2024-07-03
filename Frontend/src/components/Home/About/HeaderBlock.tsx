"use client";
import jubairImg from "@/assets/Home/jubair.jpg";
import Image from "next/image";
import Link from "next/link";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { Block } from "./Block";

export const HeaderBlock = () => (
  <Block className="col-span-12 row-span-2 md:col-span-6">
    <div className=" flex gap-3 sm:mt-4 mt-1">
      <Image
        src={jubairImg}
        height={300}
        width={300}
        alt="Profile Image"
        className=" h-20 w-20 rounded-md border-2 border-gray-300"
      />
      <div className=" flex  flex-col   ">
        <div className="h-8  w-full justify-center bg-[#1919199b] gap-2 rounded-lg border flex items-center border-gray-600">
          <h3 className=" h-2 w-2 rounded-full bg-green-500 duration-150 animate-ping"></h3>
          <h1 className="text-white text-xs font-Poppins">Available To Work</h1>
        </div>
        <h1 className=" mt-2 text-white text-xl font-Kanit">
          Hi ! This is <span className=" text-violet-300">Jubair</span>
        </h1>
      </div>
    </div>
    <div className=" mt-5 flex gap-1 flex-wrap sm:justify-start sm:items-start justify-center items-center">
      <div className="flex-initial cursor-pointer duration-200 hover:scale-95  rounded-full px-2 py-2 text-gray-200 font-Poppins bg-[#191919] border-[#383838] border leading-none text-xs font-normal">
        Web Developer
      </div>
      <div className="flex-initial cursor-pointer duration-200 hover:scale-95  rounded-full px-2 py-2 text-gray-200 font-Poppins bg-[#191919] border-[#383838] border leading-none text-xs font-normal">
        App Developer
      </div>
      <div className="flex-initial cursor-pointer duration-200 hover:scale-95  rounded-full px-2 py-2 text-gray-200 font-Poppins bg-[#191919] border-[#383838] border leading-none text-xs font-normal">
        Software Engineer
      </div>
      <div className="flex-initial cursor-pointer duration-200 hover:scale-95  rounded-full px-2 py-2 text-gray-200 font-Poppins bg-[#191919] border-[#383838] border leading-none text-xs font-normal">
        Content Creator
      </div>
    </div>
    <div className=" sm:mt-6 mt-2 flex gap-1 flex-wrap justify-center items-center">
      <Link
        target="_blank"
        className=" inline-block justify-center items-center rounded mx-auto sm:mt-0 mt-3"
        href={`https://web.facebook.com/jubair.jx/`}
      >
        <button className="relative inline-flex h-11 overflow-hidden rounded-md p-[1.78px] focus:outline-none gap-2">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex font-Poppins h-full w-full cursor-pointer items-center justify-center rounded-md bg-slate-900 sm:px-8 px-20 py-1 text-xs font-medium text-white backdrop-blur-3xl">
            Facebook
            <span className=" ml-2">
              <CiFacebook size={22} />
            </span>
          </span>
        </button>
      </Link>
      <Link
        target="_blank"
        className="  inline-block justify-center items-center rounded mx-auto sm:mt-0 mt-3"
        href={`https://www.linkedin.com/in/mohammad-jubair/`}
      >
        <button className="relative inline-flex h-11 overflow-hidden rounded-md  p-[1.78px] focus:outline-none gap-2">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex font-Poppins h-full w-full cursor-pointer items-center justify-center rounded-md bg-slate-900 sm:px-8 px-[87px] py-1 text-xs font-medium text-white backdrop-blur-3xl">
            Linkedin{" "}
            <span className="ml-2">
              <CiLinkedin size={22} />
            </span>
          </span>
        </button>
      </Link>
      <Link
        target="_blank"
        className=" inline-block justify-center items-center rounded mx-auto sm:mt-0 mt-3"
        href={`https://github.com/jubair-jx`}
      >
        <button className="relative inline-flex h-11 overflow-hidden rounded-md  p-[1.78px] focus:outline-none gap-2">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex font-Poppins h-full w-full cursor-pointer items-center justify-center rounded-md bg-slate-900 sm:px-8 px-[90px] py-1 text-xs font-medium text-white backdrop-blur-3xl">
            Github{" "}
            <span className="ml-2">
              <FiGithub size={22} />
            </span>
          </span>
        </button>
      </Link>
    </div>
  </Block>
);
