import About from "@/components/About";
import Blog from "@/components/Blog";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import Services from "@/components/Services";
import Footer from "@/components/Shared/Footer";
import Skills from "@/components/Skills";
import Testimonial from "@/components/Testimonial";
import CustomCursor from "@/components/ui/Cursor/CustomCursor";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

export default function Home() {
  return (
    <main className=" bg-gradient-to-r from-[#000018] to-[#010524] relative  flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <FloatingNav />
      <CustomCursor />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Experience />
      <Project />
      <Testimonial />
      <Blog />
      <Footer />
    </main>
  );
}
