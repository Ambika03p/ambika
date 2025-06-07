/* eslint-disable react/prop-types */
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const RightView = ({ id, name, description, img, tech, repo, demo }) => {
    const refContent = useRef(null);
    const inViewContent = useInView(refContent);
    const [isMouseOver, setIsMouseOver] = useState(false);

    const renderDescription = (desc) => {
        return desc.split('\n\n').map((point, index) => {
            const cleanPoint = point.startsWith('•') ? point.substring(1).trim() : point;
            return (
                <li key={index} className="mb-2 flex items-start">
                    <span className="text-blue-400 mr-2">▹</span>
                    <span>{cleanPoint}</span>
                </li>
            );
        });
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 md:px-10 mt-[80px] lg:mt-[120px]">
            {img && (
                <motion.div
                    ref={refContent}
                    initial={{ opacity: 0, filter: "blur(6px) brightness(50%)" }}
                    animate={
                        inViewContent
                            ? { opacity: 1, filter: "blur(0px) brightness(100%)" }
                            : { opacity: 1, filter: "blur(6px) brightness(50%)" }
                    }
                    transition={{ duration: 1 }}
                    className="col-span-7 brightness-50 hover:brightness-100 transition-all ease-in-out duration-700 hover:scale-[1.05] hover:z-20"
                    onMouseEnter={() => {
                        setIsMouseOver(true);
                    }}
                    onMouseLeave={() => {
                        setIsMouseOver(false);
                    }}
                >
                    {demo ? (
                        <a href={demo} target="_blank" rel="noreferrer">
                            <img
                                src={img}
                                alt={name || "Project screenshot"}
                                className="rounded-md min-h-full cursor-pointer shadow-slate-800 shadow-lg"
                                loading="lazy"
                            />
                        </a>
                    ) : (
                        <img
                            src={img}
                            alt={name || "Project screenshot"}
                            className="rounded-md min-h-full shadow-slate-800 shadow-lg"
                            loading="lazy"
                        />
                    )}
                </motion.div>
            )}
            <motion.div
                ref={refContent}
                initial={{ opacity: 0, x: -50 }}
                animate={
                    inViewContent
                        ? { opacity: 1, x: 0 }
                        : { opacity: 1, x: -50 }
                }
                transition={{ duration: 1 }}
                className={`${img ? 'col-span-5' : 'col-span-12'} flex flex-col w-full items-end relative`}
            >
                {/* project tagline */}
                <div
                    className={`text-3xl font-[600] w-full text-right py-2 lg:py-0 px-3 text-blue-400 ${
                        isMouseOver && "text-blue-300"
                    } transition-all ease-in-out duration-300`}
                >
                    <h3>{name}</h3>
                </div>
                {/* description */}
                <div className="w-full lg:w-[500px] rounded-lg bg-bgDark md:pl-4 md:py-2 shadow-slate-800 shadow-sm mt-1">
                    <ul
                        className={`text-md text-textLight space-y-2 ${
                            isMouseOver && "text-textPara"
                        } transition-all ease-in-out duration-300`}
                    >
                        {renderDescription(description)}
                    </ul>
                </div>
                {/* tech stack */}
                <div className="flex gap-2 md:gap-3 items-center mt-6 text-xs md:text-sm text-blue-400 flex-wrap justify-end">
                    {tech?.map((item, i) => {
                        return <span key={i} className="bg-bgDark px-2 py-1 rounded">{item}</span>;
                    })}
                </div>
                {/* links */}
                <div className="flex gap-8 items-center justify-end w-full mt-5 text-sm font-[500]">
                    {repo && (
                        <a
                            href={repo}
                            target="_blank"
                            rel="noreferrer"
                            className="flex gap-1 items-center group relative animate-bounce"
                        >
                            <GitHubIcon />
                            <span className="text-textLight text-xs px-2 opacity-0 group-hover:opacity-100 absolute top-7 -left-[120%] w-[90px]">
                                Source Code
                            </span>
                        </a>
                    )}
                    {demo && (
                        <a
                            href={demo}
                            target="_blank"
                            rel="noreferrer"
                            className="flex gap-2 items-center group relative animate-bounce"
                        >
                            <LaunchIcon />
                            <span className="text-textLight text-xs px-2 opacity-0 group-hover:opacity-100 absolute top-7 -left-1/2 w-fit">
                                Demo
                            </span>
                        </a>
                    )}
                </div>
            </motion.div>
        </div>
    );
};

export default RightView;
