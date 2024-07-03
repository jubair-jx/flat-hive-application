"use client";
import { Typewriter } from "react-simple-typewriter";

function TypeWriter() {
  return (
    <Typewriter
      words={[
        "Full Stack Developer",
        "App Developer",
        "Software Engineer",
        "Content Creator",
      ]}
      loop={true}
      typeSpeed={100}
      deleteSpeed={150}
      cursorColor="white"
      cursor={true}
      cursorStyle="."
    ></Typewriter>
  );
}

export default TypeWriter;
