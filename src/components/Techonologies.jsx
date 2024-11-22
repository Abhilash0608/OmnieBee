import React from "react";
import { images } from "../utils/common";



const Technologies = () => {
  return (
    <div className="w-full px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-4">Technologies</h2>
      <p className="text-center text-gray-600 mb-8">
        Finding reliable Business Solutions using trend-setting technologies.
      </p>
      <div className="grid gap-2  place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 px-5">
        {images.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-2 max-w-[60%] bg-gray-100 rounded-md shadow hover:shadow-lg mt-2 transition"
          >
            <img src={item.src} alt={item.alt} />
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default Technologies;
