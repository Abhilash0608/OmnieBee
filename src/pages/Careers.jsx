import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Contact from '../components/Contact';
import data from '../app.json'; // Import the JSON data

const Careers = () => {
    const {
        pageTitle,
        metaDescription,
        header: { title, subtitle },
        jobDetails: { title: jobTitle, description, minimumQualifications, note },
    } = data.careers;

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
        document.title = pageTitle; // Update page title
        document
            .querySelector('meta[name="description"]')
            ?.setAttribute('content', metaDescription); // Update meta description
    }, [pageTitle, metaDescription]);

    const lineVariant = {
        hidden: { opacity: 0, y: 10 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.6,
                ease: 'easeInOut',
            },
        }),
    };

    return (
        <main className="flex flex-col w-full  mx-auto bg-zinc-100 px-6 py-4  max-w-[90vw] md:l\" >
            <header>
                {/* Page Title */}
                <motion.div
                    className="flex flex-col justify-center items-center"
                    initial="hidden"
                    animate="visible"
                    variants={lineVariant}
                    custom={0}
                >
                    <motion.h1
                        className="text-3xl font-bold text-sky-600 mb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, ease: 'easeInOut' }}
                    >
                        {title}
                    </motion.h1>
                    <motion.h4
                        className="text-xl font-semibold mb-4"
                        variants={lineVariant}
                        custom={1}
                    >
                        {subtitle}
                    </motion.h4>
                </motion.div>
            </header>

            <article>
                {/* Job Title */}
                <motion.h2
                    className="text-lg font-bold text-sky-600 mb-2"
                    variants={lineVariant}
                    custom={2}
                >
                    {jobTitle}
                </motion.h2>

                {/* Job Description */}
                <motion.p
                    className="text-gray-700 mb-4"
                    variants={lineVariant}
                    custom={3}
                >
                    {description}
                </motion.p>

                {/* Qualifications */}
                <motion.h3
                    className="text-lg font-semibold text-sky-600 mb-2"
                    variants={lineVariant}
                    custom={4}
                >
                    Minimum Qualifications:
                </motion.h3>
                <motion.ul
                    className="list-disc pl-5 text-gray-700 mb-4"
                    initial="hidden"
                    animate="visible"
                >
                    {minimumQualifications.map((item, index) => (
                        <motion.li key={index} variants={lineVariant} custom={5 + index}>
                            {item}
                        </motion.li>
                    ))}
                </motion.ul>

                {/* Note */}
                <motion.p
                    className="text-gray-700 mb-6"
                    variants={lineVariant}
                    custom={7}
                >
                    Note: {note}
                </motion.p>
                <div className="mt-16 w-full max-w-6xl">
                    <h2 className="text-3xl lg:text-4xl font-bold text-sky-600 mb-8 text-center">
                        Omniebee TechLeap Program
                    </h2>

                    <div className="text-gray-700 text-lg lg:text-xl space-y-4">
                        <p className='text-lg md:text-xl lg:text-xl text-gray-600'>
                            Dive into the world of cutting-edge web development with our
                            <strong> 3-Month MEAN & MERN Stack Internship Program.</strong> Designed
                            for aspiring developers, this program equips you with the skills to
                            build robust, scalable, and dynamic web applications.
                        </p>

                        <h3 className="text-2xl font-semibold">FullStack Visionaries Program</h3>
                        <ul className="text-lg md:text-xl lg:text-xl text-gray-600 list-disc list-inside space-y-2">
                            <li>Module 1: Fundamentals of Web Development</li>
                            <li>Module 2: MongoDB (Database Management)</li>
                            <li>Module 3: Express.js (Back-End Framework)</li>
                            <li>Module 4: Front-End Frameworks: Angular vs React.js</li>
                            <li>Module 5: Node.js (Runtime Environment)</li>
                            <li>Module 6: Building Real-World Projects</li>
                            <li>Module 7: Deployment and Hosting</li>
                            <li>Module 8: Career Guidance</li>
                        </ul>

                        <h3 className="text-2xl font-semibold mt-6">
                            High-Profile Companies Utilizing MEAN & MERN
                        </h3>
                        <p className='text-lg md:text-xl lg:text-xl text-gray-600'>
                            Netflix, Uber, LinkedIn, Instagram, Walmart, PayPal, NASA, Facebook
                            leverage MEAN & MERN stacks for optimized performance and scalability.
                        </p>

                        <h3 className="text-2xl font-semibold mt-6">Core Features of the Internship</h3>
                        <ul className="list-disc list-inside space-y-2">
                            <li>
                                <strong>Hands-On Training:</strong> Build real-world projects under
                                expert guidance.
                            </li>
                            <li>
                                <strong>Comprehensive Curriculum:</strong> Master both front-end and
                                back-end technologies.
                            </li>
                            <li>
                                <strong>Expert Mentorship:</strong> Learn from industry professionals
                                with years of experience.
                            </li>
                            <li>
                                <strong>Portfolio Building:</strong> Showcase your skills with live
                                project implementations.
                            </li>
                            <li>
                                <strong>Career Opportunities:</strong> Get prepared for placements in
                                high-profile tech companies.
                            </li>
                        </ul>

                        <p className="mt-4 'text-lg md:text-xl lg:text-xl text-gray-600'">
                            Outstanding candidates may receive job offers to join our company,
                            Omniebee Global Solutions.
                        </p>
                        <p>
                            <strong>Completion Benefits:</strong>
                            <ul className=" 'text-lg md:text-xl lg:text-xl text-gray-600'list-disc list-inside pl-4">
                                <li>Offer Letter</li>
                                <li>Completion Certificate</li>
                            </ul>
                        </p>
                        <p className="mt-4 'text-lg md:text-xl lg:text-xl text-gray-600'">
                            <strong>Program Duration:</strong>
                            <ul className="list-disc list-inside pl-4 'text-lg md:text-xl lg:text-xl text-gray-600'">
                                <li>2 Months Training: Dive deeper into advanced concepts.</li>
                                <li>
                                    1 Month Real-Time Project: Work on a professional project to
                                    enhance your skills.
                                </li>
                            </ul>
                        </p>
                        <p className='text-lg md:text-xl lg:text-xl text-gray-600'>
                            Flexible payment options are available to suit your budget for this
                            3-Month Program.
                        </p>
                    </div>
                </div>
            </article>
            <Contact />
        </main>
    );
};

export default Careers;
