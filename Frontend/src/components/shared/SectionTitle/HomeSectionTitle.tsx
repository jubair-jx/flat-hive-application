import Image from "next/image";
import sectionImg from "../../../assests/Home/section-header-line.svg";
function HomeSectionTitle({
  mainTitle,
  subTitle,
}: {
  mainTitle?: string;
  subTitle?: string;
}) {
  return (
    <div
      data-aos="fade-up"
      className=" mt-10 mb-10 text-center relative mx-auto flex justify-center flex-col items-center"
    >
      <h1 className=" font-Kanit font-semibold sm:text-3xl text-2xl px-4 text-gray-900 text-center">
        {mainTitle}
      </h1>
      <p className=" mt-1 font-poppins font-medium sm:text-sm text-xs px-4 w-5/6 mx-auto">
        {subTitle}
      </p>
      <Image
        src={sectionImg}
        height={300}
        width={300}
        alt="Section Img"
        className=" mx-auto absolute top-12"
      />
    </div>
  );
}

export default HomeSectionTitle;
