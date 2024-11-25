import { useEffect } from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { motion } from "framer-motion";
import { expertiseDetails } from "../utils/common";

const ExpertTechnologies = ({ currentService }) => {
    const technologyToRender = expertiseDetails[currentService];

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page on render or update
    }, [currentService]);

    const lineVariant = {
        hidden: { opacity: 0, y: 10 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2, // Delay each line by 0.2s
                duration: 0.6,
                ease: "easeInOut",
            },
        }),
    };

    return (
        <div className="p-4 max-w-4xl mx-auto my-12" style={{ maxWidth: '1140px' }}>
            <div className="mt-8">
                {/* Title */}
                <h2 className="text-blue-500 text-lg font-semibold mb-4">
                    {technologyToRender.title}
                </h2>

                {/* Description with Icons */}
                <motion.div
                    className="flex gelx-col gap-4"
                    initial="hidden"
                    animate="visible"
                    key={currentService} // Re-trigger animation on state update
                >
                    {technologyToRender.descriptions.map((desc, index) => (
                        <motion.div
                            key={index}
                            className="flex items-center justify-center space-x-2"
                            variants={lineVariant}
                            custom={index}
                        >
                            <IoIosCheckmarkCircle className="text-blue-500 mt-1 md:text-2xl text-xl" />
                            <p className="text-gray-700">{desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default ExpertTechnologies;
