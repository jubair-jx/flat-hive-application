"use client";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

export const Block = ({ className, ...rest }: any) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        "col-span-4 rounded-lg border border-zinc-700 bg-gray-900  shadow-md p-6",
        className
      )}
      {...rest}
    />
  );
};
