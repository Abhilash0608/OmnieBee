import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import contactData from "../app.json"; // Import the contact JSON
import { useEffect } from "react";

const Contact = () => {
  const {
    pageTitle,
    metaDescription,
    form: { title: formTitle, description, fields, buttonText },
    contactDetails: { address, phone, email },
  } = contactData.contact;

  // Update metadata on component mount
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top of the page
    document.title = pageTitle; // Update page title
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", metaDescription); // Update meta description
  }, [pageTitle, metaDescription]);

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
      className="container mx-auto grid grid-cols-1 md:grid-cols-2 my-4 lg:max-w-[90vw]  gap-8"
      id="contact"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Left Grid: Form */}
      <motion.div
        className="bg-zinc-100 md:p-2 px-6 rounded-lg "
        variants={itemVariants}
        custom={0}
      >
        <h2 className="text-2xl font-bold mb-4 text-sky-600">{formTitle}</h2>
        <p className="mb-6 text-gray-700">{description}</p>
        <form className="space-y-4">
          <input
            type="text"
            placeholder={fields.namePlaceholder}
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          />
          <input
            type="email"
            placeholder={fields.emailPlaceholder}
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          />
          <input
            type="tel"
            placeholder={fields.phonePlaceholder}
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          />
          <input
            type="text"
            placeholder={fields.subjectPlaceholder}
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          />
          <textarea
            placeholder={fields.messagePlaceholder}
            rows="5"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          ></textarea>
          <button
            type="submit"
            className="bg-sky-600 text-white px-6 py-2 rounded-lg hover:bg-sky-900"
          >
            {buttonText}
          </button>
        </form>
      </motion.div>

      {/* Right Grid: Contact Info */}
      <motion.div
        className="bg-zinc-100 p-6 flex flex-col items-center justify-center rounded-lg  space-y-6"
        variants={itemVariants}
        custom={1}
      >
        <div className="flex flex-col gap-8 w-full px-4">
          {/* Address Section */}
          <div className="flex flex-col items-center justify-center gap-4 w-full">
            <a
              href={address.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <FaMapMarkerAlt className="text-sky-600 text-4xl" />
            </a>
            <div className="flex flex-col items-center">
              <h3 className="font-bold">{address.title}</h3>
              <p className="text-gray-700 text-center">{address.description}</p>
            </div>
          </div>

          {/* Phone Section */}
          <div className="flex flex-col items-center justify-center gap-4 w-full">
            <a href={phone.phoneLink} className="text-gray-700 text-center">
              <FaPhoneAlt className="text-sky-600 text-4xl" />
            </a>
            <div className="flex flex-col items-center">
              <h3 className="font-bold">{phone.title}</h3>
              <a href={phone.phoneLink} className="text-sky-600 text-center">
                {phone.number}
              </a>
            </div>
          </div>

          {/* Email Section */}
          <div className="flex flex-col items-center justify-center gap-4 w-full">
            <a href={email.emailLink}>
              <FaEnvelope className="text-sky-600 text-4xl" />
            </a>
            <div className="flex flex-col items-center">
              <h3 className="font-bold">{email.title}</h3>
              <p className="text-gray-700 text-center">
                <a href={email.emailLink} className="text-sky-600">
                  {email.address}
                </a>
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
