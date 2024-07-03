"use client";

import { mobileNavItems, navItems } from "@/data";
import { cn } from "@/utils/cn";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";

export const FloatingNav = ({ className }: { className?: string }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Check the initial screen size

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const itemsToDisplay = isMobile ? mobileNavItems : navItems;
  const { scrollYProgress } = useScroll();

  // set true for the initial state so that nav bar is visible in the hero section
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        // also set true for the initial state
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          // change rounded-full to rounded-lg
          // remove dark:border-white/[0.2] dark:bg-black bg-white border-transparent
          // change  pr-2 pl-8 py-2 to px-10 py-5
          "flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-6 inset-x-0 mx-auto sm:px-10 px-8 sm:py-5 py-4 rounded-lg border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center space-x-4",
          className
        )}
        style={{
          backdropFilter: "blur(25px)",
          backgroundColor: "rgba( 55, 54, 54, 0.15  )",
          boxShadow: " 0 8px 32px 0 rgba( 31, 38, 135, 0.20 )",
          borderRadius: "10px",
          WebkitBackdropFilter: "blur(15.5px)",
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
      >
        {itemsToDisplay.map((navItem: any, idx: number) => (
          <Link key={idx} to={navItem.link}>
            <span
              className={cn(
                "relative dark:text-gray-50 duration-300 items-center  flex space-x-1 text-gray-100 dark:hover:text-gray-300 hover:text-gray-300 font-Poppins"
              )}
            >
              {/* add !cursor-pointer */}
              {/* remove hidden sm:block for the mobile responsive */}
              <span className=" text-xs sm:text-sm cursor-pointer">
                {navItem.name}
              </span>
            </span>
          </Link>
        ))}
        {/* remove this login btn */}
        {/* <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
          <span>Login</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
        </button> */}
      </motion.div>
    </AnimatePresence>
  );
};
