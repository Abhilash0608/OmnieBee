import React from "react";
import { services } from "../utils/common";

const ServicesCards = () => {
   

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-center text-3xl font-bold mb-6">Our Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service) => (
                    <div
                        key={service.id}
                        className=" flex flex-col items-center gap-2 bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300"
                    >
                        <img src={service.src} alt={service.title} height={100} width={100}/>
                        <h3 className="text-xl font-semibold mb-4 text-blue-600">
                            {service.title}
                        </h3>
                        <p className="text-gray-700">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServicesCards;
