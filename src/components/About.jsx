import React,{useState} from "react";
import { motion } from "framer-motion";
import aboutuss from "../assets/aboutuss.png";
import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };
    // Framer Motion Variants
    const textVariant = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeInOut" },
        },
    };

    const buttonVariant = {
        initial: { width: "150px" },
        hover: { width: "180px", transition: { duration: 0.3, ease: "easeInOut" } },
    };

    return (
        <main className="flex flex-col md:flex-row items-center max-w-[90vw] mx-auto  px-6 py-12  gap-8">
            {/* Left Section: Image */}
            <div className="flex-1">
                <img
                    src={aboutuss}
                    alt="About Us"
                    className="w-full h-auto object-cover rounded-lg"
                />
            </div>

            {/* Right Section: Text */}
            <motion.div
                className="flex-1 flex flex-col  justify-center items-center space-y-6"
                initial="hidden"
                animate="visible"
                variants={textVariant}
            >
                <h1 className="text-3xl md:text-3xl lg:text-4xl text-center font-bold text-sky-600">
                    About Us
                </h1>
                <p className="text-gray-600 md:w-4/5 ld:4/5 w-full text-center text-lg md:text-xl lg:text-xl   leading-relaxed">
                    At Omnie Bee Solutions, we
                    specialize in providing industry-relevant internships in MERN and
                    MEAN stack technologies. Our goal is to empower aspiring developers
                    with hands-on experience, ensuring they are well-equipped to excel in
                    the ever-evolving tech landscape.
                </p>
                <p className="text-gray-600 md:w-4/5 lg:4/5 w-full text-center text-lg md:text-xl lg:text-xl leading-relaxed">
                    Our structured programs are designed to bridge the gap between
                    academia and industry demands. With expert mentors and real-world
                    projects, we focus on nurturing practical skills and technical
                    excellence.
                </p>
                
                <motion.button
                    className="px-6 py-2 text-lg md:text-xl lg:text-xl bg-sky-600 text-white font-semibold rounded-md shadow-md hover:shadow-lg"
                    onClick={() => navigate("/aboutus")}
                    initial="initial"
                    whileHover="hover"
                    variants={buttonVariant}
                >
                    Explore
                </motion.button>
            </motion.div>
        </main>
    );
};

export default About;
