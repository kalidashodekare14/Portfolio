"use client"
import { motion } from "motion/react"
import { ins } from "motion/react-client";
import Link from "next/link";
import { IoCodeSlashSharp } from "react-icons/io5";
import { SiReaddotcv } from "react-icons/si";
import { Link as ScrollLink } from 'react-scroll'

const HeroSection1 = () => {
    return (
        <div id='hero' className='-mt-px relative  bg-[#161f2d] overflow-hidden font-roboto pb-5'>
            <div className='relative lg:max-w-6xl m-auto lg:min-h-screen flex items-center'>
                <div className="space-y-7 mx-5">
                    <p className='relative z-20 w-60 text-[#f7f6f6bb] text-[22px] bg-[#6734AE] p-3 py-1 rounded-3xl'>Frontend Developer</p>
                    <h6 className='text-[#C398FF] text-7xl font-bold mt-4 '>Kalidash Odekare</h6>
                    <p className='text-[#B7B7B7] text-xl'>Building Beautiful & Functional Web Interfaces</p>
                    <div className=' flex flex-wrap lg:justify-start justify-center lg:flex-row gap-4'>
                        <motion.div
                            whileHover={{
                                scale: 1.1,
                                boxShadow: "0px 5px 10px #9045F8",
                                cursor: "pointer"
                            }}
                            transition={{
                                duration: 0.2,
                                ease: "easeInOut"
                            }}
                            className='font-semibold flex items-center gap-1 text-[#d4d4d4] bg-[#5a2e99] rounded-2xl p-2'>
                            <IoCodeSlashSharp />
                            <p>Clean Code</p>
                        </motion.div>
                        <motion.div
                            whileHover={{
                                scale: 1.1,
                                boxShadow: "0px 5px 10px #411f80",
                                cursor: "pointer"
                            }}
                            transition={{
                                duration: 0.2
                            }}
                            className='font-semibold flex items-center gap-1 text-[#d4d4d4] bg-[#5a2e99] rounded-2xl p-2'>
                            <IoCodeSlashSharp />
                            <p>User Friendly</p>
                        </motion.div>
                        <motion.div
                            whileHover={{
                                scale: 1.1,
                                boxShadow: "0px 5px 10px #411f80",
                                cursor: "pointer"
                            }}
                            transition={{
                                duration: 0.2
                            }}
                            className='font-semibold flex items-center gap-1 text-[#d4d4d4] bg-[#5a2e99] rounded-2xl p-2'>
                            <IoCodeSlashSharp />
                            <p>Interactive UI</p>
                        </motion.div>
                    </div>
                    <div className='flex flex-col lg:flex-row gap-4'>
                        <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                            <motion.button
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0px 5px 15px #7C25B6",
                                    cursor: "pointer"
                                }}
                                transition={{
                                    duration: 0.2
                                }}
                                // bg-violet-600
                                // bg-[#7209b7]
                                // latest: #9045F8
                                className='flex items-center bg-[#9045F8] px-9 py-4 rounded-3xl font-semibold cursor-pointer text-[#f3f3f3]'>
                                <span>Dawnload Resume</span>
                                <motion.span
                                    initial={{ x: 0 }}
                                    transition={{
                                        duration: 0.5,
                                    }}
                                    className='ml-2 text-2xl' >
                                    <SiReaddotcv />
                                </motion.span>
                            </motion.button>
                        </Link>
                        <ScrollLink
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={600}
                        >
                            <motion.button
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0px 5px 15px #9045F8",
                                    cursor: "pointer"
                                }}
                                transition={{
                                    duration: 0.2
                                }}
                                className='ml-4 border border-[#9045F8] px-9 py-4 rounded-3xl font-semibold cursor-pointer text-[#f3f3f3]'>
                                Contact Us
                            </motion.button>
                        </ScrollLink>
                    </div>
                </div>
            </div>
            <motion.div
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 0.35,
                }}
                transition={{
                    duration: 2,
                }}
                className='z-10 absolute -bottom-20 right-0 w-50 h-50 rounded-full bg-[#8257be] opacity-100 blur-[140px]'>

            </motion.div>
            <motion.div
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 0.20,
                }}
                transition={{
                    duration: 2,
                }}
                className='z-10 absolute -bottom-10 left-0 w-50 h-50 rounded-full bg-[#8257be] opacity-100 blur-[140px]'>

            </motion.div>
        </div>
    );
};

export default HeroSection1;