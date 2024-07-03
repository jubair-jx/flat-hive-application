import { Skills1, Skills2, Skills3, Skills4, Skills5 } from "@/data";
import Image from "next/image";
import ScrollFadeIn from "./Animation/FadeIn";
import CommonTitile from "./Shared/CommonTitile/CommonTitile";

function Skills() {
  return (
    <section id="skills" className="">
      <CommonTitile title="Unveiling My" word={["Skillset", "Expertise"]} />
      <ScrollFadeIn>
        <div className="h-full w-[30rem] z-50   bg-grid-white/[.1] relative flex flex-col gap-3 items-center justify-center">
          {" "}
          {/* Radial gradient for the container to give a faded look */}
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <div className="flex justify-center items-center animate-spotlight absolute bottom-[80px] sm:left-[20px]">
            <div
              className="h-[160px] w-[160px] rounded-full -z-20"
              style={{
                background:
                  "linear-gradient(180deg, rgb(247, 246, 246) 0%, rgb(248, 48, 224) 80%, rgb(168, 249, 237) 100%)",
                filter: "blur(110px)",
              }}
            ></div>
          </div>
          <div className="sm:flex justify-center items-center animate-spotlight absolute bottom-12 sm:left-[520px] hidden -z-20">
            <div
              className="h-[150px] w-[150px] rounded-full"
              style={{
                background:
                  "linear-gradient(180deg, rgb(247, 246, 246) 0%, rgb(248, 48, 224) 80%, rgb(168, 249, 237) 100%)",
                filter: "blur(120px)",
              }}
            ></div>
          </div>
          <div className=" grid grid-cols-3 gap-3">
            {Skills1?.map((item) => (
              <div
                key={item.id}
                className=" sm:h-16 h-14 w-14 flex justify-center sm:w-16 bg-gradient-to-b from-gray-700 to-gray-800 border-t border-gray-500 shadow-md rounded-lg mx-auto items-center cursor-pointer hover:scale-95 duration-300"
              >
                <Image
                  height={400}
                  width={400}
                  src={item?.icon}
                  alt={item?.alt}
                  className="rounded-full h-10 w-10 sm:h-14 sm:w-14 object-cover"
                />
              </div>
            ))}
          </div>
          <div className=" grid grid-cols-4 sm:gap-3 gap-2">
            {Skills2?.map((item) => (
              <div
                key={item.id}
                className=" sm:h-16 h-14 w-14 flex justify-center sm:w-16 bg-gradient-to-b from-gray-700 to-gray-800 border-t border-gray-500 shadow-md rounded-lg mx-auto items-center cursor-pointer hover:scale-95 duration-300"
              >
                <Image
                  height={400}
                  width={400}
                  src={item?.icon}
                  alt={item?.alt}
                  className="rounded-full h-10 w-10 sm:h-12 sm:w-12 object-cover"
                />
              </div>
            ))}
          </div>
          <div className=" grid grid-cols-5  sm:gap-3 gap-2">
            {Skills3?.map((item) => (
              <div
                key={item.id}
                className=" sm:h-16 h-14 w-14 flex justify-center sm:w-16 bg-gradient-to-b from-gray-700 to-gray-800 border-t border-gray-500 shadow-md rounded-lg mx-auto items-center cursor-pointer hover:scale-95 duration-300"
              >
                <Image
                  height={400}
                  width={400}
                  src={item?.icon}
                  alt={item?.alt}
                  className="rounded-full h-10 w-10 sm:h-12 sm:w-12 object-cover"
                />
              </div>
            ))}
          </div>
          <div className=" grid grid-cols-4 sm:gap-3 gap-2">
            {Skills4?.map((item) => (
              <div
                key={item.id}
                className=" sm:h-16 h-14 w-14 flex justify-center sm:w-16 bg-gradient-to-b from-gray-700 to-gray-800 border-t border-gray-500 shadow-md rounded-lg mx-auto items-center cursor-pointer hover:scale-95 duration-300"
              >
                <Image
                  height={400}
                  width={400}
                  src={item?.icon}
                  alt={item?.alt}
                  className=" sm:h-12 h-10 w-10 sm:w-12 object-cover"
                />
              </div>
            ))}
          </div>
          <div className=" grid grid-cols-3 sm:gap-3 gap-2">
            {Skills5?.map((item) => (
              <div
                key={item.id}
                className=" sm:h-16 h-14 w-14 flex justify-center sm:w-16 bg-gradient-to-b from-gray-700 to-gray-800 border-t border-gray-500 shadow-md rounded-lg mx-auto items-center cursor-pointer hover:scale-95 duration-300"
              >
                <Image
                  height={400}
                  width={400}
                  src={item?.icon}
                  alt={item?.alt}
                  className="rounded-full h-10 w-10 sm:h-12 sm:w-12 object-cover"
                />
              </div>
            ))}
          </div>{" "}
        </div>
      </ScrollFadeIn>
    </section>
  );
}

export default Skills;
