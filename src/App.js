import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Solutions from "./components/Solutions";
import Technologies from "./components/Techonologies";
import ServicesCards from "./components/ServicesCards";
import Careers from "./pages/Careers";
import Services from "./pages/Services";
import ExpertTechnologies from "./pages/ExpertTechnologies";
import "./index.css"; // Ensure correct path
import ContactUs from "./pages/ContactUs";
import Contact from "./components/Contact";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import About from "./components/About";
import AboutUs from "./pages/AboutUs";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Handle scroll to toggle button visibility
    const toggleVisibility = () => {
        if (window.scrollY > 200) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Scroll to top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    return (
        isVisible && (
            <button
                onClick={scrollToTop}
                className="fixed bottom-10 right-10 p-2 bg-sky-600 text-white rounded-full shadow-md hover:bg-sky-700 transition"
                aria-label="Scroll to top"
            >
                <MdOutlineKeyboardArrowUp className="text-xl md:text-5xl" />
            </button>
        )
    );
};

const Home = () => {
    return (
        <div>
            <About/>
            <ServicesCards />
            <Technologies />
            <Solutions />
            <Contact />
        </div>
    );
};

const App = () => {
    const [currentService, setCurrentService] = useState(0);

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={<Layout currentService={currentService} setCurrentService={setCurrentService} />}
                >
                    <Route index element={<Home />} />
                    <Route path="aboutus" element={<AboutUs />} />
                    <Route path="services" element={<Services setCurrentService={setCurrentService} currentService={currentService} />} />
                    <Route path="expertise" element={<ExpertTechnologies setCurrentService={setCurrentService} currentService={currentService} />} />
                    <Route path="contactus" element={<ContactUs />} />
                    <Route path="careers" element={<Careers />} />
                </Route>
            </Routes>
            <ScrollToTop />
        </Router>
    );
};

export default App;
