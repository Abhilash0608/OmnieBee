import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import logo12 from "../assets/logo12.png";
import { expertiseDetails, services, ServicesDetails } from "../utils/common";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Navbar = ({ isScrolled, setCurrentService }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [hover, setHover] = useState(false);
    const [expertHover, setExpertHover] = useState(false);

    const [hoveredService, setHoveredService] = useState(services[0]);
    const [servicesAccordionOpen, setServicesAccordionOpen] = useState(false);
    const [expertiseAccordionOpen, setExpertiseAccordionOpen] = useState(false);

    // Refs for the dropdown and li

    // Function to handle mouse enter and leave
    const handleMouseEnter = () => setHover(true);
    const handleMouseLeave = () => setHover(false);

    return (
        <nav
            className={`${isScrolled
                ? "bg-white text-black shadow-md"
                : "bg-none text-white"
                } fixed top-0 left-0 w-full z-10 transition-all duration-300`}
        >
            <div className="container mx-auto flex items-center justify-between p-4">
                {/* Logo */}
                <div className="text-lg font-bold">
                    <Link to="/">
                        <img src={logo12} alt="logo" height={120} width={120} />
                    </Link>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6 relative">
                    <li>
                        <Link to="/" className="hover:text-blue-500 cursor-pointer">
                            Home
                        </Link>
                    </li>
                    <li
                        className="group relative"
                        onMouseEnter={() => { handleMouseEnter() }}
                        onMouseLeave={handleMouseLeave}
                        tabIndex={0}
                    >
                        <span className="hover:text-blue-500 flex items-center" >
                            Services <IoMdArrowDropdown className="mt-1" />
                        </span>
                        {/* Dropdown Menu */}
                        {hover && (
                            <div>
                                <motion.div
                                    style={{ width: "400px" }}
                                    className="grid grid-cols-2 absolute rounded-lg top-6 -left-16 bg-white shadow-md space-y-2"
                                    onMouseEnter={() => {
                                        handleMouseEnter();
                                        setExpertHover(false);
                                    }}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                >
                                    <div className="flex flex-col gap-1 col-span-1 rounded-lg bg-gray-900 text-white py-2">
                                        {ServicesDetails.map((service) => (
                                            <div
                                                key={service.id}
                                                className="flex py-2 m-auto"
                                                onClick={() => {
                                                    setCurrentService(service.id);
                                                    setHover(false);
                                                }}
                                                onMouseEnter={() => {
                                                    setHoveredService(service);
                                                }}
                                            >
                                                <div className="flex">
                                                    <Link to={`services`} className="hover:text-blue-500 cursor-pointer">
                                                        {service.titleOne}
                                                    </Link>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="col-span-1 flex flex-col gap-4 justify-start p-4 items-start">
                                        <h2 className="font-bold text-blue-500">{hoveredService.titleOne}</h2>
                                        <p className="text-left text-sm text-gray-600">{hoveredService.description}</p>
                                        {/* <span className="text-blue-500">Read more ...</span> */}
                                    </div>
                                </motion.div>
                            </div>
                        )}
                    </li>
                    <li
                        className="group relative"
                        onMouseEnter={() => { setExpertHover(true) }}
                        onMouseLeave={() => setExpertHover(false)}
                        tabIndex={0}
                    // Ensure "Services" dropdown closes
                    >
                        <span className="hover:text-blue-500 flex items-center">
                            Expertise <IoMdArrowDropdown className="mt-1 cursor-pointer" />
                        </span>
                        {expertHover && (
                            <motion.div
                                className="absolute rounded-lg top-6 -left-10 bg-white shadow-md w-72 "
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                            >
                                <div className="flex flex-col gap-1 col-span-1 rounded-lg bg-gray-900 py-2 text-white">
                                    {expertiseDetails.map((expert) => (
                                        <motion.div
                                            key={expert.id}
                                            className="flex py-2 m-auto"
                                            onClick={() => {
                                                setCurrentService(expert.id);
                                                setExpertHover(false);
                                            }}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.1 * expert.id, duration: 0.2 }}
                                        >
                                            <div className="flex">
                                                <Link to={`expertise`} className="hover:text-blue-500 cursor-pointer">
                                                    {expert.title}
                                                </Link>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </li>


                    <li>
                        <Link to="/careers" className="hover:text-blue-500 cursor-pointer">
                            Careers
                        </Link>
                    </li>
                    <li>
                        <Link to='/contactus' className="hover:text-blue-500 cursor-pointer">
                            Contact Us
                        </Link>
                    </li>
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className={`block md:hidden text-3xl transition-all duration-300 ${isScrolled ? "text-black" : "text-white"}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="md:hidden bg-blue-400 rounded-lg text-white py-3"
                >
                    <ul className="space-y-4">
                        <li className="text-center">
                            <Link to="/" className="block " onClick={() => setMenuOpen(false)}>
                                Home
                            </Link>
                        </li>

                        {/* Services Accordion */}
                        <li className="flex flex-col items-center">
                            <button
                                onClick={() => setServicesAccordionOpen(!servicesAccordionOpen)}
                                className="flex items-center justify-center w-full "
                            >
                                Services <IoMdArrowDropdown />
                            </button>
                            {servicesAccordionOpen && (
                                <motion.ul
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                    className=" bg-white text-blue-500 rounded-lg flex flex-col gap-2 p-2 w-full text-center overflow-hidden"
                                >
                                    {ServicesDetails.map((service) => (
                                        <li key={service.id}>
                                            <Link
                                                to="services"
                                                onClick={() => {
                                                    setCurrentService(service.id);
                                                    setMenuOpen(false)
                                                    setServicesAccordionOpen(false)
                                                }}
                                                className="block "
                                            >
                                                {service.titleOne}
                                            </Link>
                                        </li>
                                    ))}
                                </motion.ul>
                            )}
                        </li>

                        {/* Expertise Accordion */}
                        <li className="flex flex-col items-center">
                            <button
                                onClick={() => setExpertiseAccordionOpen(!expertiseAccordionOpen)}
                                className="flex items-center justify-center w-full "
                            >
                                Expertise <IoMdArrowDropdown />
                            </button>
                            {expertiseAccordionOpen && (
                                <motion.ul
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                    className="mt-2 flex flex-col gap-2 p-2 rounded-lg bg-white w-full text-center overflow-hidden"
                                >
                                    {expertiseDetails.map((expert) => (
                                        <li key={expert.id}>
                                            <Link
                                                to="expertise"
                                                onClick={() => {
                                                    setCurrentService(expert.id);
                                                    setMenuOpen(false)
                                                    setExpertiseAccordionOpen(false)
                                                }}
                                                className="block text-blue-500"
                                            >
                                                {expert.title}
                                            </Link>
                                        </li>
                                    ))}
                                </motion.ul>
                            )}
                        </li>

                        <li className="text-center">
                            <Link to="/careers" className="block hover:text-blue-500" onClick={() => {
                                setMenuOpen(false)

                            }}>
                                Careers
                            </Link>
                        </li>
                        <li className="text-center">
                            <Link to='contactus' className="hover:text-blue-500 cursor-pointer" onClick={() => {
                                setMenuOpen(false)

                            }}>
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
