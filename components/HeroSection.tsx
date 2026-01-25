"use client"
import { IoCodeSlashSharp } from 'react-icons/io5';
import { motion } from "motion/react"

const HeroSection = () => {
    return (
        <div id='hero' className='-mt-px relative lg:min-h-screen h-screen  bg-[#161f2d] overflow-hidden font-roboto flex flex-col items-center lg:justify-center '>
            <div className='z-20 flex flex-col items-center gap-6 mt-14 lg:mt-0'>
                <p className='text-[#f7f6f6bb] text-[22px] bg-[#47146b] p-3 py-1 rounded-3xl'>Frontend Developer</p>
                <h1 className='text-white text-[94px] lg:text-8xl text-center font-bold leading-tight'>
                    <span className='bg-linear-to-r from-[#ad6cdb] via-[#9a5dc2] to-[#8c50b4] bg-clip-text text-transparent animate-linear'>Kalidash Odekare</span>
                </h1>
                {/* text-[#f95738] */}
                <h3 className='text-[#bbbbbb] text-[23px] text-center'>Building Beautiful & Functional Web Interfaces</h3>
                <div className='flex flex-wrap lg:flex-row justify-center items-center gap-4'>
                    <motion.div
                        whileHover={{
                            scale: 1.1,
                            boxShadow: "0px 5px 10px #411f80",
                            cursor: "pointer"
                        }}
                        transition={{
                            duration: 0.2,
                            ease: "easeInOut"
                        }}
                        className='font-semibold flex items-center gap-1 text-[#d4d4d4] bg-[#47146b] rounded-2xl p-2'>
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
                        className='font-semibold flex items-center gap-1 text-[#d4d4d4] bg-[#47146b] rounded-2xl p-2'>
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
                        className='font-semibold flex items-center gap-1 text-[#d4d4d4] bg-[#47146b] rounded-2xl p-2'>
                        <IoCodeSlashSharp />
                        <p>Interactive UI</p>
                    </motion.div>
                </div>
                <div>
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
                        className='bg-[#7209b7] px-9 py-4 rounded-3xl font-semibold cursor-pointer text-[#f3f3f3]'>
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
                    <motion.button
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0px 5px 15px #7C25B6",
                            cursor: "pointer"
                        }}
                        transition={{
                            duration: 0.2
                        }}
                        className='ml-4 border border-[#7209b7] px-9 py-4 rounded-3xl font-semibold cursor-pointer text-[#f3f3f3]'>Contact Us</motion.button>
                </div>
            </div>
            {/* <motion.div
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 0.35,
                }}
                transition={{
                    duration: 2,
                }}
                className='z-10 absolute top-0 w-125 h-125 rounded-full bg-purple-400 opacity-35 blur-[140px]'>

            </motion.div> */}
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
                className='z-10 absolute top-0 w-100 h-100 rounded-full bg-purple-400 opacity-35 blur-[140px]'>

            </motion.div>
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
                className='z-10 absolute -bottom-20 right-0 w-50 h-50 rounded-full bg-purple-400 opacity-35 blur-[140px]'>

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
                className='z-10 absolute -bottom-20 left-0 w-50 h-50 rounded-full bg-purple-400 opacity-35 blur-[140px]'>

            </motion.div>
        </div >
    );
};

export default HeroSection;