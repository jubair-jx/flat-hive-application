"use client";
import { Block } from "./Block";

export const AboutBlock = () => (
  <Block className="col-span-12 text-3xl leading-snug">
    <p className=" text-gray-300 text-center text-xs sm:text-sm font-Poppins">
      I’m Mohammad Jubair, a passionate Full Stack Developer from Chattogram,
      Bangladesh, with 2 years+ of professional experience. I specialize in
      creating dynamic, responsive web applications using MongoDB, Express.js,
      React.js, and Node.js. My expertise also includes occasional app
      development and content creation. I’m excited to bring my skills and
      creativity to your organization.{" "}
      <span className="font-semibold bg-gradient-to-r animate-text from-violet-500 via-purple-300 to-violet-400 bg-clip-text text-transparent">
        Let’s build something amazing together!
      </span>
    </p>
  </Block>
);
