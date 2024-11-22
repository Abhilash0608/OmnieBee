import React, { useState } from "react";
import { solutions } from "../utils/common";

const Solutions = () => {
    const [currentSol, setCurrentSol] = useState(solutions[0]);

    return (
        <div className="bg-black flex flex-col gap-4 py-12 my-4  text-white w-full  ">
            {/* Header Section */}
            <div className=" m-auto" style={{maxWidth:'1140px'}}>
            <div className="text-center mb-8">
                <h1 className="text-2xl md:text-3xl font-bold mb-2">
                    DELIVERING BEST <span className="text-blue-600">IT SOLUTIONS</span>
                </h1>
                <p className="text-sm md:text-lg w-full md:w-1/2 m-auto my-4">
                    {currentSol.description}
                </p>
            </div>

            {/* Solutions Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {solutions.map((solution) => (
                    <div
                        key={solution.id}
                        onClick={() => setCurrentSol(solution)}
                        className={`p-4 rounded-lg cursor-pointer shadow-md flex flex-col items-center justify-center transition-transform duration-300 ${currentSol.id === solution.id
                                ? "bg-blue-500 scale-105"
                                : "bg-[#0c2752] hover:bg-sky-400"
                            }`}
                    >
                        <img
                            src={solution.src}
                            alt={solution.title}
                            className="w-14 h-14 md:w-16 md:h-16 mb-4"
                        />
                        <h3 className="text-sm md:text-lg font-semibold text-center">
                            {solution.title}
                        </h3>
                    </div>
                ))}
            </div>
            </div>
            
        </div>
    );
};

export default Solutions;
