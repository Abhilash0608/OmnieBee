import React, { useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { solutions } from "../utils/common";
import { useRef } from "react";

const Solutions = () => {
    const [currentSol, setCurrentSol] = useState(solutions[0]);

    // Animation Variants
    const containerVariant = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const cardVariant = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
    };

    const titleVariant = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
    };

    const descriptionVariant = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } },
    };

    // Ref for in-view trigger
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const controls = useAnimation();

    // Trigger animation when in view
    if (isInView) {
        controls.start("visible");
    }

    return (
        <div
            ref={ref}
            className="bg-black py-12 px-4 my-4 text-white w-full"
        >
            {/* Header Section */}
            <motion.div
                className="grid gap-8 m-auto"
                style={{ maxWidth: "1140px" }}
                variants={containerVariant}
                initial="hidden"
                animate={controls}
            >
                <motion.div className="text-center mb-8" variants={titleVariant}>
                    <h1 className="text-2xl md:text-3xl font-bold mb-2">
                        DELIVERING BEST <span className="text-blue-600">IT SOLUTIONS</span>
                    </h1>
                </motion.div>

                <motion.p
                    className="text-sm md:text-lg w-full md:w-3/4 m-auto my-4 text-center"
                    variants={descriptionVariant}
                >
                    {currentSol.description}
                </motion.p>

                {/* Solutions Grid */}
                <motion.div
                    className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
                    variants={containerVariant}
                    initial="hidden"
                    animate={controls}
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
                            <motion.img
                                src={solution.src}
                                alt={solution.title}
                                className="w-12 h-12 md:w-16 md:h-16 mb-4"
                                variants={cardVariant}
                            />
                            <motion.h3
                                className="text-xs md:text-sm font-semibold text-center"
                                variants={cardVariant}
                            >
                                {solution.title}
                            </motion.h3>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Solutions;
