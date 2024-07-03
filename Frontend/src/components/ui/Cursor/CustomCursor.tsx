"use client";
import { useEffect, useState } from "react";
import "./cursor.css"; // Import your custom cursor styles

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", updateMousePosition);

    return () => {
      document.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <div
      className="vip-amazing-custom-cursor" // Ensure this class matches your CSS
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    ></div>
  );
};

export default CustomCursor;
