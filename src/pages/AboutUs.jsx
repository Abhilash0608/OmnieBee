import { motion } from "framer-motion";
import aboutImage from "../assets/aboutusss.png";

const AboutUs = () => {
  return (
    <div className="min-h-screen  flex flex-col items-center p-4 lg:max-w-[80vw] md:max-w-[80vw] max-w-[90vw] w-full mx-auto bg-none  ">
      {/* First Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center w-full py-4 ">
        {/* Left Side - Image */}
        <motion.div
          className="w-full h-auto hidden lg:block md:block"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={aboutImage}
            alt="About Omniebee Global Solutions"
            className="rounded-lg  w-full object-cover"
          />
        </motion.div>

        {/* Right Side - Content */}
        <motion.div
          className="text-gray-800"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-2xl lg:text-2xl font-bold text-sky-600 mb-4">
            At OMNIEBEE GLOBAL SOLUTIONS
          </h1>
          <p className="text-lg lg:text-lg leading-relaxed">
            We drive innovation and empower businesses to thrive in a dynamic world.
            From responsive web designs and custom software to cloud computing and
            e-learning platforms, we deliver tailored solutions across industries.
            Combining creativity, advanced technology, and insights, we enable
            seamless operations, boost visibility, and ensure impactful digital
            transformation for growth and success.
          </p>
        </motion.div>
      </div>

      {/* Second Section */}
    
    </div>
  );
};

export default AboutUs;