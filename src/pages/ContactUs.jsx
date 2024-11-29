import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import contactData from "../app.json"; // Import the contact JSON
import contactus from '../assets/contactus.png'
const Contact = () => {
  const {
    pageTitle,
    metaDescription,
    form: { title: formTitle, description, fields, buttonText },
  } = contactData.contact;

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top of the page
    document.title = pageTitle; // Update page title
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", metaDescription); // Update meta description

    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, pageTitle, metaDescription, controls]);

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger child animations
      },
    },
  };

  const fieldVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
  };

  return (
    <div
      className="  bg-zinc-200 w-full   bg-cover  "
      ref={ref}
      style={{
        backgroundImage: `url('${contactus}')`,
      }}
    >
        <div className="max-w-[90vw] mx-auto">
       <motion.div
        className="bg-none  p-8 rounded-lg  flex flex-col justify-center items-start "
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.h2
          className="text-3xl font-bold mb-6 text-sky-600"
          variants={fieldVariant}
        >
          {formTitle}
        </motion.h2>
        <motion.p className="mb-6 text-gray-600 r" variants={fieldVariant}>
          {description}
        </motion.p>
        <form className="space-y-4 w-full max-w-md">
          <motion.input
            type="text"
            placeholder={fields.namePlaceholder}
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            variants={fieldVariant}
          />
          <motion.input
            type="email"
            placeholder={fields.emailPlaceholder}
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            variants={fieldVariant}
          />
          <motion.input
            type="tel"
            placeholder={fields.phonePlaceholder}
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            variants={fieldVariant}
          />
          <motion.input
            type="text"
            placeholder={fields.subjectPlaceholder}
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            variants={fieldVariant}
          />
          <motion.textarea
            placeholder={fields.messagePlaceholder}
            rows="5"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            variants={fieldVariant}
          ></motion.textarea>
          <motion.button
            type="submit"
            className="bg-sky-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
            variants={fieldVariant}
          >
            {buttonText}
          </motion.button>
        </form>
      </motion.div>

     
        </div>
     
    </div>
  );
};

export default Contact;
