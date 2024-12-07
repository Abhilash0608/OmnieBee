import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import InfiniteCarousel from "./InfiniteCarousel";

const Technologies = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });



 





  return (
    <div ref={sectionRef} className="w-full px-4 py-8 ">
      <motion.h2
        className="text-3xl md:text-4xl lg:text-4xl text-sky-600 font-bold text-center mb-4"
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
      <InfiniteCarousel/>

    </div>
  );
};

export default Technologies;