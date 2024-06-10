import HomeSectionTitle from "@/components/shared/SectionTitle/HomeSectionTitle";
import Image from "next/image";
import { useState } from "react";
import faqImage from "../../../assests/Home/Faq.png";
function Faq() {
  const FaqData = [
    {
      id: "1",
      question: "How can I list my property for sale or rent on your platform?",
      answer:
        "Listing your property is easy! Simply sign up or log in to your account, navigate to the 'Add Listing' section, and fill out the required details about your property. You can upload photos, set your price, and add a detailed description. Once submitted, our team will review and publish your listing within 24 hours.",
    },
    {
      id: "2",
      question: "What types of properties are available on your platform?",
      answer:
        "We offer a wide range of properties to suit every need, including residential homes, apartments, commercial spaces, and vacation rentals. Whether you're looking to buy, sell, or rent, our platform connects you with the right opportunities in your preferred location.",
    },
    {
      id: "3",
      question: "How do I schedule a property viewing?",
      answer:
        "To schedule a property viewing, log in to your account and navigate to the listing you are interested in. Click on the 'Schedule Viewing' button and choose a convenient date and time. The property owner or agent will confirm the appointment and provide you with further details.",
    },
    {
      id: "4",
      question: "Are there any fees for using your platform?",
      answer:
        "Creating an account and browsing properties on our platform is completely free. We charge a small fee for premium listing options, which include additional visibility and promotional features. There are no hidden charges, and you can choose the services that best suit your needs.",
    },
    {
      id: "5",
      question: "How can I contact customer support?",
      answer:
        "Our customer support team is available 24/7 to assist you. You can reach us through the 'Contact Us' page on our website, where you can fill out a form with your query. Alternatively, you can call us at our helpline number or use the live chat feature for instant support.",
    },
    {
      id: "6",
      question: "What measures do you take to ensure propertys listing.?",
      answer:
        "We have a dedicated team that reviews and verifies each property listing to ensure accuracy and authenticity. Property owners are required to provide detailed information and regular updates. Additionally, users can report any discrepancies, which we promptly investigate to maintain the quality of our listings.",
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index: any) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <>
      <HomeSectionTitle
        mainTitle="Frequently Asked Questions"
        subTitle="Do you have any question or queries about our services and flat.?"
      />
      <section
        data-aos="fade-down"
        className="grid xl:grid-cols-2 container my-10 sm:my-16"
      >
        <div className="space-y-4">
          {FaqData.map((item, index) => (
            <div
              key={item.id}
              className="border border-gray-300 rounded-md border-dashed  mx-4 sm:mx-0"
            >
              <button
                className="w-full flex justify-between items-center p-4 text-left"
                onClick={() => handleToggle(index)}
              >
                <span className="font-normal text-sm sm:text-lg font-Kanit">
                  {item.question}
                </span>
                <span
                  className={`transform transition-transform duration-300 ${
                    expandedIndex === index ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  expandedIndex === index ? "max-h-screen" : "max-h-0"
                }`}
              >
                <div className="p-2 font-poppins text-xs sm:text-sm">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* main frequently div image section area */}
        <div>
          <Image
            draggable={false}
            height={400}
            width={400}
            className="mx-auto xl:w-full xl:h-full w-full sm:w-[60%] md:w-[65%] md:h-[90%] lg:w-[70%]  "
            src={faqImage}
            alt="FAQ Img"
          />
        </div>
        {/* main frequently div image section area */}
      </section>
    </>
  );
}

export default Faq;
