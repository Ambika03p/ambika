import { motion } from "framer-motion";

const Experience = () => {
    return (
        <section className="sm:px-8 py-[80px] overflow-hidden" id="experience">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex gap-4 items-center"
            >
                <h3 className="text-textWhite text-3xl sm:text-5xl font-[800]">
                    Experience
                </h3>
                <div className="min-w-0 flex-grow mt-2 h-[4px] bg-textWhite"></div>
            </motion.div>
            <div className="mt-8">
                <ul className="list-disc pl-2 flex flex-col gap-4">
                    <motion.li
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <div className="flex justify-between items-start">
                            <div className="flex-grow">
                                <h5 className="text-2xl font-[600]">
                                    MERN Stack Developer Trainee{" "}
                                    <span className="text-base font-[500]">
                                        - O7 Services
                                    </span>
                                </h5>
                                <div className="mt-2 flex gap-4 items-center">
                                    <div className="w-[15px] h-[2px] bg-textWhite"></div>
                                    <span>
                                        <p>
                                            • Assisted in building full-stack web apps using MongoDB, Express, React, and Node.js<br/>
                                            • Collaborated on front-end development and RESTful API development<br/>
                                            • Participated in debugging, testing, and code reviews and gained experience with Git version control<br/>
                                            • Improved skills in database management, and server-side logic
                                        </p>
                                    </span>
                                </div>
                            </div>
                            <div className="text-right text-gray-500 font-medium min-w-[200px] pl-4">
                                <div>Jan 2025 - June 2025</div>
                                <div>Punjab</div>
                            </div>
                        </div>
                    </motion.li>
                    <motion.li
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <div className="flex justify-between items-start">
                            <div className="flex-grow">
                                <h5 className="text-2xl font-[600]">
                                    React.js Developer{" "}
                                    <span className="text-base font-[500]">
                                        - Talentrise Technocrate
                                    </span>
                                </h5>
                                <div className="mt-2 flex gap-4 items-center">
                                    <div className="w-[15px] h-[2px] bg-textWhite"></div>
                                    <span>
                                        <p>
                                            • Created responsive frontend interfaces using HTML, CSS, and JavaScript, developed fully responsive UIs<br/>
                                            • Collaborated with developers to enhance UI/UX, leading to a 15% reduction in user drop-off rates
                                        </p>
                                    </span>
                                </div>
                            </div>
                            <div className="text-right text-gray-500 font-medium min-w-[200px] pl-4">
                                <div>May 2023</div>
                                <div>Punjab</div>
                            </div>
                        </div>
                    </motion.li>
                </ul>
            </div>
        </section>
    );
};

export default Experience; 