import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Copyright = () => {
    return (
        <div className="bg-gray-800 text-white py-4">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                {/* Copyright Text */}
                <p className="text-center md:text-left">
                    Copyrights © 2019 All Rights Reserved by Omni Bee IT Solutions
                </p>

                {/* Social Media Icons */}
                <div className="flex space-x-6">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400">
                        <FaFacebook size={20} />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-400">
                        <FaInstagram size={20} />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                        <FaTwitter size={20} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Copyright;
