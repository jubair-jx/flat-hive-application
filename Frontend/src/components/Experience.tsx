import { experienceData } from "@/data";
import ScrollFadeIn from "./Animation/FadeIn";
import CommonTitile from "./Shared/CommonTitile/CommonTitile";

function Experience() {
  return (
    <section id="experience">
      <CommonTitile
        title="Meet My"
        word={["Diaries", "Milestones", "Excellence"]}
      />
      <main className="relative flex flex-col justify-center  overflow-hidden mt-4 mb-2">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6">
          <div className="w-full max-w-3xl mx-auto">
            <div className="-my-4">
              <ScrollFadeIn>
                {experienceData?.map((item) => (
                  <div
                    key={item.id}
                    className="relative pl-8 sm:pl-32 py-6 group"
                  >
                    <div className="font-Kanit font-bold sm:text-2xl text-xl bg-gradient-to-r animate-text from-violet-400 via-purple-300 to-violet-300 bg-clip-text text-transparent mb-1 sm:mb-0">
                      {item.companyName}
                    </div>

                    <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-500 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-violet-400 after:border-4 after:box-content after:border-slate-700 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                      <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-medium uppercase w-[92px] h-7 mb-3 sm:mb-0 text-violet-200 font-Rubik bg-[#1d2a45df] shadow-md rounded-full">
                        {item.date}
                      </time>
                      <div className="sm:text-lg text-base font-semibold text-gray-300 font-Rubik">
                        {item.designation}
                      </div>
                    </div>

                    <div className="text-slate-400 mt-2 text-sm sm:text-base font-Rubik ">
                      {item.description}
                    </div>
                  </div>
                ))}{" "}
              </ScrollFadeIn>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}

export default Experience;
