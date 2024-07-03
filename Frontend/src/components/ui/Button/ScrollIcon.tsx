"use client";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-24 right-7 z-50">
      {isVisible && (
        <div
          onClick={scrollToTop}
          className="flex items-center justify-center w-10 h-10 bg-[#222630] text-white rounded-full mx-auto cursor-pointer transition-opacity duration-500 animate-bounce shadow-md "
        >
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
              d="m4.5 18.75 7.5-7.5 7.5 7.5"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 12.75 7.5-7.5 7.5 7.5"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default ScrollToTop;
