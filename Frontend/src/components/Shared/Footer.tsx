import { socialMedia } from "@/data";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="w-full relative pt-20 pb-10 container mx-auto"
      id="contact"
    >
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <Image
          src="/footer-grid.svg"
          height={400}
          width={400}
          alt="grid"
          className="w-full sm:h-full h-[900px] opacity-60"
        />
      </div>
      <div className="sm:flex justify-center items-center animate-spotlight absolute bottom-32 sm:left-[620px] left-32 ">
        <div
          className="h-[170px] w-[170px] rounded-full"
          style={{
            background:
              "linear-gradient(180deg, rgb(247, 246, 246) 0%, rgb(248, 48, 224) 80%, rgb(168, 249, 237) 100%)",
            filter: "blur(130px)",
          }}
        ></div>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw] text-2xl sm:text-4xl font-Rubik font-medium text-white text-center">
          Elevate Your Digital{" "}
          <span className=" text-purple-400">Presence</span> with Me
        </h1>
        <p className="text-gray-300 font-Raleway text-sm  my-5 text-center">
          Connect with me today, and {"Let's"} transform your vision into
          reality.
        </p>
        {/* <a href="https://mohammad-jubair.netlify.app/">
          <MagicButton
            title="Let's get together"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                />
              </svg>
            }
            position="right"
          />
        </a> */}
        <Link
          href={"https://www.linkedin.com/in/mohammad-jubair/"}
          target="_blank"
          className="inline-flex gap-2 h-11 shadow-md animate-shimmer items-center justify-center rounded-md border border-gray-400 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-[length:200%_100%] px-5 font-medium text-slate-100 text-sm font-Poppins  transition-colors focus:outline-none "
        >
          {"Let's"} get together{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
            />
          </svg>
        </Link>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base font-Rubik text-white mb-3 text-sm md:font-normal font-light">
          Copyright 2022-2025 © Mohammad Jubair
        </p>

        <div className="flex items-center md:gap-3 gap-6 text-white">
          {socialMedia.map((info) => (
            <Link target="_blank" href={info.link} key={info.id}>
              <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 text-white">
                <Image
                  src={info.img}
                  alt="icons"
                  className=" text-white"
                  width={20}
                  height={20}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
