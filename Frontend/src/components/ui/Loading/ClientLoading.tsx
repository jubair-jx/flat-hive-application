"use client";
import { useEffect, useState } from "react";
import "./ClientLoading.css"; // Import the CSS file for transitions
import LoadingUi from "./LoadingUi";

const ClientLoader = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handlePageLoad = () => {
      setLoading(false);
      document.body.classList.remove("no-scroll");
    };

    if (document.readyState === "complete") {
      handlePageLoad();
    } else {
      window.addEventListener("load", handlePageLoad);
      document.body.classList.add("no-scroll");
      return () => {
        window.removeEventListener("load", handlePageLoad);
        document.body.classList.remove("no-scroll");
      };
    }
  }, []);

  return (
    <div className={`loader-wrapper ${loading ? "loading" : "loaded"}`}>
      {loading && <LoadingUi />}
      <main className={`content ${loading ? "hidden" : "block"}`}>
        {children}
      </main>
    </div>
  );
};

export default ClientLoader;
