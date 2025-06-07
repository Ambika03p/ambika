import { motion } from "framer-motion";
import { HiOutlineExternalLink } from "react-icons/hi";

const Achievements = () => {
    return (
        <section className="sm:px-8 py-[80px] overflow-hidden" id="achievements">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex gap-4 items-center"
            >
                <h3 className="text-textWhite text-3xl sm:text-5xl font-[800]">
                    Achievements
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
                        <h5 className="text-2xl font-[600] flex items-center gap-3">
                            Pixel Wizard – Web Development Showdown
                            <a 
                                href="https://unstop.com/certificate-preview/e6c42ed0-14e2-4d1f-a6ad-3bab09bc17d5"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:text-blue-300 transition-colors"
                            >
                                <HiOutlineExternalLink className="w-6 h-6" />
                            </a>
                        </h5>
                        <div className="mt-2 flex gap-4 items-center">
                            <div className="w-[15px] h-[2px] bg-textWhite"></div>
                            <span>
                                <p>Successfully participated in the web development competition</p>
                            </span>
                        </div>
                    </motion.li>
                    <motion.li
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <h5 className="text-2xl font-[600] flex items-center gap-3">
                            Flipkart GRiD 6.0 - Software Development Track
                            <a 
                                href="https://unstop.com/certificate-preview/420597df-7d60-4911-905e-48fc205ec771"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:text-blue-300 transition-colors"
                            >
                                <HiOutlineExternalLink className="w-6 h-6" />
                            </a>
                        </h5>
                        <div className="mt-2 flex gap-4 items-center">
                            <div className="w-[15px] h-[2px] bg-textWhite"></div>
                            <span>
                                <p>Participated in Flipkart's flagship engineering campus challenge</p>
                            </span>
                        </div>
                    </motion.li>
                    <motion.li
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <h5 className="text-2xl font-[600] flex items-center gap-3">
                            ACCENTURE Pseudocode Workshop
                            <a 
                                href="https://unstop.com/certificate-preview/ec38cae9-fd59-4575-9126-7779c54c6128"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:text-blue-300 transition-colors"
                            >
                                <HiOutlineExternalLink className="w-6 h-6" />
                            </a>
                        </h5>
                        <div className="mt-2 flex gap-4 items-center">
                            <div className="w-[15px] h-[2px] bg-textWhite"></div>
                            <span>
                                <p>Completed Engiverse Workshops on Pseudocode Questions</p>
                            </span>
                        </div>
                    </motion.li>
                    <motion.li
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <h5 className="text-2xl font-[600]">
                            Open Source Contributor
                        </h5>
                        <div className="mt-2 flex gap-4 items-center">
                            <div className="w-[15px] h-[2px] bg-textWhite"></div>
                            <span>
                                <p>Contributed to open-source projects including GSSoC and Chit-Chat</p>
                            </span>
                        </div>
                    </motion.li>
                    <motion.li
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <h5 className="text-2xl font-[600]">
                            Campus Ambassador
                        </h5>
                        <div className="mt-2 flex gap-4 items-center">
                            <div className="w-[15px] h-[2px] bg-textWhite"></div>
                            <span>
                                <p>Successfully promoted internships and training programs through targeted campus outreach. Organized and facilitated online technical events and learning sessions to enhance student engagement and learning.</p>
                            </span>
                        </div>
                    </motion.li>
                </ul>
            </div>
        </section>
    );
};

export default Achievements; 