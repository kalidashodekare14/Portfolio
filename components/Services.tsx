"use client"
import { motion } from "motion/react"
import { FaCode, FaFileCode } from "react-icons/fa";
import { FcSupport } from "react-icons/fc";
import { GrDocumentPerformance } from "react-icons/gr";
import { LuDatabaseZap } from "react-icons/lu";
import { MdDevices } from "react-icons/md";

const Services = () => {
    return (
        <div id="skills" className="-mt-px relative overflow-hidden bg-[#0D1317] dark:bg-white">
            <div className="lg:max-w-6xl m-auto">
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
                    viewport={{ once: true }}
                    className="flex items-center gap-2 text-xl py-14">
                    <p className="w-14 border-2 border-[#6532FF]" />
                    <p className="text-white dark:text-[#000000bb]">Services</p>
                    <p className="w-14 border-2 border-[#6532FF]" />
                </motion.div>
                <div className="relative z-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
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
                        viewport={{ once: true }}
                    >
                        <motion.div
                            initial={{
                                y: 0
                            }}
                            whileHover={{
                                y: -8,
                                boxShadow: "0px 5px 10px #512EB9"
                            }}
                            transition={{
                                duration: 0.3
                            }}
                            className="text-white border border-[#63519b] rounded-xl p-5 ">
                            <div className="flex items-center gap-3 mb-5">
                                <div className="text-2xl bg-[#6532FF] p-3 rounded-full">
                                    <FaCode />
                                </div>
                                <h3 className="text-xl">Frontend Development</h3>
                            </div>
                            <p className="text-[#f1f1f1bb]">Modern and scalable web applications built with React, Next.js, and TypeScript, focusing on clean architecture and smooth user experience.</p>
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
                        viewport={{ once: true }}
                    >
                        <motion.div
                            initial={{
                                y: 0
                            }}
                            whileHover={{
                                y: -8,
                                boxShadow: "0px 5px 10px #512EB9"
                            }}
                            transition={{
                                duration: 0.3
                            }}
                            className="text-white border border-[#63519b] rounded-xl p-5 ">
                            <div className="flex items-center gap-3 mb-5">
                                <div className="text-2xl bg-[#6532FF] p-3 rounded-full">
                                    <FaFileCode />
                                </div>
                                <h3 className="text-xl">Clean Code & Scalable Architecture</h3>
                            </div>
                            <p className="text-[#f1f1f1bb]">Maintainable, reusable, and well-structured code following best practices for long-term scalability and team collaboration.</p>
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
                        viewport={{ once: true }}
                    >
                        <motion.div
                            initial={{
                                y: 0
                            }}
                            whileHover={{
                                y: -8,
                                boxShadow: "0px 5px 10px #512EB9"
                            }}
                            transition={{
                                duration: 0.3
                            }}
                            className="text-white border border-[#63519b] rounded-xl p-5 ">
                            <div className="flex items-center gap-3 mb-5">
                                <div className="text-2xl bg-[#6532FF] p-3 rounded-full">
                                    <MdDevices />
                                </div>
                                <h3 className="text-xl">Responsive & Modern UI</h3>
                            </div>
                            <p className="text-[#f1f1f1bb]">Pixel-perfect, mobile-first, and cross-browser compatible interfaces built from design to production.</p>
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
                            delay: 0.9
                        }}
                        viewport={{ once: true }}
                    >
                        <motion.div
                            initial={{
                                y: 0
                            }}
                            whileHover={{
                                y: -8,
                                boxShadow: "0px 5px 10px #512EB9"
                            }}
                            transition={{
                                duration: 0.3
                            }}
                            className="text-white border border-[#63519b] rounded-xl p-5 ">
                            <div className="flex items-center gap-3 mb-5">
                                <div className="text-2xl bg-[#6532FF] p-3 rounded-full">
                                    <GrDocumentPerformance />
                                </div>
                                <h3 className="text-xl">Performance & SEO Optimization</h3>
                            </div>
                            <p className="text-[#f1f1f1bb]">Fast-loading and SEO-friendly applications with optimized assets, code splitting, and improved Lighthouse performance.</p>
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
                            delay: 1.01
                        }}
                        viewport={{ once: true }}
                    >
                        <motion.div
                            initial={{
                                y: 0
                            }}
                            whileHover={{
                                y: -8,
                                boxShadow: "0px 5px 10px #512EB9"
                            }}
                            transition={{
                                duration: 0.3
                            }}
                            className="text-white border border-[#63519b] rounded-xl p-5 ">
                            <div className="flex items-center gap-3 mb-5">
                                <div className="text-2xl bg-[#6532FF] p-3 rounded-full">
                                    <LuDatabaseZap />
                                </div>
                                <h3 className="text-xl">API Integration & Backend Connectivity</h3>
                            </div>
                            <p className="text-[#f1f1f1bb]">Secure and efficient integration with REST APIs, authentication systems, and backend services.</p>
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
                            delay: 1.02
                        }}
                        viewport={{ once: true }}
                    >
                        <motion.div
                            initial={{
                                y: 0
                            }}
                            whileHover={{
                                y: -8,
                                boxShadow: "0px 5px 10px #512EB9"
                            }}
                            transition={{
                                duration: 0.3
                            }}
                            className="text-white border border-[#63519b] rounded-xl p-5 ">
                            <div className="flex items-center gap-3 mb-5">
                                <div className="text-2xl bg-[#6532FF] p-3 rounded-full">
                                    <FcSupport />
                                </div>
                                <h3 className="text-xl">Maintenance & Support</h3>
                            </div>
                            <p className="text-[#f1f1f1bb]">Ongoing support including bug fixing, refactoring, performance improvements, and feature enhancements.</p>
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

export default Services;