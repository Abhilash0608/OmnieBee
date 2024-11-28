import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { services } from "../utils/common";

const ServicesCards = () => {
    const sectionRef = useRef(null); // Ref to track the visibility of the section
    const isInView = useInView(sectionRef, { once: true, amount: 0.3 }); // Track if the section is in view

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.5, // Stagger appearance of cards
                duration: 0.8,
                ease: "easeOut",
            },
        }),
    };

    return (
        <div
            className="container mx-auto px-4 py-8"
            ref={sectionRef} // Attach the ref to the section
        >
            <motion.h2
                className="text-center text-3xl font-bold mb-6"
                initial={{ opacity: 0, y: 100 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                Our Services
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                    <motion.div
                        key={service.id}
                        className="flex flex-col items-center gap-2 bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300"
                        variants={cardVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"} // Trigger animation when in view
                        custom={index} // Pass the index for staggered animation
                        // whileHover={{
                        //     y: -10, // Move the card up slightly on hover
                        //     transition: {
                        //         duration: 0.3, // Smooth transition for hover effect
                        //         ease: "easeOut",
                        //     },
                        // }}
                    >
                        <img
                            src={service.src}
                            alt={service.title}
                            height={100}
                            width={100}
                        />
                        <h3 className="text-xl font-semibold mb-4 text-blue-600">
                            {service.title}
                        </h3>
                        <p className="text-gray-700">{service.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ServicesCards;
