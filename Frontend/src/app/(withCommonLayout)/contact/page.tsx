import PageSectionTitle from "@/components/shared/PageSectionTitle/PageSectionTitle";
import ContactSection from "@/components/ui/Homepage/ContactSection";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact Us",
  description: "If needed any thing, please contact us",
};
function ContactPage() {
  return (
    <section>
      <PageSectionTitle heading="Contact Us" />

      <div className="container flex flex-col items-center gap-6 mx-auto my-14">
        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 px-4">
          <div className="flex flex-col items-center gap-2 h-44 w-full px-8 py-4 border-2 border-dashed bg-gray-50 rounded-lg shadow-sm hover:translate-y-1 duration-300 cursor-pointer">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 text-orange-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z"
                />
              </svg>
            </span>
            <p className="sm:text-3xl text-xl font-extrabold text-dark-grey-900 font-Kanit">
              Email
            </p>
            <p className="text-sm leading-7 font-poppins text-dark-grey-600">
              Contact us at
            </p>
            <a className="sm:text-base text-xs font-poppins font-medium text-purple-blue-500">
              jubair.official97@gmail.com
            </a>
          </div>
          <div className="flex flex-col items-center gap-2 h-44 w-full px-8 py-4 border-2 border-dashed bg-gray-50 rounded-lg shadow-sm hover:translate-y-1 duration-300 cursor-pointer">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 text-orange-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0 6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"
                />
              </svg>
            </span>
            <p className="sm:text-3xl text-xl font-extrabold text-dark-grey-900 font-Kanit">
              Phone
            </p>
            <p className="text-sm leading-7 font-poppins text-dark-grey-600">
              Contact with me
            </p>
            <a className="sm:text-base text-xs font-poppins font-medium text-purple-blue-500">
              +880 1825182097
            </a>
          </div>
          <div className="flex flex-col items-center gap-2 h-44 w-full px-8 py-4 border-2 border-dashed bg-gray-50 rounded-lg shadow-sm hover:translate-y-1 duration-300 cursor-pointer">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 text-orange-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
            </span>
            <p className="sm:text-3xl text-xl font-extrabold text-dark-grey-900 font-Kanit">
              Location
            </p>
            <p className="text-sm leading-7 font-poppins text-dark-grey-600">
              Find my location
            </p>
            <a className="sm:text-base text-xs font-poppins font-medium text-purple-blue-500">
              Padua, Lohagara, Chattogram{" "}
            </a>
          </div>
        </div>
      </div>
      <ContactSection />
    </section>
  );
}

export default ContactPage;
