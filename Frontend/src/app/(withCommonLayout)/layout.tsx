import Footer from "@/components/shared/Footer/Footer";
import NavBar from "@/components/shared/Navbar/Navbar";
import React from "react";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavBar />
      <main className=" min-h-screen container mx-auto">{children}</main>
      <Footer />
    </>
  );
};

export default CommonLayout;
