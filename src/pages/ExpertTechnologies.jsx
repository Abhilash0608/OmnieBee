import { IoIosCheckmarkCircle } from "react-icons/io";
import { expertiseDetails } from "../utils/common";

const ExpertTechnologies = ({ currentService }) => {
    let technologyToRender = expertiseDetails[currentService];

    return (
        <div className="p-4 max-w-4xl mx-auto my-12" style={{maxWidth:'1140px'}}>
           

            <div className="mt-8 ">
                {/* Title Two */}
                <h2 className="text-blue-500 text-lg font-semibold  mb-4">
                    {technologyToRender.title}
                </h2>

                {/* Description Two with Icons */}
                <div className="space-y-4">
                    {technologyToRender.descriptions.map((desc, index) => (
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

export default ExpertTechnologies;
