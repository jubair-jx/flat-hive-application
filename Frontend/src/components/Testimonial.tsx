import { testimonials } from "@/data";
import CommonTitile from "./Shared/CommonTitile/CommonTitile";
import { InfiniteMovingCards } from "./ui/InfinateCard";

function Testimonial() {
  return (
    <section id="testimonials" className=" mb-2 relative container">
      <CommonTitile
        title="What Clients"
        word={["Satisfaction", "Perspectives"]}
      />
      <div className="sm:flex justify-center items-center animate-spotlight absolute bottom-40 sm:left-[600px] left-32 ">
        <div
          className="h-[180px] w-[180px] rounded-full"
          style={{
            background:
              "linear-gradient(180deg, rgb(247, 246, 246) 0%, rgb(248, 48, 224) 80%, rgb(168, 249, 237) 100%)",
            filter: "blur(130px)",
          }}
        ></div>
      </div>
      <div className="flex flex-col items-center max-lg:mt-6 mt-0">
        <div
          // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
          className="h-[55vh] md:h-[24rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden cursor-pointer"
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
