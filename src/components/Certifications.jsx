import { motion } from "framer-motion";
import { HiOutlineExternalLink } from "react-icons/hi";
import { Certifications as CertificationsList } from "../constants/Skills";

const Certifications = () => {
    return (
        <section className="sm:px-8 py-[80px] overflow-hidden" id="certifications">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex gap-4 items-center"
            >
                <h3 className="text-textWhite text-3xl sm:text-5xl font-[800]">
                    Certifications
                </h3>
                <div className="min-w-0 flex-grow mt-2 h-[4px] bg-textWhite"></div>
            </motion.div>
            <div className="mt-8">
                <ul className="list-disc pl-2 flex flex-col gap-4">
                    {CertificationsList.map((cert, i) => (
                        <motion.li
                            key={i}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <h5 className="text-2xl font-[600] flex items-center gap-3">
                                {cert.title}
                                {cert.link && (
                                    <a 
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-400 hover:text-blue-300 transition-colors"
                                    >
                                        <HiOutlineExternalLink className="w-6 h-6" />
                                    </a>
                                )}
                            </h5>
                            <div className="mt-2 flex gap-4 items-center">
                                <div className="w-[15px] h-[2px] bg-textWhite"></div>
                                <span>
                                    <p>Issued by {cert.issuer}</p>
                                    <span>{cert.date}</span>
                                </span>
                            </div>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Certifications; 