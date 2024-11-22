import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactUs = () => {
    return (
        <div className="container  mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Grid: Form */}
            <div className="bg-white p-6 rounded-lg shadow-md">
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
            </div>

            {/* Right Grid: Contact Info */}
            <div className="bg-gray-100 p-6 flex flex-col justify-center items-center rounded-lg shadow-md space-y-6">
                <div className="flex items-center space-x-4">
                    <FaMapMarkerAlt className="text-blue-600 text-xl" />
                    <div>
                        <h3 className="font-bold">Address</h3>
                        <p className="text-gray-700">123 Main Street, City, Country</p>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <FaPhoneAlt className="text-blue-600 text-xl" />
                    <div>
                        <h3 className="font-bold">Phone</h3>
                        <p className="text-gray-700">+123 456 7890</p>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <FaEnvelope className="text-blue-600 text-xl" />
                    <div>
                        <h3 className="font-bold">Email</h3>
                        <p className="text-gray-700">contact@example.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
