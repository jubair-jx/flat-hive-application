import { downloadIcon } from "@/utils/svg";
import Image from "next/image";
import heroImage from "../assets/Home/hero-image.svg";
import ScrollFadeIn from "./Animation/FadeIn";
import SeeWorkButton from "./ui/Button/SeeWorkButton";
import { TextGenerateEffect } from "./ui/TextGenereateEffect";
import TypeWriter from "./ui/TypeWriter";

function Hero() {
  return (
    <section
      id="home"
      className="  md:h-[1000px] lg:h-[690px] xl:h-[620px] 2xl:h-[650px] h-[950px] bg-gradient-to-r from-[#000018] to-[#010524] "
    >
      <div
        className="relative bg-cover  h-[615px] bg-center container mx-auto"
        style={{ backgroundImage: "url('/assets/Home/hero-grid.svg')" }}
      >
        <div className="container mx-auto h-full flex justify-between items-center px-10">
          <div className="flex items-start animate-spotlight">
            <div
              className="h-[150px] w-[150px] rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, rgb(225, 176, 245) 40%, rgb(224, 24, 255) 80%, rgb(245, 252, 253) 100%)",
                filter: "blur(130px)",
              }}
            ></div>
          </div>
          <div className="flex items-end animate-spotlight mt-20">
            <div
              className="h-[160px] w-[160px] rounded-full"
              style={{
                background:
                  "linear-gradient(180deg, rgb(247, 246, 246) 0%, rgb(248, 48, 224) 80%, rgb(168, 249, 237) 100%)",
                filter: "blur(130px)",
              }}
            ></div>
          </div>
        </div>
        =
        <div
          className="h-[170px] w-[150px] rounded-full animate-spotlight relative md:bottom-[600px] md:left-[550px]"
          style={{
            background:
              "radial-gradient(circle, rgb(247, 246, 246) 0%, rgb(248, 48, 224) 60%, rgb(168, 249, 237) 100%)",
            filter: "blur(130px)",
          }}
        ></div>
        <div className=" relative 2xl:bottom-[680px] lg:bottom-[650px] xl:bottom-[680px]  sm:bottom-[700px] bottom-[680px]">
          <div className="grid lg:grid-cols-2 grid-cols-1 px-6 md:px-14 gap-2 md:gap-4 md:py-5">
            <ScrollFadeIn>
              <div className=" sm:text-center lg:text-left text-center">
                <h1 data-aos="fade-up" className=" font-Kanit">
                  <span className=" font-medium sm:text-xl text-white text-xs">
                    Meet with the Digital Dreamweaver...
                  </span>{" "}
                </h1>

                <h1 className=" text-[26px] mt-2 sm:mt-8 ">
                  <span className="animate-text bg-gradient-to-r from-red-100 font-extrabold via-purple-200 to-violet-200 bg-clip-text text-transparent text-[20px]  sm:text-[47px] font-Kanit">
                    {"I'm"}
                  </span>{" "}
                  <TextGenerateEffect words="Mohammad Jubair" />
                </h1>
                <h3 className="text-white mt-2">
                  <span className=" font-Kanit md:text-[14px] text-[11px] font-medium">
                    As a Passionate ,
                  </span>
                  <span className="font-extrabold md:ml-1 sm:text-3xl text-xl bg-gradient-to-r animate-text from-teal-100 via-gray-100 to-violet-400 font-Raleway bg-clip-text text-transparent">
                    {" "}
                    <TypeWriter />
                  </span>
                </h3>

                {/* <Image
              className=" relative bottom-4 z-20 sm:w-80 w-40 mx-auto sm:mx-0 h-6"
              alt="Hero Image line"
              src={heroLine}
            /> */}

                <p
                  data-aos="fade-up"
                  className=" font-Poppins text-[12px] text-gray-300 md:text-[15px] mt-3 mb-6"
                >
                  Driven by creativity and a deep love for coding. I breathe
                  life into code. With a deep-seated love for programming and a
                  relentless pursuit of creativity, I thrive on transforming
                  complex ideas into elegant solutions.{"Let's "}build something
                  amazing together...!
                </p>
                <div>
                  <a
                    href="/Mohammad Jubair-Resume.pdf"
                    download={"Mohammad Jubair-Resume.pdf"}
                    className=" duration-300 hover:translate-y-1 inline-block mr-1 sm:mr-2 justify-center items-center rounded-md mx-auto"
                  >
                    <button className="inline-flex gap-2 h-11 shadow-md animate-shimmer items-center justify-center rounded-md border border-gray-400 bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-[length:200%_100%] px-5 font-medium text-slate-100 font-Poppins  transition-colors focus:outline-none text-xs sm:text-sm ">
                      Resume <span>{downloadIcon}</span>
                    </button>
                  </a>
                  <SeeWorkButton />
                </div>
              </div>
            </ScrollFadeIn>
            {/* Banner Image Components */}
            <ScrollFadeIn>
              <div className=" md:mt-10 mt-2 mx-auto flex justify-end lg:mx-0">
                <Image
                  height={300}
                  width={300}
                  quality={100}
                  draggable={false}
                  className=" sm:h-[400px] hover:scale-95 cursor-pointer duration-300 sm:w-[400px] h-[370px] w-[370px] sm:mt-0 mt-12"
                  alt="Hero Image"
                  loading="lazy"
                  src={heroImage}
                />
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
