import React, { useState, useEffect } from "react";
import heroOmni from "../assets/heroOmni.jpg";
import Navbar from "./Navbar";

const titles = [
  { id: 1, title: "Design, Explore, and Personalize a unique website for your company." },
  { id: 2, title: "Top-notch Technical Solutions for your company." },
  { id: 3, title: "IT Consultancy that enhances customer experience and brand loyalty." },
  { id: 4, title: "5% of customer retention can lead to an increase of 25% in profits." },
];

function Hero({scrollToContact,setCurrentService}) {
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
      <Navbar isScrolled={isScrolled}  scrollToContact={scrollToContact} setCurrentService={setCurrentService}/>
      <div className="p-4 flex justify-center w-full rounded-md text-center">
        <div className="w-full md:w-[60%] lg:w-[40%]">
          <span className="text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl leading-normal italic mt-4 font-bold">
            {titles[currentIndex].title}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Hero;
