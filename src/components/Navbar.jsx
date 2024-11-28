import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import logo12 from "../assets/logo12.png";
import { expertiseDetails, ServicesDetails } from "../utils/common";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Navbar = ({ isScrolled, setCurrentService }) => {
    const location = useLocation();
    const isActive = (path) => location.pathname.includes(path);
    const [menuOpen, setMenuOpen] = useState(false);
    const [hover, setHover] = useState(false);
    const [expertHover, setExpertHover] = useState(false);

    const [hoveredService, setHoveredService] = useState(ServicesDetails[0]);
    const [servicesAccordionOpen, setServicesAccordionOpen] = useState(false);
    const [expertiseAccordionOpen, setExpertiseAccordionOpen] = useState(false);

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
                <div className="text-lg font-bold">
                    <NavLink to="/">
                        <img src={logo12} alt="Omnibee gloabl solutions" height={140} width={140} />
                    </NavLink>
                </div>

                <ul className="hidden md:flex space-x-6 relative">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => isActive ? "text-sky-600 md:text-2xl" : "hover:text-sky-600 md:text-2xl"}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li
                        className="group relative"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <span  
                         className={ `${isActive('/services') ? 'text-sky-600 md:text-2xl flex items-center cursor-pointer' : 'hover:text-sky-600  md:text-2xl flex items-center cursor-pointer'}  `}
                       
                            >
                            Services <IoMdArrowDropdown className="mt-1" />
                        </span>
                        {hover && (
                            <motion.div
                                style={{ width: "400px" }}
                                className="grid grid-cols-2 absolute rounded-lg top-8 -left-16 bg-white shadow-md space-y-2"
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
                                            onMouseEnter={() => setHoveredService(service)}
                                            onClick={() => setHover(false)}
                                        >
                                            <NavLink
                                                to="/services"
                                                className="hover:text-blue-500 cursor-pointer"
                                                onClick={()=>{
                                                    setCurrentService(service.id);
                                                }}
                                            >
                                                {service.titleOne}
                                            </NavLink>
                                        </div>
                                    ))}
                                </div>
                                <div className="col-span-1 flex flex-col gap-4 justify-start p-4 items-start">
                                    <h2 className="font-bold text-blue-500">{hoveredService.titleOne}</h2>
                                    <p className="text-left text-sm text-gray-600">{hoveredService.description}</p>
                                </div>
                            </motion.div>
                        )}
                    </li>
                    <li
                        className="group relative"
                        onMouseEnter={() => setExpertHover(true)}
                        onMouseLeave={() => setExpertHover(false)}
                    >
                        <span
                            className={ `${isActive('/expertise') ? 'text-sky-600 md:text-2xl flex items-center cursor-pointer' : 'hover:text-sky-600 flex md:text-2xl items-center cursor-pointer'}  `}
                           
                        >
                            Expertise <IoMdArrowDropdown className="mt-1" />
                        </span>

                        {expertHover && (
                            <motion.div
                                className="absolute rounded-lg top-8 -left-10 bg-white shadow-md w-60"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                            >
                                <div className="flex flex-col gap-1 col-span-1 rounded-lg bg-gray-900 text-white py-2">
                                    {expertiseDetails.map((expert) => (
                                        <motion.div
                                            key={expert.id}
                                            className="flex py-2 m-auto"
                                            onClick={() => setExpertHover(false)}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.1 * expert.id, duration: 0.2 }}
                                        >
                                            <NavLink
                                                to="/expertise"
                                                className="hover:text-blue-500 cursor-pointer"
                                                onClick={()=>{
                                                    setCurrentService(expert.id);
                                                }}
                                            >
                                                {expert.title}
                                            </NavLink>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </li>
                    <li>
                        <NavLink
                            to="/careers"
                            className={({ isActive }) => isActive ? "text-sky-600 md:text-2xl" : "hover:text-text-600 md:text-2xl "}
                        >
                            Careers
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contactus"
                            className={({ isActive }) => isActive ? "text-sky-600 md:text-2xl" : "hover:text-sky-600 md:text-2xl "}
                        >
                            Contact Us
                        </NavLink>
                    </li>
                </ul>

                <button
                    className={`block md:hidden text-3xl transition-all duration-300 ${isScrolled ? "text-black" : "text-white"}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </button>
            </div>

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
                            <NavLink to="/" 
                            // className="block "
                            className={({ isActive }) =>
                                isActive
                                    ? "  text-blue-900 block"
                                    : " block"
                            }
                             onClick={() => 
                             setMenuOpen(false)}>
                                Home
                            </NavLink>
                        </li>

                        {/* Services Accordion */}
                        <li className="flex flex-col items-center">
                            <button
                                onClick={() => setServicesAccordionOpen(!servicesAccordionOpen)}
                                className={`flex items-center justify-center w-full ${isActive('/services') ? 'text-blue-900' : ''}`}
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
                                            <NavLink
                                                to="services"
                                                onClick={() => {
                                                    setCurrentService(service.id);
                                                    setMenuOpen(false)
                                                    setServicesAccordionOpen(false)
                                                }}
                                                className="block "
                                            >
                                                {service.titleOne}
                                            </NavLink>
                                        </li>
                                    ))}
                                </motion.ul>
                            )}
                        </li>

                        {/* Expertise Accordion */}
                        <li className="flex flex-col items-center">
                            <button
                                onClick={() => setExpertiseAccordionOpen(!expertiseAccordionOpen)}
                                className={`flex items-center justify-center w-full ${isActive('/expertise') ? 'text-blue-900' : ''}`}
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
                                            <NavLink
                                                to="expertise"
                                                onClick={() => {
                                                    setCurrentService(expert.id);
                                                    setMenuOpen(false)
                                                    setExpertiseAccordionOpen(false)
                                                }}
                                                className="block text-blue-500"
                                            >
                                                {expert.title}
                                            </NavLink>
                                        </li>
                                    ))}
                                </motion.ul>
                            )}
                        </li>

                        <li className="text-center">
                            <NavLink to="/careers" 
                            className={({ isActive }) =>
                                isActive
                                    ? "  text-blue-900 cursor-pointer"
                                    : " cursor-pointer"
                            }
                            onClick={() => {
                                setMenuOpen(false)

                            }}>
                                Careers
                            </NavLink>
                        </li>
                        <li className="text-center">
                            <NavLink to='contactus' 
                            className={({ isActive }) =>
                                isActive
                                    ? "  text-blue-900 cursor-pointer"
                                    : " cursor-pointer"
                            }
                             onClick={() => {
                                setMenuOpen(false)

                            }}>
                                Contact Us
                            </NavLink>
                        </li>
                    </ul>
                </motion.div>
            )}

        </nav>
    );
};

export default Navbar; 