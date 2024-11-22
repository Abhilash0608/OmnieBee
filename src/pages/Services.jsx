import { IoIosCheckmarkCircle } from "react-icons/io";
import { ServicesDetails } from "../utils/common";

const Services = ({ currentService }) => {
    let serviceToRender = ServicesDetails[currentService];

    return (
        <div className="p-4 max-w-4xl mx-auto my-12" style={{maxWidth:'1140px'}}>
            {/* Title One */}
            <h1 className="text-blue-500 text-xl font-semibold mb-4">
                {serviceToRender.titleOne}
            </h1>

            {/* Description One */}
            <div className="space-y-6">
                {serviceToRender.descriptionOne.map((desc, index) => (
                    <p key={index} className="text-gray-700">
                        {desc}
                    </p>
                ))}
            </div>

            {/* Margin before Title Two */}
            <div className="mt-8">
                {/* Title Two */}
                <h2 className="text-blue-500 text-lg font-semibold mb-4">
                    {serviceToRender.titleTwo}
                </h2>

                {/* Description Two with Icons */}
                <div className="space-y-4">
                    {serviceToRender.descriptionTwo.map((desc, index) => (
                        <div key={index} className="flex items-start space-x-2">
                            <IoIosCheckmarkCircle className="text-blue-500 mt-1 text-2xl" />
                            <p className="text-gray-700">{desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
