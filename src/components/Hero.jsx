import React, { useState, useEffect } from "react";
// import herobg from "../assets/herobg.png";
import Navbar from "./Navbar";
import { titles } from "../utils/common";
import { useLocation } from "react-router-dom";
import hero_bg1 from '../assets/hero_bg1.jpg'
function Hero({ setCurrentService }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Determine the height class based on the route
  const heightClass = location.pathname === "/" ? "h-[100vh]" : "h-[80vh]";
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000); // Change title every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div
    className={`relative w-full ${heightClass} bg-cover bg-center`}
    style={{
      backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('${hero_bg1}')`, // Combine gradient and background image
    }}
>
      <Navbar isScrolled={isScrolled} setCurrentService={setCurrentService} />
      <div
  className="h-[100%] w-[100%] absolute top-0 left-0"
  // style={{
  //   background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))",
  // }}
></div>

        {/* Left Column: Text */}
        <div className="flex flex-col justify-center items-center text-center  absolute w-[100%] h-[100%] top-0 text-white px-8">
          <span className=" text-lg sm:text-2xl md:text-3xl lg:text-4xl max-w-4xl leading-loose leading-normal italic font-bold">
            {titles[currentIndex].title}
          </span>
        </div>

       
      </div>
  );
}

export default Hero;
