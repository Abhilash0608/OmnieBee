import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import copyrightData from "../app.json"; // Assuming the JSON file is stored here

const icons = {
    FaFacebook,
    FaInstagram,
    FaLinkedin
};

const Copyright = () => {
    const { text, socialMediaLinks } = copyrightData.copyright;

    return (
        <div className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                {/* Copyright Text */}
                <p className="text-center md:text-left">
                    {text}
                </p>

                {/* Social Media Icons */}
                <div className="flex space-x-6">
                    {socialMediaLinks.map((link, index) => {
                        const IconComponent = icons[link.icon];
                        return (
                            <a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${link.color} ${link.hoverColor}`}
                            >
                                <IconComponent size={20} />
                            </a>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Copyright;
