import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { services } from "../utils/common";

const ServicesCards = () => {
    const sectionRef = useRef(null); // Ref to track the visibility of the section
    const isInView = useInView(sectionRef, { once: true, amount: 0.1 }); // Track if the section is in view with adjusted amount
    
    const staggerParent = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.8, // Delay between each child animation
          },
        },
    };
    
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.3, // Stagger appearance of cards
                duration: 0.6,
                ease: "easeOut",
            },
        }),
    };


    return (
        <div
            className="container mx-auto px-4 py-8 " 
            ref={sectionRef} // Attach the ref to the section
        >
            <motion.h2
                className="text-center text-3xl md:text-3xl lg:text-4xl text-sky-600 font-bold my-6"
                initial={{ opacity: 0, y: 100 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                Our Services
            </motion.h2>

            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:max-w-[90vw] lg:mx-auto  gap-6"
                variants={staggerParent}
                initial="hidden"
                animate="visible"
            >
                {services.map((service, index) => (
                    <motion.div
                        key={service.id}
                        className="flex flex-col py-4 items-center  shadow-lg rounded-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
                        variants={cardVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"} // Trigger animation when in view
                        custom={index} // Pass the index for staggered animation
                        whileHover={{
                            y: -10, // Move the card up slightly on hover
                            transition: {
                                duration: 0.3, // Smooth transition for hover effect
                                ease: "easeOut",
                            },
                        }}
                    >
                        <div className="w-full h-full flex items-center justify-center rounded-md">
                            <img src={service.src} alt={service.alt} className="h-48" />
                        </div>
                        <div className="p-8">
                            <h3 className="text-xl font-semibold text-sky-600">
                                {service.title}
                            </h3>
                            <div>
                                {service.description.map((item) => (
                                    <p className="text-gray-600 mt-2 text-lg md:text-xl lg:text-xl" key={item}>
                                        {item}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default ServicesCards;
