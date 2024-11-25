import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const ContactUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, ease: "easeInOut" } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeInOut" },
    }),
  };

  return (
    <motion.div
      className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
      id="contact"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Left Grid: Form */}
      <motion.div
        className="bg-white p-6 rounded-lg shadow-md"
        variants={itemVariants}
        custom={0}
      >
        <h2 className="text-2xl font-bold mb-4 text-blue-600">SEND US A MESSAGE</h2>
        <p className="mb-6 text-gray-700">
          Please send us your details by filling out the form below, and we will quickly get back to you.
        </p>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          />
          <textarea
            placeholder="Message"
            rows="5"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </motion.div>

      {/* Right Grid: Contact Info */}
      <motion.div
        className="bg-gray-100 p-6 flex flex-col items-start justify-center rounded-lg shadow-md space-y-6"
        variants={itemVariants}
        custom={1}
      >
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-2 place-items-center gap-4">
            <FaMapMarkerAlt className="text-blue-600 text-4xl ml-auto" />
            <div>
              <h3 className="font-bold">Address</h3>
              <p className="text-gray-700">8-3-231/A 77 & 78, SRI KRISHNA NAGAR, YOUSUFGUDA, HYDERABAD-500045</p>
            </div>
          </div>
          <div className="grid grid-cols-2 place-items-center gap-4">
            <FaPhoneAlt className="text-blue-600 text-4xl ml-auto" />
            <div className="mr-auto">
              <h3 className="font-bold">Phone</h3>
              <p className="text-gray-700">+91 9505637481</p>
            </div>
          </div>
          <div className="grid grid-cols-2 place-items-center gap-4">
            <FaEnvelope className="text-blue-600 text-4xl ml-auto" />
            <div className="mr-auto">
              <h3 className="font-bold">Email</h3>
              <p className="text-gray-700">omniebeeglobalsolutions@gmail.com</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContactUs;
