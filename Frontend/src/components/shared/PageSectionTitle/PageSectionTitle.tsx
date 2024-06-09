import Image from "next/image";
import React from "react";
import commonBanner from "../../../assests/Common/common-home-img.jpg";
interface PageSectionTitleProps {
  heading: string;
}

const PageSectionTitle: React.FC<PageSectionTitleProps> = ({ heading }) => {
  return (
    <section className="relative px-4 -z-50">
      {/* Responsive Background Image with Overlay */}
      <div className="bg-cover bg-no-repeat h-36 bg-center aspect-ratio-16/9 overflow-hidden rounded-md ">
        <Image
          src={commonBanner}
          height={400}
          width={400}
          alt="Banner Image"
          className="object-cover w-full h-full absolute top-0 left-0"
        />
        <div className="absolute inset-0 bg-black opacity-70 z-10 rounded-md"></div>
      </div>

      {/* Text with Gradient */}
      <h2 className="text-center text-3xl sm:text-5xl font-Kanit font-bold bg-gradient-to-l from-orange-600 via-violet-300 to-fuchsia-300 bg-clip-text text-transparent animate-text z-20 relative bottom-20">
        {heading}
      </h2>
    </section>
  );
};

export default PageSectionTitle;
