"use client";
import { getUserInfo } from "@/services/auth-services";
import Image from "next/image";
import Link from "next/link";
import heroImage from "../../../assests/Home/Banner Image.svg";
import circle from "../../../assests/Home/Circle.svg";
import triangle from "../../../assests/Home/Triangle.svg";
import heroLine from "../../../assests/Home/big-line.svg";
import sqrbox from "../../../assests/Home/box.svg";
function HeroSection() {
  // TODO : Components should be responsive
  const userInfo = getUserInfo();
  return (
    <section
      className="bg-gradient-to-tr mt-2 container mx-auto rounded-xl shadow-sm from-yellow-100 via-orange-50 to-purple-50
     sm:h-[1050px] h-[980px] md:h-[1050px] lg:h-[920px] xl:h-[600px] w-full"
    >
      <div className="container mx-auto pt-6">
        <div className="grid lg:grid-cols-2 grid-cols-1 px-10 md:px-16 gap-2 md:gap-16 md:py-5">
          <div className=" sm:text-center lg:text-left text-center">
            <h1 data-aos="fade-up" className=" font-Kanit">
              <span className=" font-medium sm:text-base text-xs">
                Live Better Together...
              </span>{" "}
            </h1>

            <h1 data-aos="fade-down" className=" mt-2 z-0 font-poppins">
              <span className="tracking-wider  font-extrabold sm:text-[50px] text-[32px] leading-[1.4] bg-gradient-to-r from-slate-800 via-gray-800 to-black bg-clip-text text-transparent">
                Discover Your Dream and{" "}
                <span className=" font-Freeman animate-text bg-gradient-to-r from-orange-500 via-orange-700 to-orange-500 bg-clip-text text-transparent">
                  Enhance Your{" "}
                </span>{" "}
                Living Experience.!
              </span>
            </h1>

            <Image
              className=" relative bottom-4 z-20 sm:w-80 w-40 mx-auto sm:mx-0 h-6"
              alt="Hero Image line"
              src={heroLine}
            />

            <p
              data-aos="fade-up"
              className=" font-poppins text-[12px] md:text-[14px] mt-2 mb-6"
            >
              Join our community to find the perfect flatmate who matches your
              lifestyle and preferences. Enjoy a harmonious living experience
              with someone who complements your way of life. Start your journey
              to a better shared living today...!
            </p>
            <Link
              data-aos="fade-up"
              className=" border border-gray-600 py-1 px-1 inline-block justify-center items-center rounded-md mx-auto"
              href={`/dashboard/${userInfo?.role}/post-flat`}
            >
              <button className="active:scale-95 px-4 py-2 bg-gray-900 font-Kanit text-white hover:bg-orange-600 rounded duration-300 shadow-md">
                Share Your Flat
              </button>
            </Link>
            <Link
              data-aos="fade-down"
              className="sm:ml-2 ml-1 mt-2 active:scale-95 duration-200 border border-gray-600 py-1 px-1 inline-block justify-center items-center rounded-md mx-auto"
              href={"/all-flats"}
            >
              <button className=" px-4  py-2 bg-orange-600 font-Kanit text-white hover:bg-orange-700 rounded duration-300 shadow-md">
                Explore More
              </button>
            </Link>
          </div>
          {/* Banner Image Components */}
          <div
            data-aos="fade-down"
            className=" md:mt-10 mt-2 mx-auto flex justify-end lg:mx-0"
          >
            <Image
              className=" sm:h-[430px] sm:w-[430px] h-[400px] w-[400px]"
              alt="Hero Image"
              src={heroImage}
            />
          </div>

          <div>
            <Image
              className=" lg:h-1/3 lg:w-1/3 h-1/4 w-1/4  relative lg:bottom-96 md:bottom-[540px] xl:left-[640px] bottom-96 md:block hidden 2xl:left-[860px] lg:left-[400px] md:left-[120px] animate-spin"
              alt="Hero Image"
              src={triangle}
            />
            <Image
              className=" h-1/3 w-1/3 lg:block md:left-[200px] hidden xl:left-[840px] 2xl:left-[1060px] relative lg:bottom-[580px] xl:bottom-[450px] lg:left-[580px] left-[100px] animate-spin"
              alt="Hero Image"
              src={circle}
            />
            <Image
              className=" h-[50px] xl:block hidden w-[50px] xl:left-[840px] 2xl:left-[860px] lg:left-[240px] relative bottom-[660px] lg:bottom-[845px] animate-bounce left-[350px]"
              alt="Hero Image"
              src={sqrbox}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
