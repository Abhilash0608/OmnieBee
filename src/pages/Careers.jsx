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
        <main className="flex flex-col w-full  mx-auto bg-zinc-100 px-6 py-4 " style={{ maxWidth: '1140px' }}>
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
            </article>
            <Contact />
        </main>
    );
};

export default Careers;
