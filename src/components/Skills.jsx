import { motion } from "framer-motion";
import { Skills as SkillsList } from "../constants/Skills";

const Skills = () => {
    return (
        <section className="sm:px-8 py-[80px] overflow-hidden" id="skills">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex gap-4 items-center"
            >
                <h3 className="text-textWhite text-3xl sm:text-5xl font-[800]">
                    Skills
                </h3>
                <div className="min-w-0 flex-grow mt-2 h-[4px] bg-textWhite"></div>
            </motion.div>
            <div className="mt-8 pl-4 max-w-[100%] flex flex-wrap gap-x-10 gap-y-8">
                {SkillsList.map((skillCategory, i) => (
                    <div key={i} className="w-full">
                        <h3 className="text-xl font-semibold mb-4">{skillCategory.category}</h3>
                        <div className="flex flex-wrap gap-8">
                            {skillCategory.items.map((skill, j) => (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1 }}
                                    key={j}
                                    className="group relative hover:-translate-y-[4px] transition-all duration-500 ease-in-out cursor-pointer"
                                >
                                    <skill.icon
                                        className="w-12 h-12"
                                        style={{ color: skill.color }}
                                    />
                                    <span className="group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity bg-gray-800 text-sm text-textWhite rounded-md absolute left-1/2 -translate-x-1/2 translate-y-1/2 -mt-1 opacity-0 mx-auto px-2 w-max">
                                        {skill.description}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills; 