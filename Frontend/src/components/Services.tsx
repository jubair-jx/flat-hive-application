import { myServices } from "@/data";
import ScrollFadeIn from "./Animation/FadeIn";
import CommonTitile from "./Shared/CommonTitile/CommonTitile";
import { Meteors } from "./ui/MetorsCard";

function Services() {
  return (
    <section id="services" className=" container mx-auto">
      <CommonTitile title="Expert" word={["Services", "Solutions"]} />
      <ScrollFadeIn>
        <div className=" grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 mx-auto py-4 gap-4 container">
          {myServices?.map((item: any) => (
            <div
              key={item.id}
              className=" w-full relative  mx-auto cursor-pointer hover:scale-95 duration-300"
            >
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-violet-950 to-red-200 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
              <div className="relative shadow-xl bg-gray-900 border border-gray-700 px-4 py-4 h-full overflow-hidden rounded-lg flex flex-col sm:justify-end sm:items-start justify-center items-center">
                <div className=" rounded-full flex items-center justify-center mb-2 text-white">
                  <span>{<item.image fontSize={30} />}</span>
                </div>

                <h1 className="font-medium text-xl font-Kanit text-gray-100 mb-2 relative z-50">
                  {item.title}
                </h1>

                <p className="font-normal sm:text-start text-center text-xs sm:text-sm font-Poppins text-slate-400 mb-2 relative z-50">
                  {item.des}
                </p>
                <button className="relative inline-flex h-8 mt-2 overflow-hidden rounded-md p-[1.5px] focus:outline-none gap-2">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex font-Raleway h-full w-full cursor-pointer items-center justify-center rounded-md bg-slate-900 px-3 py-1 text-xs font-medium text-white backdrop-blur-2xl">
                    Explore More
                  </span>
                </button>

                {/* Meaty part - Meteor effect */}
                <Meteors number={25} />
              </div>
            </div>
          ))}
        </div>
      </ScrollFadeIn>
    </section>
  );
}

export default Services;
