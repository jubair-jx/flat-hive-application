"use client";
import Testimonial from "@/components/Pages/Testimonial/Testimonial";
import ContactSection from "@/components/ui/Homepage/ContactSection";
import ExploreAllFlat from "@/components/ui/Homepage/ExploreAllFlat";
import HeroSection from "@/components/ui/Homepage/HeroSection";
import OneStopSolution from "@/components/ui/Homepage/OneStopSolution";
import SearchShowCardSection from "@/components/ui/Homepage/SearchShowCardSection";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function HomePage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  return (
    <main className=" mx-auto container">
      <HeroSection />
      <SearchShowCardSection />
      <ExploreAllFlat />
      <OneStopSolution />
      <Testimonial />
      <ContactSection />
    </main>
  );
}
