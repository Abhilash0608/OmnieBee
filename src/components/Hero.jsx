import React, { useState, useEffect } from "react";
import heroOmni from "../assets/heroOmni.jpg";
import Navbar from "./Navbar";
import { titles } from "../utils/common";



function Hero({setCurrentService}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

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
      className="relative w-full h-96 bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7)), url(${heroOmni})`,
      }}
    >
      <Navbar isScrolled={isScrolled} setCurrentService={setCurrentService} />
      <div className="p-4 flex justify-center w-full rounded-md text-center" style={{maxWidth:'1140px'}}>
        <div className="w-full md:w-[60%] lg:w-[70%]">
          <span className="text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl leading-normal italic mt-4 font-bold">
            {titles[currentIndex].title}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Hero;
