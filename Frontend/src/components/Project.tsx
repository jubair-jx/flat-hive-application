import { projectData } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { FaLocationArrow } from "react-icons/fa";
import CommonTitile from "./Shared/CommonTitile/CommonTitile";
import { PinContainer } from "./ui/Pin";

const Project = () => {
  return (
    <section id="projects" className=" mt-6 mb-8 ">
      <CommonTitile title="Showcase of" word={["Creations", "Endeavors"]} />

      <div className=" grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1 xl:grid-cols-3 gap-12 mx-auto">
        {projectData?.map((item) => (
          <div
            key={item.id}
            className="flex flex-wrap items-center justify-center p-4 gap-20 sm:mt-14 mt-12 "
          >
            {/* {projects.map((item) => ( */}
            <div
              className=" flex items-center justify-center sm:w-80 w-[265px] "
              // key={item.id}
            >
              <PinContainer title="Visit" href={item?.link}>
                <div className="relative flex items-center justify-center md:w-72 lg:w-80 w-[274px] overflow-hidden sm:h-60 h-60">
                  <div className="relative w-full sm:h-52 h-32 overflow-hidden lg:rounded-3xl"></div>
                  <Image
                    src={item.img}
                    alt="cover"
                    height={400}
                    width={400}
                    className="z-10 absolute bottom-0 h-64 w-[650px] sm:h-56 rounded-xl mb-4"
                  />
                </div>

                <h1 className="font-bold sm:text-2xl text-gray-200 text-lg line-clamp-1">
                  {item.title}
                </h1>

                <p
                  className="sm:text-sm lg:font-normal font-light text-sm line-clamp-2"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {item.des}
                </p>

                <div className="flex items-center justify-between mt-6 mb-2">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-8 lg:h-8 w-6 h-6 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <Image
                          className=" sm:h-6 sm:w-6 w-4 h-4 object-cover rounded-md"
                          src={icon}
                          height={200}
                          width={200}
                          alt="icon"
                        />
                      </div>
                    ))}
                  </div>

                  <Link
                    href={item?.link}
                    target="_blank"
                    className="flex justify-center items-center"
                  >
                    <p className="flex  text-xs text-purple-200">Live Site</p>
                    <FaLocationArrow
                      className="ms-2"
                      color="#CBACF9"
                      fontSize={15}
                    />
                  </Link>
                </div>
              </PinContainer>
            </div>
          </div>
        ))}
      </div>

      <div className=" mt-24 flex justify-center text-center">
        <Link
          href={"https://github.com/jubair-jx"}
          target="_blank"
          className="px-8 py-3 rounded-md relative bg-slate-900 text-white text-sm hover:shadow-2xl hover:shadow-white/[.3] transition duration-300 border border-slate-600"
        >
          <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-300 to-transparent" />
          <p className="justify-center gap-1 items-center flex font-medium text-xs sm:text-sm font-Poppins">
            <BsGithub className=" mr-2" fontSize={18} />
            <span className="sm:block hidden">View More</span>Projects
          </p>
        </Link>
      </div>
    </section>
  );
};

export default Project;
