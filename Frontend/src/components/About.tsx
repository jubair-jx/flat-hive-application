"use client";
import { motion } from "framer-motion";
import { AboutBlock } from "./Home/About/AboutBlock";

import { ExperineceBlock } from "./Home/About/ExperienceBlock";
import { HeaderBlock } from "./Home/About/HeaderBlock";
import { LocationBlock } from "./Home/About/Location";
import { TechArsenal } from "./Home/About/TechArsenal";
import CommonTitile from "./Shared/CommonTitile/CommonTitile";

const About = () => {
  return (
    <section id="about" className=" sm:px-10 relative ">
      <CommonTitile title="Discover My" word={["Journey", "Behind", "Story"]} />
      <div className="sm:flex justify-center items-center animate-spotlight absolute bottom-[480px] sm:left-[580px] left-32 ">
        <div
          className="h-[140px] w-[140px] rounded-full"
          style={{
            background:
              "linear-gradient(180deg, rgb(247, 246, 246) 0%, rgb(248, 48, 224) 80%, rgb(168, 249, 237) 100%)",
            filter: "blur(110px)",
          }}
        ></div>
      </div>
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid max-w-7xl grid-flow-dense grid-cols-12 gap-3 mt-6 mb-6"
      >
        <HeaderBlock />
        <ExperineceBlock />
        <AboutBlock />
        <LocationBlock />
        <TechArsenal />
      </motion.div>
    </section>
  );
};

export default About;
