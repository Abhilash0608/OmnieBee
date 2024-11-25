import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Copyright = () => {
    return (
        <div className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                {/* Copyright Text */}
                <p className="text-center md:text-left">
                    Copyrights © 2024 All Rights Reserved by Omnie Bee IT Solutions
                </p>

                {/* Social Media Icons */}
                <div className="flex space-x-6">
                    <a href="https://www.facebook.com/profile.php?id=61565397555246" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400">
                        <FaFacebook size={20} />
                    </a>
                    <a href="https://www.instagram.com/omniebee_global_solutions" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-400">
                        <FaInstagram size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/vinay-surya-a98864266/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                        <FaLinkedin size={20} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Copyright;
