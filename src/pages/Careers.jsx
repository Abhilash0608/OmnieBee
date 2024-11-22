const Careers = () => {
    return (
        <div className="flex flex-col h-screen w-full m-auto p-4" style={{maxWidth:"1140px"}}>
            <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold text-blue-500 mb-4">CAREERS</h1>
            <h4 className="text-xl font-semibold  mb-4">Great Work Starts With Great People</h4>
            </div>

            <h3 className="text-lg font-bold text-blue-500 mb-2">React Developer – Intern</h3>
            <p className="text-gray-700 mb-4">
            "We are looking for a motivated React Developer Intern who has a good understanding of React.js and its core principles. The intern will assist in building and maintaining user interfaces, working with APIs, and collaborating with senior developers to deliver high-quality code. Strong communication skills, a passion for learning, and the ability to work both independently and in a team are essential for this role."</p>
            <h4 className="text-lg font-semibold text-blue-500 mb-2">Minimum Qualifications:</h4>
            <ul className="list-disc pl-5 text-gray-700 mb-4">
                <li>BCA / B.E./ B.Tech / MCA / M.Tech or Equivalent</li>
                <li>Excellent written and verbal communication skills</li>
            </ul>
            <p className="">Note: Send your updated resume to <a href="mailto:info@resourceone.in" className="text-blue-500">info@omniebee.in</a></p>
        </div>
    );
};

export default Careers;