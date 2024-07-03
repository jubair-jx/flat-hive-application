"use client";
import CommonDashboardHeaderTitle from "@/shared/CommonDashboardHeaderTitle/CommonDashboardHeaderTitle";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function AdminHomePage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  return (
    <section className=" mt-6">
      <CommonDashboardHeaderTitle mainTitle="Boss!!! Welcome to the Dashboard" />
    </section>
  );
}

export default AdminHomePage;
