import Image from "next/image";
import Link from "next/link";
import aboutImage from "../../../assests/About/about-image.png";
function Intro() {
  return (
    <section data-aos="fade-up" className="max-w-[1170px] mx-auto ">
      <div className="grid grid-cols-12 my-5 justify-center items-center md:mx-6 lg:mx-0">
        <div className="col-start-1 col-end-13 md:col-end-5 mx-auto">
          <Image
            height={400}
            width={400}
            className="rounded-2xl"
            src={aboutImage}
            alt="about-image"
          />
        </div>
        <div className="col-start-1 md:col-start-5 col-end-13 px-8 mt-12 lg:mt-0">
          <h3 className="text-3xl font-bold font-Kanit ">About Us</h3>
          <p className="text-base my-4 text-justify font-poppins">
            Welcome to Flat Hive! At Flat Hive, we connect you with like-minded
            flatmates for a harmonious living experience. Our platform offers
            personalized matching, verified listings, and seamless communication
            to help you find your perfect home and community.
          </p>
          <span className="font-medium  text-sm block font-poppins">
            Your comfort and satisfaction are our top priorities. Have questions
            or need assistance? Our friendly support team is here to help. Reach
            out to us anytime!
          </span>
          <Link
            className=" mt-6 active:scale-95 duration-200 border border-gray-600 py-1 px-1 inline-block justify-center items-center rounded-md mx-auto"
            href={"/contact"}
          >
            <button className=" px-4  py-1 bg-orange-600 font-Kanit text-white hover:bg-orange-700 rounded duration-300 shadow-md">
              Contact us
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Intro;
