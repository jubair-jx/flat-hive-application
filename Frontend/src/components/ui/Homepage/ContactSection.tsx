import HomeSectionTitle from "@/components/shared/SectionTitle/HomeSectionTitle";
import Image from "next/image";
import contactImg from "../../../assests/info/contact.png";
function ContactSection() {
  return (
    <>
      <HomeSectionTitle
        mainTitle="Contact us"
        subTitle="you can contact us for any queries"
      />
      <section
        data-aos="fade-down"
        className="font-poppins mb-16 mt-16 max-w-6xl px-6 mx-auto relative bg-white rounded-md  overflow-hidden"
      >
        <div className="absolute -top-6 -left-6 w-20 h-20 rounded-full bg-orange-400"></div>
        <div className="absolute sm:block hidden -bottom-6 -left-0 w-24 h-20 rounded-tr-[40px] bg-violet-400"></div>
        <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-yellow-400"></div>
        <div className="absolute sm:block hidden -bottom-6 -right-0 w-24 h-20 rounded-tl-[40px] bg-indigo-300"></div>
        <div className="grid md:grid-cols-2">
          <div className="text-center p-6 xl:p-10 flex flex-col items-center justify-center">
            <h2 className="text-3xl text-gray-700 font-Kanit font-bold">
              Contact Us
            </h2>
            <Image
              draggable={false}
              src={contactImg}
              height={300}
              alt="contact"
              width={300}
              className="mt-4 shrink-0 w-3/4 w h-3/4"
            />
          </div>
          <form className="p-6 xl:p-10">
            <div className="max-w-sm mx-auto space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-gray-100 rounded-full py-3 px-6 text-sm outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-gray-100 rounded-full py-3 px-6 text-sm outline-none"
              />
              <input
                type="email"
                placeholder="Phone No."
                className="w-full bg-gray-100 rounded-full py-3 px-6 text-sm outline-none"
              />
              <textarea
                rows={4}
                placeholder="Message"
                className="w-full resize-none bg-gray-100 rounded-3xl px-6 text-sm pt-3 outline-none"
              ></textarea>
              <button
                type="button"
                className="text-white w-full sm:text-sm  relative bg-orange-600 duration-300 hover:bg-orange-500 font-semibold rounded-full text-xs sm:px-6 px-3 py-3 mb-6 sm:py-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  fill="#fff"
                  className="mr-2 inline"
                  viewBox="0 0 548.244 548.244"
                >
                  <path
                    fillRule="evenodd"
                    d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                    clipRule="evenodd"
                    data-original="#000000"
                  />
                </svg>
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default ContactSection;
