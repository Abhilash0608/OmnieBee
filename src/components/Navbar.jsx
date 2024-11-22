import React, { useState, useRef } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import logo12 from "../assets/logo12.png";
import { expertiseDetails, services, ServicesDetails } from "../utils/common";
import { Link } from "react-router-dom";

const Navbar = ({ isScrolled,scrollToContact,setCurrentService }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [hover, setHover] = useState(false);
    const [expertHover, setExpertHover] = useState(false);

    const [hoveredService, setHoveredService] = useState(services[0]);

    // Refs for the dropdown and li
    const servicesRef = useRef(null);
    const dropdownRef = useRef(null);
    const expertiseRef=useRef(null)

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
                        <Link to="/" className="hover:text-blue-500">
                            Home
                        </Link>
                    </li>
                    <li
                        className="group relative"
                        onMouseEnter={handleMouseEnter}
                        ref={servicesRef}
                    >
                        <span className="hover:text-blue-500 flex items-center" >
                            Services <IoMdArrowDropdown className="mt-1" />
                        </span>
                        {/* Dropdown Menu */}
                        {hover && (
                            <div
                                ref={dropdownRef}
                                style={{width:'500px'}}
                                className="grid grid-cols-2 absolute rounded-lg top-10 -left-10 bg-white shadow-md space-y-2 "
                                onMouseEnter={handleMouseEnter}  // Keeps hover on mouseenter inside the dropdown
                                onMouseLeave={handleMouseLeave}   // Hides dropdown on mouseleave from dropdown
                            >
                                <div className="flex flex-col gap-1 col-span-1 rounded-lg bg-gray-900 text-white py-2">
                                    {ServicesDetails.map((service) => (
                                        <div
                                            key={service.id}
                                            className="flex py-2 m-auto"
                                            onClick={()=>{setCurrentService(service.id)}}
                                            onMouseEnter={() => {setHoveredService(service);handleMouseLeave()}}
                                        >
                                            <div className="flex">
                                                <Link
                                                    to={`services`}
                                                    className="hover:text-blue-500"
                                                >
                                                    {service.titleOne}
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="col-span-1 flex flex-col gap-4 justify-start bg-zinc-300 p-2 items-start">
                                    <h2 className="font-bold text-blue-500">{hoveredService.titleOne}</h2>
                                    <p className="text-left text-sm text-gray-600">{hoveredService.description}</p>
                                    {/* <span className="text-blue-500">Read more ...</span> */}
                                </div>
                            </div>
                        )}
                    </li>
                    <li
                        className="group relative"
                        onMouseEnter={()=>setExpertHover(true)}
                        ref={expertiseRef}
                    >
                        <span className="hover:text-blue-500 flex items-center" >
                            Expertise <IoMdArrowDropdown className="mt-1" />
                        </span>
                        {/* Dropdown Menu */}
                        {expertHover && (
                            <div
                                ref={dropdownRef}
                                className=" absolute rounded-lg top-10 -left-10 bg-white shadow-md  w-72 "
                                onMouseEnter={()=>setExpertHover(true)} // Keeps hover on mouseenter inside the dropdown
                                onMouseLeave={()=>setExpertHover(false)}   // Hides dropdown on mouseleave from dropdown
                            >
                                <div className="flex flex-col gap-1 col-span-1 rounded-lg bg-gray-900 text-white">
                                    {expertiseDetails.map((expert) => (
                                        <div
                                            key={expert.id}
                                            className="flex py-2 m-auto"
                                            onClick={()=>{setCurrentService(expert.id);setExpertHover(false)}}
                                        >
                                            <div className="flex">
                                                <Link
                                                    to={`expertise`}
                                                    className="hover:text-blue-500"
                                                >
                                                    {expert.title}
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                
                            </div>
                        )}
                    </li>
                   
                    <li>
                        <Link to="/careers" className="hover:text-blue-500">
                            Careers
                        </Link>
                    </li>
                    <li>
                        <span onClick={()=>scrollToContact()} className="hover:text-blue-500">
                            Contact Us
                        </span>
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
                <div className="md:hidden bg-gray-700 p-4">
                    <ul className="space-y-4">
                        <li>
                            <Link to="/" className="block hover:text-blue-500">
                                Home
                            </Link>
                        </li>
                        <li className="flex justify-center m-auto">
                            <div className="flex flex-col justify-center">
                                <button
                                    onClick={() => setServicesOpen(!servicesOpen)}
                                    className="flex items-center w-full text-center hover:text-yellow-500"
                                >
                                    Services <IoMdArrowDropdown />
                                </button>
                                {servicesOpen && (
                                    <ul className="mt-2 space-y-2 bg-gray-800">
                                        {expertiseDetails.map(
                                            (expert, index) => (
                                                <li key={index}>
                                                    <Link
                                                        to={`/services`}
                                                        className=" hover:text-yellow-500"
                                                    >
                                                        {expert.title}
                                                    </Link>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                )}
                            </div>
                        </li>
                       
                        <li>
                            <Link to="/careers" className="block hover:text-blue-500">
                                Careers
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="block hover:text-blue-500">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
