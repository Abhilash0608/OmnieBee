import React, { useState } from "react";
import { motion } from "framer-motion";
import { solutions } from "../utils/common";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Solutions = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to navigate to the next slide
    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === solutions.length - 1 ? 0 : prevIndex + 1
        );
    };

    // Function to navigate to the previous slide
    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? solutions.length - 1 : prevIndex - 1
        );
    };

  

    // Animation Variants
    const slideVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeInOut" } },
    };

    return (
        <div className="relative flex flex-col items-center justify-center py-12 px-4 ">
            {/* Title Section */}
            <motion.div
                className="text-center mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="text-xl md:text-3xl font-bold mb-4">
                    Delivering Best <span className="text-sky-600">IT SOLUTIONS</span>
                </h1>
            </motion.div>

            {/* Carousel Container */}
            <div className="w-full max-w-[80vw] flex items-center justify-center relative">
                {/* Left Arrow */}
                <button
                    onClick={prevSlide}
                    className="absolute left-0 p-2 text-gray-600 hover:text-gray-900 transition-colors"
                >
                    <FaChevronLeft size={32} />
                </button>

                {/* Current Slide */}
                <motion.div
                    className="w-full flex flex-col items-center"
                    key={currentIndex}
                    variants={slideVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <img
                        src={solutions[currentIndex].src}
                        alt={solutions[currentIndex].title}
                        className="w-24 h-24 md:w-72 md:h-72 object-contain mb-4"
                    />
                    <h3 className="text-lg font-semibold mb-2">
                        {solutions[currentIndex].title}
                    </h3>
                    <p className="text-gray-600 text-center text-sm">
                        {solutions[currentIndex].description}
                    </p>
                </motion.div>

                {/* Right Arrow */}
                <button
                    onClick={nextSlide}
                    className="absolute right-0 p-2 text-gray-600 hover:text-gray-900 transition-colors"
                >
                    <FaChevronRight size={32} />
                </button>
            </div>

            {/* Carousel Dots */}
            <div className="flex justify-center mt-6 space-x-2">
                {solutions.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                            index === currentIndex
                                ? "bg-sky-600"
                                : "bg-gray-300 hover:bg-gray-500"
                        }`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Solutions;
