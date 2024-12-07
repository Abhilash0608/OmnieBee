import React, { useEffect } from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { motion } from "framer-motion";
import { ServicesDetails } from "../utils/common";
import Contact from "../components/Contact";

const Services = ({ currentService, setCurrentService }) => {
  const serviceToRender = ServicesDetails[currentService];

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top on tab switch
  }, []);

  if (!serviceToRender) {
    return (
      <div className="text-center text-red-500">
        <h1 className="text-xl font-bold">Service Not Found</h1>
        <p>Please select a valid service.</p>
      </div>
    );
  }

  // Framer Motion Variants for Tabs
  const tabVariant = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    whileHover: { scale: 1.05 },
  };

  // Framer Motion Variants for Content Animation
  const contentVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
  };

  const lineVariant = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeInOut" },
    }),
  };

  return (
    <motion.div
      className="max-w-[1140px] mx-auto my-12 px-8"
      initial="hidden"
      animate="visible"
    >
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {ServicesDetails.map((item) => (
          <motion.button
            key={item.id}
            className={`px-4 py-2 rounded-md font-semibold ${
              currentService === item.id ? "bg-sky-600 text-white" : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setCurrentService(item.id)}
            variants={tabVariant}
            initial="initial"
            animate="animate"
            whileHover="whileHover"
          >
            {item.titleOne}
          </motion.button>
        ))}
      </div>

      {/* Content */}
      <motion.div variants={contentVariant}>
        {/* Title One */}
        <h1 className="text-sky-600 text-xl font-semibold mb-4">{serviceToRender.titleOne}</h1>

        {/* Description One */}
        <div className="space-y-6">
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
        </div>

        {/* Title Two */}
        <h2 className="text-sky-600 text-lg font-semibold mt-8 mb-4">{serviceToRender.titleTwo}</h2>

        {/* Description Two with Icons */}
        <div className="space-y-4 mb-8">
          {serviceToRender.descriptionTwo.map((desc, index) => (
            <motion.div
              key={index}
              className="flex items-start space-x-2"
              variants={lineVariant}
              custom={index}
            >
              <IoIosCheckmarkCircle className="text-sky-600 mt-1 text-lg md:text-2xl" />
              <p className="text-gray-700">{desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Contact Component */}
      <Contact />
    </motion.div>
  );
};

export default Services;
