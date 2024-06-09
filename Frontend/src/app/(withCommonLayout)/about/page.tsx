import Intro from "@/components/Pages/About/Intro";
import OurTeam from "@/components/Pages/About/OurTeam";
import WhyChoose from "@/components/Pages/About/WhyChoose";
import Testimonial from "@/components/Pages/Testimonial/Testimonial";
import PageSectionTitle from "@/components/shared/PageSectionTitle/PageSectionTitle";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "About Us",
  description: "Know more info about us",
};
function AboutPage() {
  return (
    <section>
      <PageSectionTitle heading="About Us" />
      <Intro />
      <WhyChoose />
      <OurTeam />
      <Testimonial />
    </section>
  );
}

export default AboutPage;
