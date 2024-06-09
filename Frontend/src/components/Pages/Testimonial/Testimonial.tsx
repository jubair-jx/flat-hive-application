import HomeSectionTitle from "@/components/shared/SectionTitle/HomeSectionTitle";
import Image from "next/image";
import test1 from "../../../assests/Testimonial/test1.jpg";
import test2 from "../../../assests/Testimonial/test2.jpg";
import test3 from "../../../assests/Testimonial/test3.jpg";
import test4 from "../../../assests/Testimonial/test4.jpg";
import test5 from "../../../assests/Testimonial/test5.jpg";
import test6 from "../../../assests/Testimonial/test6.jpg";
import test8 from "../../../assests/Testimonial/test8.jpg";
function Testimonial() {
  const testimonials = [
    {
      imgSrc: test1,
      name: "Kanye West",
      role: "Rapper & Entrepreneur",
      description: "Find God.",
      feedback:
        "Kanye's spiritual journey is a source of inspiration. His music and entrepreneurial spirit continue to resonate with millions.",
      href: "https://twitter.com/kanyewest",
    },
    {
      imgSrc: test2,
      name: "Tim Cook",
      role: "CEO of Apple",
      description: "Innovation is key.",
      feedback:
        "Tim's leadership at Apple is unparalleled. His vision for innovation has transformed the tech industry.",
      href: "https://twitter.com/tim_cook",
    },
    {
      imgSrc: test3,
      name: "Parag Agrawal",
      role: "CEO of Twitter",
      description: "Empowerment through communication.",
      feedback:
        "Parag's dedication to open communication has strengthened community ties worldwide.",
      href: "https://twitter.com/paraga",
    },
    {
      imgSrc: test4,
      name: "Satya Nadella",
      role: "CEO of Microsoft",
      description: "Empowering every person.",
      feedback: "Satya's commitment to inclusivity and empowerment",
      href: "https://twitter.com/satyanadella",
    },
    {
      imgSrc: test5,
      name: "Dan Schulman",
      role: "CEO of PayPal",
      description: "Advancing digital payments.",
      feedback:
        "Dan's forward-thinking approach to digital payments has revolutionized the financial industry,",
      href: "https://twitter.com/dan_schulman",
    },
    {
      imgSrc: test6,
      name: "Elon Musk",
      role: "CEO of SpaceX and Tesla",
      description: "Pushing boundaries.",
      feedback:
        "Elon's relentless pursuit of innovation in space travel and electric vehicles continues to push the boundaries of what's possible.",
      href: "https://twitter.com/elonmusk",
    },
    {
      imgSrc: test1,
      name: "Sundar Pichai",
      role: "CEO of Alphabet",
      description: "Leading through technology.",
      feedback:
        "Sundar's strategic vision and leadership at Alphabet have driven remarkable advancements in technology and AI.",
      href: "https://twitter.com/sundarpichai",
    },
    {
      imgSrc: test8,
      name: "Mark Zuckerberg",
      role: "CEO of Meta",
      description: "Connecting the world.",
      feedback:
        "Mark's efforts to connect people through social media have profoundly impacted.",
      href: "https://twitter.com/finkd",
    },
    {
      imgSrc: test3,
      name: "Sheryl Sandberg",
      role: "COO of Meta",
      description: "Leadership and empathy.",
      feedback:
        "Sheryl's approach to leadership and her commitment to gender equality",
      href: "https://twitter.com/sherylsandberg",
    },
  ];

  return (
    <section className=" mt-4 mb-8">
      <HomeSectionTitle
        mainTitle="Our Client Says"
        subTitle="Our amazing client says something to about us"
      />
      {/* <div className="grid grid-cols-1 mt-12 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        <ul className="space-y-8">
          <li className="text-sm leading-6">
            <div className="relative group">
              <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-orange-300 to-pink-200 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
              <a
                href="https://twitter.com/kanyewest"
                className="cursor-pointer"
              >
                <div className="relative p-6 space-y-6 leading-none rounded-lg border border-dashed bg-white ring-1 ring-gray-900/5 ">
                  <div className="flex items-center space-x-4">
                    <img
                      src="https://pbs.twimg.com/profile_images/1276461929934942210/cqNhNk6v_400x400.jpg"
                      className="w-12 h-12 bg-center bg-cover border rounded-full"
                      alt="Kanye West"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-black font-Freeman">
                        David Marsh
                      </h3>
                      <p className="text-gray-600 font-poppins text-md">
                        Rapper &amp; Entrepreneur
                      </p>
                    </div>
                  </div>
                  <p className="leading-normal text-gray-800 font-poppins text-md">
                    Find God.
                  </p>
                </div>
              </a>
            </div>
          </li>
          <li className="text-sm leading-6">
            <div className="relative group">
              <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
              <a href="https://twitter.com/tim_cook" className="cursor-pointer">
                <div className="relative p-6 space-y-6 leading-none rounded-lg bg-gray-50 ring-1 ring-gray-900/5">
                  <div className="flex items-center space-x-4">
                    <img
                      src="https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"
                      className="w-12 h-12 bg-center bg-cover border rounded-full"
                      alt="Tim Cook"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-black font-Freeman">
                        David Marsh
                      </h3>
                      <p className="text-gray-600 font-poppins text-md">
                        Rapper &amp; Entrepreneur
                      </p>
                    </div>
                  </div>
                  <p className="leading-normal text-gray-800 font-poppins text-md">
                    Find God.
                  </p>
                </div>
              </a>
            </div>
          </li>
          <li className="text-sm leading-6">
            <div className="relative group">
              <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
              <a
                href="https://twitter.com/kanyewest"
                className="cursor-pointer"
              >
                <div className="relative p-6 space-y-6 leading-none rounded-lg bg-gray-50 ring-1 ring-gray-900/5">
                  <div className="flex items-center space-x-4">
                    <img
                      src="https://pbs.twimg.com/profile_images/1276461929934942210/cqNhNk6v_400x400.jpg"
                      className="w-12 h-12 bg-center bg-cover border rounded-full"
                      alt="Kanye West"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-black font-Freeman">
                        David Marsh
                      </h3>
                      <p className="text-gray-600 font-poppins text-md">
                        Rapper &amp; Entrepreneur
                      </p>
                    </div>
                  </div>
                  <p className="leading-normal text-gray-800 font-poppins text-md">
                    Find God.
                  </p>
                </div>
              </a>
            </div>
          </li>
        </ul>

        <ul className="hidden space-y-8 sm:block">
          <li className="text-sm leading-6">
            <div className="relative group">
              <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
              <a href="https://twitter.com/paraga" className="cursor-pointer">
                <div className="relative p-6 space-y-6 leading-none rounded-lg bg-gray-50 ring-1 ring-gray-900/5">
                  <div className="flex items-center space-x-4">
                    <img
                      src="https://pbs.twimg.com/profile_images/1375285353146327052/y6jeByyD_400x400.jpg"
                      className="w-12 h-12 bg-center bg-cover border rounded-full"
                      alt="Parag Agrawal"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-black font-Freeman">
                        David Marsh
                      </h3>
                      <p className="text-gray-600 font-poppins text-md">
                        Rapper &amp; Entrepreneur
                      </p>
                    </div>
                  </div>
                  <p className="leading-normal text-gray-800 font-poppins text-md">
                    Find God.
                  </p>
                </div>
              </a>
            </div>
          </li>
          <li className="text-sm leading-6">
            <div className="relative group">
              <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
              <a href="https://twitter.com/tim_cook" className="cursor-pointer">
                <div className="relative p-6 space-y-6 leading-none rounded-lg bg-gray-50 ring-1 ring-gray-900/5">
                  <div className="flex items-center space-x-4">
                    <img
                      src="https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"
                      className="w-12 h-12 bg-center bg-cover border rounded-full"
                      alt="Tim Cook"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-black font-Freeman">
                        David Marsh
                      </h3>
                      <p className="text-gray-600 font-poppins text-md">
                        Rapper &amp; Entrepreneur
                      </p>
                    </div>
                  </div>
                  <p className="leading-normal text-gray-800 font-poppins text-md">
                    Find God.
                  </p>
                </div>
              </a>
            </div>
          </li>
          <li className="text-sm leading-6">
            <div className="relative group">
              <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
              <a href="https://twitter.com/paraga" className="cursor-pointer">
                <div className="relative p-6 space-y-6 leading-none rounded-lg bg-gray-50 ring-1 ring-gray-900/5">
                  <div className="flex items-center space-x-4">
                    <img
                      src="https://pbs.twimg.com/profile_images/1375285353146327052/y6jeByyD_400x400.jpg"
                      className="w-12 h-12 bg-center bg-cover border rounded-full"
                      alt="Parag Agrawal"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-black font-Freeman">
                        David Marsh
                      </h3>
                      <p className="text-gray-600 font-poppins text-md">
                        Rapper &amp; Entrepreneur
                      </p>
                    </div>
                  </div>
                  <p className="leading-normal text-gray-800 font-poppins text-md">
                    Find God.
                  </p>
                </div>
              </a>
            </div>
          </li>
        </ul>

        <ul className="hidden space-y-8 lg:block">
          <li className="text-sm leading-6">
            <div className="relative group">
              <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
              <a
                href="https://twitter.com/satyanadella"
                className="cursor-pointer"
              >
                <div className="relative p-6 space-y-6 leading-none rounded-lg bg-gray-50 ring-1 ring-gray-900/5">
                  <div className="flex items-center space-x-4">
                    <img
                      src="https://pbs.twimg.com/profile_images/1221837516816306177/_Ld4un5A_400x400.jpg"
                      className="w-12 h-12 bg-center bg-cover border rounded-full"
                      alt="Satya Nadella"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-black font-Freeman">
                        David Marsh
                      </h3>
                      <p className="text-gray-600 font-poppins text-md">
                        Rapper &amp; Entrepreneur
                      </p>
                    </div>
                  </div>
                  <p className="leading-normal text-gray-800 font-poppins text-md">
                    Find God.
                  </p>
                </div>
              </a>
            </div>
          </li>
          <li className="text-sm leading-6">
            <div className="relative group">
              <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
              <a
                href="https://twitter.com/dan_schulman"
                className="cursor-pointer"
              >
                <div className="relative p-6 space-y-6 leading-none rounded-lg bg-gray-50 ring-1 ring-gray-900/5">
                  <div className="flex items-center space-x-4">
                    <img
                      src="https://pbs.twimg.com/profile_images/516916920482672641/3jCeLgFb_400x400.jpeg"
                      className="w-12 h-12 bg-center bg-cover border rounded-full"
                      alt="Dan Schulman"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-black font-Freeman">
                        David Marsh
                      </h3>
                      <p className="text-gray-600 font-poppins text-md">
                        Rapper &amp; Entrepreneur
                      </p>
                    </div>
                  </div>
                  <p className="leading-normal text-gray-800 font-poppins text-md">
                    Find God.
                  </p>
                </div>
              </a>
            </div>
          </li>
          <li className="text-sm leading-6">
            <div className="relative group">
              <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
              <a
                href="https://twitter.com/satyanadella"
                className="cursor-pointer"
              >
                <div className="relative p-6 space-y-6 leading-none rounded-lg bg-gray-50 ring-1 ring-gray-900/5">
                  <div className="flex items-center space-x-4">
                    <img
                      src="https://pbs.twimg.com/profile_images/1221837516816306177/_Ld4un5A_400x400.jpg"
                      className="w-12 h-12 bg-center bg-cover border rounded-full"
                      alt="Satya Nadella"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-black font-Freeman">
                        David Marsh
                      </h3>
                      <p className="text-gray-600 font-poppins text-md">
                        Rapper &amp; Entrepreneur
                      </p>
                    </div>
                  </div>
                  <p className="leading-normal text-gray-800 font-poppins text-md">
                    Find God.
                  </p>
                </div>
              </a>
            </div>
          </li>
        </ul>
      </div> */}
      <div className="grid grid-cols-1 mt-12 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4 px-4">
        {testimonials.map((testimonial, index) => (
          <ul key={index} className="">
            <li className="text-sm leading-6">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-orange-300 to-pink-200 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                <a href={testimonial.href} className="cursor-pointer">
                  <div className="relative p-6 space-y-2 leading-none rounded-lg border border-dashed bg-white ring-1 ring-gray-900/5 ">
                    <div className="flex items-center space-x-4">
                      <Image
                        height={400}
                        width={400}
                        src={testimonial.imgSrc}
                        className="w-12 h-12 bg-center bg-cover border rounded-full"
                        alt={testimonial.name}
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-black font-Kanit">
                          {testimonial.name}
                        </h3>
                        <p className="text-gray-600 font-poppins text-md">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <p className="leading-normal text-gray-800 font-poppins text-md">
                      {testimonial.description}
                    </p>
                    <p className="leading-normal text-gray-600 font-poppins text-md">
                      {testimonial.feedback}
                    </p>
                  </div>
                </a>
              </div>
            </li>
          </ul>
        ))}
      </div>
    </section>
  );
}

export default Testimonial;
