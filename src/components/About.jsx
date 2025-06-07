import { useState, useTransition, useRef, Suspense, useEffect } from "react";
import TabbedComponent from "./TabbedComponent";
import { Skills, Certifications } from "../constants/Skills";
import { motion, useInView } from "framer-motion";
import { HiOutlineExternalLink } from "react-icons/hi";
import Loading from "./Loading";

const About = () => {
    const [tab, setTab] = useState("education");
    const [isPending, startTransition] = useTransition();
    const refHeading = useRef(null);
    const refContent = useRef(null);
    const inViewHeading = useInView(refHeading);
    const inViewContent = useInView(refContent, { once: true });

    useEffect(() => {
        const hash = window.location.hash;
        if (hash === "#experience") {
            selectTab("work");
        } else if (hash === "#certifications") {
            selectTab("certifications");
        } else if (hash === "#achievements") {
            selectTab("achievements");
        }
    }, []);

    function selectTab(nextTab) {
        startTransition(() => {
            setTab(nextTab);
        });
    }
    const variants1 = {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
    };

    return (
        <>
            <section className="sm:px-8 py-[80px] overflow-hidden" id="about">
            <motion.div
                ref={refHeading}
                variants={variants1}
                initial="initial"
                animate={inViewHeading ? "animate" : "initial"}
                transition={{ duration: 0.6 }}
                className="flex gap-4 items-center"
            >
                <h3 className="text-textWhite text-3xl sm:text-5xl font-[800]">
                    About Me
                </h3>
                <div className="min-w-0 flex-grow mt-2 h-[4px] bg-textWhite"></div>
            </motion.div>
            <div className="py-6 flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
                <motion.div
                    ref={refContent}
                    initial={{
                        opacity: 0,
                        x: -100,
                        scale: 0.8,
                        filter: "blur(6px)",
                    }}
                    animate={
                        inViewContent
                            ? {
                                  opacity: 1,
                                  x: 0,
                                  scale: 1,
                                  filter: "blur(0px)",
                              }
                            : { opacity: 1, x: -100, scale: 0.8 }
                    }
                    transition={{ duration: 0.8 }}
                    className="flex-1 md:max-w-[40%] sm:mt-10 "
                >
                    <Suspense fallback={<Loading />}>
                        <img
                            src="/images/about.png"
                            alt="meme"
                            loading="lazy"
                                className="w-[300px] h-[300px] md:w-[400px] md:h-[500px] "
                        />
                    </Suspense>
                </motion.div>
                <motion.div
                    ref={refContent}
                    initial={{ opacity: 0, x: 100, scale: 0.8 }}
                    animate={
                        inViewContent
                            ? { opacity: 1, x: 0, scale: 1 }
                            : { opacity: 0, x: 100, scale: 0.8 }
                    }
                    transition={{ duration: 0.8 }}
                    className="flex-1"
                >
                    <p className="text-textWhite p-4 text-lg sm:text-xl sm:leading-7">
                        I am a passionate Full Stack Developer with a creative mindset,
                        dedicated to building innovative and user-friendly web applications
                        that make a positive impact.
                        <br />
                        I have experience working with modern web technologies including
                        JavaScript, React.js, Node.js, HTML, CSS, and various frontend
                        frameworks. I love creating beautiful, responsive user interfaces
                        and robust backend solutions.
                        <br />
                        I am enthusiastic about learning new technologies and constantly
                        improving my skills to deliver the best possible solutions.
                    </p>

                    <div className="flex flex-row justify-start gap-6 pl-4 flex-wrap">
                        <TabbedComponent
                            selectTab={() => selectTab("education")}
                            active={tab === "education"}
                        >
                            Education
                        </TabbedComponent>
                        <TabbedComponent
                            selectTab={() => selectTab("achievements")}
                            active={tab === "achievements"}
                        >
                            Achievements
                        </TabbedComponent>
                    </div>
                    <div className="mt-8 pl-4 max-w-[100%] min-h-[140px] flex flex-wrap gap-x-10 gap-y-8">
                            {tab === "education" ? (
                                <ul className="list-disc pl-2">
                                    <motion.li
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1 }}
                                >
                                    <h5 className="text-2xl font-[600]">
                                        IK Gujral Punjab Technical University, Punjab
                                    </h5>
                                    <div className="mt-2 flex gap-4 items-center">
                                        <div className="w-[15px] h-[2px] bg-textWhite "></div>
                                        <span>
                                            <p>
                                                Bachelor of Technology in Computer Science & Engineering
                                            </p>
                                            <span>Sep 2022 - June 2025</span>
                                        </span>
                                    </div>
                                </motion.li>
                                <motion.li
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1 }}
                                >
                                    <h5 className="text-2xl font-[600]">
                                        Govt. Polytechnic College for Girls, Punjab
                                    </h5>
                                    <div className="mt-2 flex gap-4 items-center">
                                        <div className="w-[15px] h-[2px] bg-textWhite "></div>
                                        <span>
                                            <p>
                                                Diploma in Computer Science & Engineering
                                            </p>
                                            <span>Sep 2020 - June 2022</span>
                                        </span>
                                    </div>
                                </motion.li>
                            </ul>
                            ) : tab === "achievements" ? (
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
                        ) : null}
                    </div>
                </motion.div>
            </div>
        </section>
        </>
    );
};

export default About;
