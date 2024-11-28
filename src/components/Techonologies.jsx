import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { images } from "../utils/common";

const Technologies = () => {
  const sectionRef = useRef(null); // Ref to track the visibility of the section
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 }); // Trigger animations when 30% of the component is visible

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2, // Stagger animation for each item
        duration: 0.5,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <div ref={sectionRef} className="w-full px-4 py-8">
      <motion.h2
        className="text-3xl font-bold text-center mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        Technologies
      </motion.h2>
      <motion.p
        className="text-center text-gray-600 mb-8"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Finding reliable Business Solutions using trend-setting technologies.
      </motion.p>
      <div className="grid gap-2 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 px-5">
        {images.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center p-2 bg-gray-100 rounded-md shadow hover:shadow-lg mt-4 transition"
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"} // Animate only when in view
            custom={index}
          >
            <img src={item.src} alt={item.alt} height={100} width={100} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
