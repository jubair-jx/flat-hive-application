"use client";
import { projects } from "@/utils/svg";
import { Link } from "react-scroll";

const SeeWorkButton = () => {
  return (
    <Link
      data-aos="fade-up"
      className="duration-300 hover:translate-y-1 inline-block justify-center items-center rounded mx-auto sm:mt-0 mt-3"
      to="projects"
    >
      <button className="relative inline-flex h-11 overflow-hidden rounded-md p-[1.5px] focus:outline-none gap-2">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex font-Poppins h-full w-full cursor-pointer items-center justify-center rounded-md bg-slate-900 px-3 py-1 font-medium text-white backdrop-blur-3xl text-xs sm:text-sm">
          Show My Works <span className="ml-2">{projects}</span>
        </span>
      </button>
    </Link>
  );
};

export default SeeWorkButton;
