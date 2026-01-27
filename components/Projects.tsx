"use client"

import Image from "next/image";
import { motion } from "motion/react"
import Link from "next/link";

const Projects = () => {
    return (
        <div id="projects" className="-mt-px bg-[#161E2D]  flex flex-col justify-center items-center">
            <div className="lg:h-200 max-w-6xl font-roboto py-5">
                <div className="py-20">
                    <h1 className="text-5xl text-center text-[#9045F8] font-bold">Projects</h1>
                    <motion.p
                        initial={{ width: 0 }}
                        whileInView={{ width: 215 }}
                        transition={{ duration: 1 }}
                        className=" m-auto border-2 mt-2 rounded-full border-[#9045F8]"></motion.p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5">
                    <motion.div
                        whileHover={{
                            scale: 1.02,
                            boxShadow: "0px 5px 30px #5A2A9C",
                        }}
                        transition={{
                            duration: 0.2
                        }}
                        className="text-white rounded-2xl bg-[#12121d] ">
                        <Image className="w-full h-52 rounded-t-2xl" src="/project/helplink.png" alt="HelpLink" width={500} height={400} />
                        <div className="px-5 my-4 space-y-3">
                            <h2 className="text-3xl text-[#dadada]">HelpLink</h2>
                            <p className="text-[#b9b9b9] font-medium">A digital relief platform built with MERN stack to bridge the gap between donors and underprivileged communities during disasters in Bangladesh.</p>
                            <div className="flex flex-wrap gap-3">
                                <div className="text-[#d8d8d8] bg-[#7036c0]  px-2 py-1 rounded-xl">
                                    <p className="font-medium text-[15px]">Next.js</p>
                                </div>
                                <div className="text-[#d8d8d8] bg-[#7036c0]  px-2 py-1 rounded-xl">
                                    <p className="font-medium text-[15px]">TypeScript</p>
                                </div>
                                <div className="text-[#d8d8d8] bg-[#7036c0]  px-2 py-1 rounded-xl">
                                    <p className="font-medium text-[15px]">Tailwind CSS</p>
                                </div>
                                <div className="text-[#d8d8d8] bg-[#7036c0]  px-2 py-1 rounded-xl">
                                    <p className="font-medium text-[15px]">Node.js</p>
                                </div>
                                <div className="text-[#d8d8d8] bg-[#7036c0]  px-2 py-1 rounded-xl">
                                    <p className="font-medium text-[15px]">Express.js</p>
                                </div>
                                <div className="text-[#d8d8d8] bg-[#7036c0]  px-2 py-1 rounded-xl">
                                    <p className="font-medium text-[15px]">MongoDB.js</p>
                                </div>
                            </div>
                            <Link href="/projects/1">
                                <motion.button
                                    whileHover={{
                                        scale: 1.05,
                                        boxShadow: "0px 5px 30px #5A2A9C",
                                        cursor: "pointer"
                                    }}
                                    transition={{
                                        duration: 0.2
                                    }}
                                    className='bg-[#7036c0] mt-5 px-5 py-3 rounded-3xl font-semibold cursor-pointer text-[#f3f3f3]'>
                                    <span>Show Project</span>
                                    <motion.span
                                        initial={{ x: 0 }}
                                        whileHover={{
                                            x: 5
                                        }}
                                        transition={{
                                            duration: 0.5,
                                        }}
                                        className='ml-2' >→</motion.span>
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>
                    <motion.div
                        whileHover={{
                            scale: 1.02,
                            boxShadow: "0px 5px 30px #411f80",
                        }}
                        transition={{
                            duration: 0.2
                        }}
                        className="text-white rounded-2xl bg-[#12121d] ">
                        <Image className="w-full h-52 rounded-t-2xl" src="/project/adoply.png" alt="HelpLink" width={500} height={400} />
                        <div className="px-5 my-4 space-y-3">
                            <h2 className="text-3xl text-[#dadada]">Adoply</h2>
                            <p className="text-[#b9b9b9] font-medium">Adoptly is a team-based MERN stack pet adoption platform featuring smart search and filtering, secure Firebase authentication, and role-based...</p>
                            <div className="flex flex-wrap gap-3">
                                <div className="text-[#cacaca] bg-[#7036c0]  px-2 py-1 rounded-xl">
                                    <p className="font-medium text-[15px]">Next.js</p>
                                </div>
                                <div className="text-[#cacaca] bg-[#7036c0]  px-2 py-1 rounded-xl">
                                    <p className="font-medium text-[15px]">Tailwind CSS</p>
                                </div>
                                <div className="text-[#cacaca] bg-[#7036c0]  px-2 py-1 rounded-xl">
                                    <p className="font-medium text-[15px]">Node.js</p>
                                </div>
                                <div className="text-[#cacaca] bg-[#7036c0]  px-2 py-1 rounded-xl">
                                    <p className="font-medium text-[15px]">Express.js</p>
                                </div>
                                <div className="text-[#cacaca] bg-[#7036c0]  px-2 py-1 rounded-xl">
                                    <p className="font-medium text-[15px]">Mongodb.js</p>
                                </div>
                            </div>
                            <Link href="/projects/2">
                                <motion.button
                                    whileHover={{
                                        scale: 1.05,
                                        boxShadow: "0px 5px 15px #7C25B6",
                                        cursor: "pointer"
                                    }}
                                    transition={{
                                        duration: 0.2
                                    }}
                                    className='bg-[#7036c0] px-5 py-3 mt-5 rounded-3xl font-semibold cursor-pointer text-[#cacaca]'>
                                    <span>Show Project</span>
                                    <motion.span
                                        initial={{ x: 0 }}
                                        whileHover={{
                                            x: 5
                                        }}
                                        transition={{
                                            duration: 0.5,
                                        }}
                                        className='ml-2' >→</motion.span>
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>
                    <motion.div
                        whileHover={{
                            scale: 1.02,
                            boxShadow: "0px 5px 30px #5A2A9C",
                        }}
                        transition={{
                            duration: 0.2
                        }}
                        className="text-white rounded-2xl bg-[#12121d] ">
                        <Image className="w-full h-52 rounded-t-2xl" src="/project/healthcare.png" alt="HelpLink" width={500} height={400} />
                        <div className="px-5 my-4 space-y-3">
                            <h2 className="text-3xl text-[#dadada]">HealthCare</h2>
                            <p className="text-[#b9b9b9] font-medium">The Healthcare project is a patient-focused platform that enables easy online doctor appointment booking, secure payments, and access to professional...</p>
                            <div className="flex flex-wrap gap-3">
                                <div className="text-[#d8d8d8] bg-[#7036c0]  px-2 py-1 rounded-xl">
                                    <p className="font-medium text-[15px] text-[#cacaca]">Next.js</p>
                                </div>
                                <div className="text-[#d8d8d8] bg-[#7036c0]  px-2 py-1 rounded-xl">
                                    <p className="font-medium text-[15px] text-[#cacaca]">Tailwind CSS</p>
                                </div>
                                <div className="text-[#d8d8d8] bg-[#7036c0]  px-2 py-1 rounded-xl">
                                    <p className="font-medium text-[15px] text-[#cacaca]">Node.js</p>
                                </div>
                                <div className="text-[#d8d8d8] bg-[#7036c0]  px-2 py-1 rounded-xl">
                                    <p className="font-medium text-[15px] text-[#cacaca]">Express.js</p>
                                </div>
                                <div className="text-[#d8d8d8] bg-[#7036c0]  px-2 py-1 rounded-xl">
                                    <p className="font-medium text-[15px] text-[#cacaca]">Mongodb.js</p>
                                </div>
                            </div>
                            <Link href="/projects/3">
                                <motion.button
                                    whileHover={{
                                        scale: 1.05,
                                        boxShadow: "0px 5px 15px #7C25B6",
                                        cursor: "pointer"
                                    }}
                                    transition={{
                                        duration: 0.2
                                    }}
                                    className='bg-[#7036c0] mt-5 px-5 py-3 rounded-3xl font-semibold cursor-pointer text-[#cacaca]'>
                                    <span>Show Project</span>
                                    <motion.span
                                        initial={{ x: 0 }}
                                        whileHover={{
                                            x: 5
                                        }}
                                        transition={{
                                            duration: 0.5,
                                        }}
                                        className='ml-2' >→</motion.span>
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Projects;