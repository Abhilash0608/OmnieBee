import { useEffect } from 'react';
import { motion } from 'framer-motion';

const Careers = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page
    }, []);

    const lineVariant = {
        hidden: { opacity: 0, y: 10 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2, // Delay each line by 0.2s
                duration: 0.6,
                ease: 'easeInOut',
            },
        }),
    };

    return (
        <div className="flex flex-col w-full m-auto p-4" style={{ maxWidth: '1140px' }}>
            {/* Page Title */}
            <motion.div
                className="flex flex-col justify-center items-center"
                initial="hidden"
                animate="visible"
                variants={lineVariant}
                custom={0}
            >
                <motion.h1
                    className="text-3xl font-bold text-blue-500 mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                >
                    CAREERS
                </motion.h1>
                <motion.h4
                    className="text-xl font-semibold mb-4"
                    variants={lineVariant}
                    custom={1}
                >
                    Great Work Starts With Great People
                </motion.h4>
            </motion.div>

            {/* Job Title */}
            <motion.h3
                className="text-lg font-bold text-blue-500 mb-2"
                variants={lineVariant}
                custom={2}
            >
                React Developer – Intern
            </motion.h3>

            {/* Job Description */}
            <motion.p
                className="text-gray-700 mb-4"
                variants={lineVariant}
                custom={3}
            >
                "We are looking for a motivated React Developer Intern who has a good understanding of React.js and its core principles. The intern will assist in building and maintaining user interfaces, working with APIs, and collaborating with senior developers to deliver high-quality code. Strong communication skills, a passion for learning, and the ability to work both independently and in a team are essential for this role."
            </motion.p>

            {/* Qualifications */}
            <motion.h4
                className="text-lg font-semibold text-blue-500 mb-2"
                variants={lineVariant}
                custom={4}
            >
                Minimum Qualifications:
            </motion.h4>
            <motion.ul
                className="list-disc pl-5 text-gray-700 mb-4"
                initial="hidden"
                animate="visible"
            >
                {[
                    'BCA / B.E./ B.Tech / MCA / M.Tech or Equivalent',
                    'Excellent written and verbal communication skills',
                ].map((item, index) => (
                    <motion.li key={index} variants={lineVariant} custom={5 + index}>
                        {item}
                    </motion.li>
                ))}
            </motion.ul>

            {/* Note */}
            <motion.p
                className="text-gray-700"
                variants={lineVariant}
                custom={7}
            >
                Note: Send your updated resume to{' '}
                <a href="mailto:info@omniebeeglobalsolutions.com" className="text-blue-500">
                    info@omniebeeglobalsolutions.com
                </a>
            </motion.p>
        </div>
    );
};

export default Careers;
