"use client"

import Image from "next/image";
import { motion } from "motion/react"
import Link from "next/link";

const Projects = () => {
    return (
        <div id="projects" className="-mt-px relative overflow-hidden bg-[#0D1317] dark:bg-white  flex flex-col justify-center items-center">
            <div className="lg:h-200 max-w-6xl font-rubik py-5 relative z-20">
                <motion.div
                    initial={{
                        y: -50,
                        opacity: 0
                    }}
                    whileInView={{
                        y: 0,
                        opacity: 1
                    }}
                    transition={{
                        duration: 0.5,
                        delay: 0.5
                    }}
                    className="flex items-center gap-2 text-xl py-14">
                    <p className="w-14 border-2 border-[#6532FF]" />
                    <p className="text-white dark:text-[#000000bb]">Projects</p>
                    <p className="w-14 border-2 border-[#6532FF]" />
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5">
                    <motion.div
                        initial={{
                            y: -50,
                            opacity: 0
                        }}
                        whileInView={{
                            y: 0,
                            opacity: 1
                        }}
                        transition={{
                            duration: 0.5,
                            delay: 0.6
                        }}
                    >
                        <motion.div
                            whileHover={{
                                scale: 1.02,
                                boxShadow: "0px 10px 20px #512EB9",
                            }}
                            transition={{
                                duration: 0.2
                            }}
                            className="text-white rounded-2xl bg-[#0e141f] dark:bg-white border border-[#bbbb] shadow-lg">
                            <Image className="w-full h-52 rounded-t-2xl" src="/project/helplink.png" alt="HelpLink" width={500} height={400} />
                            <div className="px-5 my-4 space-y-3">
                                <h2 className="text-3xl text-[#dadada] dark:text-[#363d4b]">HelpLink</h2>
                                <p className="text-[#b9b9b9] font-medium dark:text-[#4c566a]">A digital relief platform built with MERN stack to bridge the gap between donors and underprivileged communities during disasters in Bangladesh.</p>
                                <div className="flex flex-wrap gap-3">
                                    <div className="text-[#d4d3d3] dark:text-[#354461] bg-[#452d8d] dark:bg-[rgb(205,189,255)]  px-2 py-1 rounded-xl">
                                        <p className="font-medium text-[15px]">Next.js</p>
                                    </div>
                                    <div className="text-[#d4d3d3] dark:text-[#354461] bg-[#452d8d] dark:bg-[rgb(205,189,255)]  px-2 py-1 rounded-xl">
                                        <p className="font-medium text-[15px]">TypeScript</p>
                                    </div>
                                    <div className="text-[#d4d3d3] dark:text-[#354461] bg-[#452d8d] dark:bg-[rgb(205,189,255)]  px-2 py-1 rounded-xl">
                                        <p className="font-medium text-[15px]">Tailwind CSS</p>
                                    </div>
                                    <div className="text-[#d4d3d3] dark:text-[#354461] bg-[#452d8d] dark:bg-[rgb(205,189,255)]  px-2 py-1 rounded-xl">
                                        <p className="font-medium text-[15px]">Node.js</p>
                                    </div>
                                    <div className="text-[#d4d3d3] dark:text-[#354461] bg-[#452d8d] dark:bg-[rgb(205,189,255)]  px-2 py-1 rounded-xl">
                                        <p className="font-medium text-[15px]">Express.js</p>
                                    </div>
                                    <div className="text-[#d4d3d3] dark:text-[#354461] bg-[#452d8d] dark:bg-[rgb(205,189,255)]  px-2 py-1 rounded-xl">
                                        <p className="font-medium text-[15px]">MongoDB.js</p>
                                    </div>
                                </div>
                                <Link href="/projects/1">
                                    <motion.button
                                        whileHover={{
                                            scale: 1.05,
                                            boxShadow: "0px 5px 30px #4e27c2",
                                            cursor: "pointer"
                                        }}
                                        transition={{
                                            duration: 0.2
                                        }}
                                        className='bg-[#401fa1] mt-5 px-5 py-3 rounded-3xl font-semibold cursor-pointer text-[#cacaca]'>
                                        <span>Show Project</span>
                                    </motion.button>
                                </Link>
                            </div>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        initial={{
                            y: -50,
                            opacity: 0
                        }}
                        whileInView={{
                            y: 0,
                            opacity: 1
                        }}
                        transition={{
                            duration: 0.5,
                            delay: 0.7
                        }}
                    >
                        <motion.div
                            whileHover={{
                                scale: 1.02,
                                boxShadow: "0px 10px 20px #512EB9",
                            }}
                            transition={{
                                duration: 0.2
                            }}
                            className="text-white rounded-2xl bg-[#0e141f] dark:bg-white border border-[#bbbb] shadow-lg">
                            <Image className="w-full h-52 rounded-t-2xl" src="/project/adoply.png" alt="HelpLink" width={500} height={400} />
                            <div className="px-5 my-4 space-y-3">
                                <h2 className="text-3xl text-[#dadada] dark:text-[#363d4b]">Adoply</h2>
                                <p className="text-[#b9b9b9] font-medium dark:text-[#4c566a]">Adoptly is a team-based MERN stack pet adoption platform featuring smart search and filtering, secure Firebase authentication, and role-based...</p>
                                <div className="flex flex-wrap gap-3">
                                    <div className="text-[#d4d3d3] dark:text-[#354461] bg-[#452d8d] dark:bg-[rgb(205,189,255)]  px-2 py-1 rounded-xl">
                                        <p className="font-medium text-[15px]">Next.js</p>
                                    </div>
                                    <div className="text-[#d4d3d3] dark:text-[#354461] bg-[#452d8d] dark:bg-[rgb(205,189,255)]  px-2 py-1 rounded-xl">
                                        <p className="font-medium text-[15px]">Tailwind CSS</p>
                                    </div>
                                    <div className="text-[#d4d3d3] dark:text-[#354461] bg-[#452d8d] dark:bg-[rgb(205,189,255)]  px-2 py-1 rounded-xl">
                                        <p className="font-medium text-[15px]">Node.js</p>
                                    </div>
                                    <div className="text-[#d4d3d3] dark:text-[#354461] bg-[#452d8d] dark:bg-[rgb(205,189,255)]  px-2 py-1 rounded-xl">
                                        <p className="font-medium text-[15px]">Express.js</p>
                                    </div>
                                    <div className="text-[#d4d3d3] dark:text-[#354461] bg-[#452d8d] dark:bg-[rgb(205,189,255)]  px-2 py-1 rounded-xl">
                                        <p className="font-medium text-[15px]">Mongodb.js</p>
                                    </div>
                                </div>
                                <Link href="/projects/2">
                                    <motion.button
                                        whileHover={{
                                            scale: 1.05,
                                            boxShadow: "0px 5px 15px #4e27c2",
                                            cursor: "pointer"
                                        }}
                                        transition={{
                                            duration: 0.2
                                        }}
                                        className='bg-[#401fa1] px-5 py-3 mt-5 rounded-3xl font-semibold cursor-pointer text-[#cacaca]'>
                                        <span>Show Project</span>
                                    </motion.button>
                                </Link>
                            </div>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        initial={{
                            y: -50,
                            opacity: 0
                        }}
                        whileInView={{
                            y: 0,
                            opacity: 1
                        }}
                        transition={{
                            duration: 0.5,
                            delay: 0.8
                        }}
                    >
                        <motion.div
                            whileHover={{
                                scale: 1.02,
                                boxShadow: "0px 10px 20px #512EB9",
                            }}
                            transition={{
                                duration: 0.2
                            }}
                            className="text-white rounded-2xl bg-[#0e141f] dark:bg-white border border-[#bbbb] shadow-lg">
                            <Image className="w-full h-52 rounded-t-2xl" src="/project/healthcare.png" alt="HelpLink" width={500} height={400} />
                            <div className="px-5 my-4 space-y-3">
                                <h2 className="text-3xl text-[#dadada] dark:text-[#363d4b]">HealthCare</h2>
                                <p className="text-[#b9b9b9] font-medium dark:text-[#4c566a]">The Healthcare project is a patient-focused platform that enables easy online doctor appointment booking, secure payments, and access to professional...</p>
                                <div className="flex flex-wrap gap-3">
                                    <div className="text-[#d4d3d3] dark:text-[#354461] bg-[#452d8d] dark:bg-[rgb(205,189,255)]  px-2 py-1 rounded-xl">
                                        <p className="font-medium text-[15px] text-[#cacaca] dark:text-[#354461]">Next.js</p>
                                    </div>
                                    <div className="text-[#d4d3d3] dark:text-[#354461] bg-[#452d8d] dark:bg-[rgb(205,189,255)]  px-2 py-1 rounded-xl">
                                        <p className="font-medium text-[15px] text-[#cacaca] dark:text-[#354461]">Tailwind CSS</p>
                                    </div>
                                    <div className="text-[#d4d3d3] dark:text-[#354461] bg-[#452d8d] dark:bg-[rgb(205,189,255)]  px-2 py-1 rounded-xl">
                                        <p className="font-medium text-[15px] text-[#cacaca] dark:text-[#354461]">Node.js</p>
                                    </div>
                                    <div className="text-[#d4d3d3] dark:text-[#354461] bg-[#452d8d] dark:bg-[rgb(205,189,255)]  px-2 py-1 rounded-xl">
                                        <p className="font-medium text-[15px] text-[#cacaca] dark:text-[#354461]">Express.js</p>
                                    </div>
                                    <div className="text-[#d4d3d3] dark:text-[#354461] bg-[#452d8d] dark:bg-[rgb(205,189,255)]  px-2 py-1 rounded-xl">
                                        <p className="font-medium text-[15px] text-[#cacaca] dark:text-[#354461]">Mongodb.js</p>
                                    </div>
                                </div>
                                <Link href="/projects/3">
                                    <motion.button
                                        whileHover={{
                                            scale: 1.05,
                                            boxShadow: "0px 5px 15px #4e27c2",
                                            cursor: "pointer"
                                        }}
                                        transition={{
                                            duration: 0.2
                                        }}
                                        className='bg-[#401fa1] mt-5 px-5 py-3 rounded-3xl font-semibold cursor-pointer text-[#cacaca]'>
                                        <span>Show Project</span>
                                    </motion.button>
                                </Link>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
            <motion.div
                className='z-10 absolute top-0 left-10 w-60 h-50 rounded-full bg-[#6532FF] opacity-50 blur-[140px]'>
            </motion.div>
            <motion.div
                className='z-10 absolute top-50 left-[40%] w-80 h-80 rounded-full bg-[#6532FF] opacity-20 blur-[160px]'>
            </motion.div>
            <motion.div
                className='z-10 absolute -bottom-20 left-0 w-50 h-50 rounded-full bg-[#6532FF] opacity-50 blur-[140px]'>
            </motion.div>
        </div>
    );
};

export default Projects;