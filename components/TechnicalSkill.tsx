"use client";

import { BiLogoTypescript } from "react-icons/bi";
import { FaCode, FaGithub, FaLaptopCode, FaReact } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { motion } from "motion/react"
import { IoLogoNodejs } from "react-icons/io5";
import { SiExpress, SiFirebase, SiRedux } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";

const TechnicalSkill = () => {
    return (
        <div className="-mt-px bg-[#161E2D] lg:h-150 flex flex-col justify-center items-center">
            <div className=" max-w-6xl font-roboto">
                <h2 className="text-5xl py-10 text-center text-[#7F22FE] font-bold">Technical Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
                    <motion.div
                        initial={{
                            y: 0
                        }}
                        whileHover={{
                            y: -8,
                            boxShadow: "0px 5px 15px #2D0A5E"
                        }}
                        transition={{
                            duration: 0.3
                        }}
                        className="border rounded-2xl border-[#575757]  bg-linear-to-r from-[#1e2838] via-[#131a24] to-[#141b25] p-5">
                        {/* Add your technical skills content here */}
                        <div className="flex items-center text-white">
                            <div className="flex items-center gap-4">
                                <div className="bg-[#7F22FE] p-2 rounded-full">
                                    <FaCode className="text-4xl" />
                                </div>
                                <p className="text-2xl">Frontend</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-4 my-5">
                            <motion.div
                                whileHover={{
                                    scale: 1.1
                                }}
                                className="flex flex-col items-center gap-2">
                                <div className="flex items-center text-white bg-[#275866] border-2 border-[#5ED3F3] text-4xl p-3 rounded-2xl">
                                    <FaReact />
                                </div>
                                <p className="text-[#e6e5e5]">React</p>
                            </motion.div>
                            <motion.div
                                whileHover={{
                                    scale: 1.1
                                }}
                                className="flex flex-col items-center gap-2">
                                <div className="flex items-center text-white bg-[#3a3a3a] border-2 border-[#eeeeeee8] text-4xl p-3 rounded-2xl">
                                    <RiNextjsFill />
                                </div>
                                <p className="text-[#e6e5e5]">Next.js</p>
                            </motion.div>
                            <motion.div
                                whileHover={{
                                    scale: 1.1
                                }}
                                className="flex flex-col items-center gap-2">
                                <div className="flex items-center text-white bg-[#15365a] border-2 border-[#2F74C0] text-4xl p-3 rounded-2xl">
                                    <BiLogoTypescript />
                                </div>
                                <p className="text-[#e6e5e5]">TypeScript</p>
                            </motion.div>
                            <motion.div
                                whileHover={{
                                    scale: 1.1
                                }}
                                className="flex flex-col items-center gap-2">
                                <div className="flex items-center text-white bg-[#005661] border-2 border-[#00A7BC] text-4xl p-3 rounded-2xl">
                                    <RiTailwindCssFill />
                                </div>
                                <p className="text-[#e6e5e5]">Tailwind</p>
                            </motion.div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{
                            y: 0
                        }}
                        whileHover={{
                            y: -8,
                            boxShadow: "0px 5px 15px #2D0A5E"
                        }}
                        transition={{
                            duration: 0.3
                        }}
                        className="border rounded-2xl border-[#575757]  bg-linear-to-r from-[#1e2838] via-[#131a24] to-[#141b25] p-5">
                        {/* Add your technical skills content here */}
                        <div className="flex items-center text-white">
                            <div className="flex items-center gap-4">
                                <div className="bg-[#7F22FE] p-2 rounded-full">
                                    <FaCode className="text-4xl" />
                                </div>
                                <p className="text-2xl">Backend</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-4 my-5">
                            <motion.div
                                whileHover={{
                                    scale: 1.1
                                }}
                                className="flex flex-col items-center gap-2">
                                <div className="flex items-center text-white bg-[#21331c] border-2 border-[#6FA661] text-4xl p-3 rounded-2xl">
                                    <IoLogoNodejs />
                                </div>
                                <p className="text-[#e6e5e5]">Node.js</p>
                            </motion.div>
                            <motion.div
                                whileHover={{
                                    scale: 1.1
                                }}
                                className="flex flex-col items-center gap-2">
                                <div className="flex items-center text-white bg-[#3a3a3a] border-2 border-[#eeeeeee8] text-4xl p-3 rounded-2xl">
                                    <SiExpress />
                                </div>
                                <p className="text-[#e6e5e5]">Express.js</p>
                            </motion.div>
                            <motion.div
                                whileHover={{
                                    scale: 1.1
                                }}
                                className="flex flex-col items-center gap-2">
                                <div className="flex items-center text-white bg-[#05381a] border-2 border-[#10A54D] text-4xl p-3 rounded-2xl">
                                    <DiMongodb />
                                </div>
                                <p className="text-[#e6e5e5]">MongoDB</p>
                            </motion.div>
                            <motion.div
                                whileHover={{
                                    scale: 1.1
                                }}
                                className="flex flex-col items-center gap-2">
                                <div className="flex items-center text-white bg-[#005661] border-2 border-[#00A7BC] text-4xl p-3 rounded-2xl">
                                    <FaLaptopCode />
                                </div>
                                <p className="text-[#e6e5e5]">REST APIs</p>
                            </motion.div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{
                            y: 0
                        }}
                        whileHover={{
                            y: -8,
                            boxShadow: "0px 5px 15px #2D0A5E"
                        }}
                        transition={{
                            duration: 0.3
                        }}
                        className="border rounded-2xl border-[#575757]  bg-linear-to-r from-[#1e2838] via-[#131a24] to-[#141b25] p-5">
                        {/* Add your technical skills content here */}
                        <div className="flex items-center text-white">
                            <div className="flex items-center gap-4">
                                <div className="bg-[#7F22FE] p-2 rounded-full">
                                    <FaCode className="text-4xl" />
                                </div>
                                <p className="text-2xl">Technologies & Tools</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-4 my-5">
                            <motion.div
                                whileHover={{
                                    scale: 1.1
                                }}
                                className="flex flex-col items-center gap-2">
                                <div className="flex items-center text-white bg-[#072438] border-2 border-[#1E97E8] text-4xl p-3 rounded-2xl">
                                    <VscVscode />
                                </div>
                                <p className="text-[#e6e5e5]">VS Code</p>
                            </motion.div>
                            <motion.div
                                whileHover={{
                                    scale: 1.1
                                }}
                                className="flex flex-col items-center gap-2">
                                <div className="flex items-center text-white bg-[#3a3d41] border-2 border-[#1A1E22] text-4xl p-3 rounded-2xl">
                                    <FaGithub />
                                </div>
                                <p className="text-[#e6e5e5]">GitHub</p>
                            </motion.div>
                            <motion.div
                                whileHover={{
                                    scale: 1.1
                                }}
                                className="flex flex-col items-center gap-2">
                                <div className="flex items-center text-white bg-[#502e01] border-2 border-[#F78C00] text-4xl p-3 rounded-2xl">
                                    <SiFirebase />
                                </div>
                                <p className="text-[#e6e5e5]">Firebase</p>
                            </motion.div>
                            <motion.div
                                whileHover={{
                                    scale: 1.1
                                }}
                                className="flex flex-col items-center gap-2">
                                <div className="flex items-center text-white bg-[#25173b] border-2 border-[#7248B5] text-4xl p-3 rounded-2xl">
                                    <SiRedux />
                                </div>
                                <p className="text-[#e6e5e5]">Redux</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default TechnicalSkill;