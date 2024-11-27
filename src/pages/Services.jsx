import React, { useEffect } from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { motion } from "framer-motion";
import { ServicesDetails } from "../utils/common";
import Contact from "../components/Contact";



const Services = ({ currentService }) => {
    const serviceToRender = ServicesDetails[currentService];

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top on render
    }, [currentService]);

    if (!serviceToRender) {
        return (
            <div className="text-center text-red-500">
                <h1 className="text-xl font-bold">Service Not Found</h1>
                <p>Please select a valid service.</p>
            </div>
        );
    }

    const lineVariant = {
        hidden: { opacity: 0, y: 10 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.6,
                ease: "easeInOut",
            },
        }),
    };

    return (
        <motion.div
            key={currentService} // Ensures reanimation on state update
            className=" max-w-[1140px] mx-auto my-12 px-8"
            initial="hidden"
            animate="visible"
        >
            {/* Title One */}
            <motion.h1
                className="text-blue-500 text-xl font-semibold mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
            >
                {serviceToRender.titleOne}
            </motion.h1>

            {/* Description One */}
            <motion.div className="space-y-6">
                {serviceToRender.descriptionOne.map((desc, index) => (
                    <motion.p
                        key={index}
                        className="text-gray-700"
                        variants={lineVariant}
                        custom={index}
                    >
                        {desc}
                    </motion.p>
                ))}
            </motion.div>

            {/* Title Two */}
            <motion.h2
                className="text-blue-500 text-lg font-semibold mt-8 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
            >
                {serviceToRender.titleTwo}
            </motion.h2>

            {/* Description Two with Icons */}
            <motion.div className="space-y-4">
                {serviceToRender.descriptionTwo.map((desc, index) => (
                    <motion.div
                        key={index}
                        className="flex items-start space-x-2"
                        variants={lineVariant}
                        custom={index}
                    >
                        <IoIosCheckmarkCircle className="text-blue-500 mt-1 text-lg md:text-2xl" />
                        <p className="text-gray-700">{desc}</p>
                    </motion.div>
                ))}
            </motion.div>
    <Contact/>

        </motion.div>
    );
};

export default Services;
