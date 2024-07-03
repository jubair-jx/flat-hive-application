"use client";
import { cn } from "@/utils/cn";
import { motion, stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 1,
        delay: stagger(0.2),
      }
    );
  }, [animate]);

  const renderWords = () => {
    return (
      <motion.span ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="tracking-wider font-Rubik  font-extrabold text-[25px]  sm:text-[47px] bg-gradient-to-r animate-text from-red-100 via-purple-300 to-violet-200 bg-clip-text text-transparent opacity-0"
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.span>
    );
  };

  return (
    <span className={cn("font-bold", className)}>
      <span className="mt-4">
        <span className=" dark:text-white text-black text-2xl leading-snug tracking-wide">
          {renderWords()}
        </span>
      </span>
    </span>
  );
};
