"use client";
import { FiMapPin } from "react-icons/fi";
import { Block } from "./Block";

export const LocationBlock = () => (
  <Block className="col-span-12 flex flex-col items-center justify-center gap-4 md:col-span-3 cursor-pointer ">
    <FiMapPin className="sm:text-4xl text-2xl text-gray-300" />
    <p className="text-center text-sm sm:text-base text-zinc-400">
      Lohagara,Chattogram, Bangladesh
    </p>
  </Block>
);
