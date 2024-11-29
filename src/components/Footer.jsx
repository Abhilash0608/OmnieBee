import React from "react";
import logo from '../assets/logo.png'
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-16">
      <div className="container mx-auto max-w-[90vw] grid grid-cols-1 md:grid-cols-3 place-items-center md:place-items-center  gap-8">
        <div className="flex flex-col items-center md:items-start">
          <img
            src={logo}
            alt="Omniebee Global Solutions"
            className="w-60 h-60 md:w-80 md:h-80"
          />
        </div>

       

        <div className=" grid grid-cols-2 gap-4 place-items-center w-full mt-6">
        <div>
          <h4 className="text-xl md:text-2xl font-semibold mb-4 text-sky-600">Menu</h4>
          <ul className="space-y-6">
            <li>
              <Link to="/services" className="hover:text-sky-600">
                Services
              </Link>
            </li>
            <li>
              <Link to="/expertise" className="hover:text-sky-600">
                Expertise
              </Link>
            </li>
            <li>
              <Link to="/careers" className="hover:text-sky-600">
                Careers
              </Link>
            </li>
            <li>
              <Link to="/contactus" className="hover:text-sky-600">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl md:text-2xl font-semibold mb-4 text-sky-600">Services</h4>
          <ul className="space-y-6">
            <li>
              <Link to="/services" className="hover:text-sky-600">
                Web Development
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-sky-600">
                App Development
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-sky-600">
                Technical Support
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-sky-600">
                Digital Marketing
              </Link>
            </li>
          </ul>
        </div>
        </div>
       

        <div className="flex flex-col items-center md:items-start lg:items-start mt-6">
          <h4 className="text-lg md:text-2xl text-sky-600 font-semibold mb-4">Contact</h4>
          <ul className="space-y-6">
            <li>
              <a
                href="https://maps.app.goo.gl/LzA7UEAJsRvzVqQ67"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-600 flex gap-2 items-center"
              >
               <FaMapMarkerAlt className="text-2xl"/> 8-3-231/A 77 & 78, SRI KRISHNA NAGAR, YOUSUFGUDA, HYDERABAD-500045
              </a>
            </li>
            <li>
              <a href="tel:+91 9505637481" className="hover:text-sky-600 flex gap-2 items-center">
              <FaPhoneAlt className="text-lg"/>

              +91 9505637481
              </a>
            </li>
            <li>
              <a href="info@omniebeeglobalsolutions.com" className="hover:text-sky-600 flex gap-2 items-center">
                <FaEnvelope className="text-lg  "/>
              info@omniebeeglobalsolutions.com
              </a>
            </li>
          </ul>
        </div>
      </div>

     
    </footer>
  );
};

export default Footer;
