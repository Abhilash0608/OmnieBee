import { useEffect } from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { motion } from "framer-motion";
import { expertiseDetails } from "../utils/common";
import Contact from "../components/Contact";

const ExpertTechnologies = ({ currentService,setCurrentService }) => {
    const technologyToRender = expertiseDetails[currentService];

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page on render or update
    }, []);

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
            <div className="flex justify-center gap-4 mb-8 flex-wrap">
                {expertiseDetails.map((item, index) => (
                    <motion.button
                        key={item.id}
                        onClick={() => setCurrentService(item.id)}
                        className={`px-4 py-2 font-semibold rounded-lg ${currentService === index
                                ? "bg-sky-600 text-white"
                                : "bg-gray-200 text-gray-700"
                            }`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {item.title}
                    </motion.button>
                ))}
            </div>
            <div className="my-8 px-8">
                {/* Title */}
                <h2 className="text-sky-600 text-2xl font-semibold mb-4">
                    {technologyToRender.title}
                </h2>

                {/* Description with Icons */}
                <motion.div
                    className="flex flex-col gap-4"
                    initial="hidden"
                    animate="visible"
                    key={currentService} // Re-trigger animation on state update
                >
                    {technologyToRender.descriptions.map((desc, index) => (
                        <motion.div
                            key={index}
                            className="flex items-start gap-2"
                            variants={lineVariant}
                            custom={index}
                        >
                            <IoIosCheckmarkCircle className="text-sky-600 m-1  md:text-2xl text-xl" />
                            <p className="text-gray-700">{desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
            <Contact />

        </div>
    );
};

export default ExpertTechnologies;
