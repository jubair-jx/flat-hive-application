import jubairImg from "@/assets/Home/jubair.jpg";
import { blogPosts } from "@/data";
import Image from "next/image";
import ScrollFadeIn from "./Animation/FadeIn";
import CommonTitile from "./Shared/CommonTitile/CommonTitile";
const Blog = () => {
  return (
    <section id="blog" className="mb-10 relative">
      <CommonTitile
        title="Written"
        word={["Treasures", "Insights", "Narratives"]}
      />
      <div className="sm:flex justify-center items-center animate-spotlight absolute bottom-96 sm:left-[600px] left-32 ">
        <div
          className="h-[180px] w-[180px] rounded-full"
          style={{
            background:
              "linear-gradient(180deg, rgb(247, 246, 246) 0%, rgb(248, 48, 224) 80%, rgb(168, 249, 237) 100%)",
            filter: "blur(120px)",
          }}
        ></div>
      </div>
      <ScrollFadeIn>
        <div className="container sm:px-10 px-2 py-4 mx-auto font-Rubik mt-6">
          <div className="-my-8 divide-y-2 divide-gray-600 rounded-xl">
            {blogPosts?.map((item, i) => (
              <div key={i} className="py-8 flex flex-wrap md:flex-nowrap">
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span className="font-semibold font-Raleway bg-[#162036] w-32 text-center rounded-md px-2 shadow-md text-sm py-2 title-font text-gray-200">
                    {item.category}
                  </span>

                  <span className="mt-3 text-gray-300 text-sm">
                    {item.date}
                  </span>
                </div>
                <div className="md:flex-grow gap-4 items-center justify-center">
                  <div className=" flex gap-2  items-center">
                    <span className=" mb-4">
                      <Image
                        height={100}
                        width={100}
                        src={jubairImg}
                        alt="Jubair"
                        className=" rounded-full border-2 mt-2 border-purple-400 h-10 w-10"
                      />
                    </span>
                    <h2 className=" font-Kanit text-sm  text-gray-100">
                      Mohammad Jubair
                      <p className=" font-Poppins text-xs  text-gray-300">
                        Software Engineer
                      </p>
                    </h2>
                  </div>
                  <h2 className="sm:text-2xl text-xl font-semibold bg-gradient-to-r animate-text from-violet-300 via-purple-300 to-violet-200 bg-clip-text text-transparent title-font mb-2 mt-2">
                    {item.eyeCatchyTitle}
                  </h2>
                  <p className="leading-relaxed text-gray-300 font-normal text-sm sm:text-base">
                    {item.description}
                  </p>
                  <div className=" mt-3 flex flex-wrap flex-row gap-1">
                    {item.tags.map((item, i) => (
                      <span
                        key={i}
                        className="font-medium font-Raleway bg-[#162036] text-center rounded-full px-3 shadow-md text-xs py-2  text-gray-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollFadeIn>
    </section>
  );
};

export default Blog;
