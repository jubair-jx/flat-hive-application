// components/ScrollFadeIn.tsx
"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface ScrollFadeInProps {
  children: React.ReactNode;
}

const ScrollFadeIn: React.FC<ScrollFadeInProps> = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false, // Trigger animation once
    threshold: 0.1, // Adjust as needed
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollFadeIn;
