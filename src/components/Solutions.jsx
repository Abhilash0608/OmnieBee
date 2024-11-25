import React, { useState } from "react";
import { motion } from "framer-motion";
import { solutions } from "../utils/common";

const Solutions = () => {
    const [currentSol, setCurrentSol] = useState(solutions[0]);

    // Animation Variants
    const cardVariant = {
        hidden: { opacity: 0, y: 10 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.6,
                ease: "easeInOut",
            },
        }),
    };

    return (
        <div className="bg-black py-12 px-4 my-4 text-white w-full">
            {/* Header Section */}
            <div className="grid gap-8 m-auto" style={{ maxWidth: "1140px" }}>
                <div className="text-center mb-8">
                    <h1 className="text-2xl md:text-3xl font-bold mb-2">
                        DELIVERING BEST <span className="text-blue-600">IT SOLUTIONS</span>
                    </h1>
                    <p className="text-sm md:text-lg w-full md:w-3/4 m-auto my-4">
                        {currentSol.description}
                    </p>
                </div>

                {/* Solutions Grid */}
                <motion.div
                    className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
                    initial="hidden"
                    animate="visible"
                >
                    {solutions.map((solution, index) => (
                        <motion.div
                            key={solution.id}
                            onClick={() => setCurrentSol(solution)}
                            className={`p-4 rounded-lg cursor-pointer shadow-md flex flex-col items-center justify-center transition-transform duration-300 ${
                                currentSol.id === solution.id
                                    ? "bg-blue-500 scale-105"
                                    : "bg-[#0c2752] hover:bg-sky-400"
                            }`}
                            variants={cardVariant}
                            custom={index}
                        >
                            <img
                                src={solution.src}
                                alt={solution.title}
                                className="w-12 h-12 md:w-16 md:h-16 mb-4"
                            />
                            <h3 className="text-xs md:text-sm font-semibold text-center">
                                {solution.title}
                            </h3>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Solutions;
