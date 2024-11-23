import React from "react";
import { motion } from "framer-motion";
import { images } from "../utils/common";

const Technologies = () => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.2, // Stagger animation for each item
        duration: 0.4,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <div className="w-full px-4 py-8">
      <motion.h2
        className="text-3xl font-bold text-center mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        Technologies
      </motion.h2>
      <motion.p
        className="text-center text-gray-600 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Finding reliable Business Solutions using trend-setting technologies.
      </motion.p>
      <div className="grid gap-2 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 px-5">
        {images.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center p-2 max-w-[60%] bg-gray-100 rounded-md shadow hover:shadow-lg mt-2 transition"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={index}
          >
            <img src={item.src} alt={item.alt} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
