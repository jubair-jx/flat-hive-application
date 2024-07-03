"use client";
import { Typewriter } from "react-simple-typewriter";

function TypeWriterTitle({ word }: { word: string[] }) {
  return (
    <Typewriter
      words={word}
      loop={true}
      typeSpeed={100}
      deleteSpeed={80}
      cursor={false}
    ></Typewriter>
  );
}

export default TypeWriterTitle;
