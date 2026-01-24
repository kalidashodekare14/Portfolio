"use client"
import { IoCodeSlashSharp } from 'react-icons/io5';
import { motion } from "motion/react"

const HeroSection = () => {
    return (
        <div className='min-h-screen bg-[#161f2d] font-roboto flex flex-col items-center justify-center h-full'>
            <div className='flex flex-col items-center gap-6'>
                <p className='text-[#f7f6f6bb] text-[22px] bg-[#411f80] p-3 py-1 rounded-3xl'>Frontend Developer</p>
                <h1 className='text-white text-8xl font-bold leading-tight'>
                    <span className='bg-linear-to-r from-violet-400 via-violet-400 to-violet-400 bg-clip-text text-transparent animate-linear'>Kalidash Odekare</span>
                </h1>
                {/* text-[#f95738] */}
                <h3 className='text-[#bbbbbb] text-[23px]'>Building Beautiful & Functional Web Interfaces</h3>
                <div className='flex items-center gap-4'>
                    <motion.div
                        whileHover={{
                            scale: 1.1,
                            boxShadow: "0px 5px 10px #411f80",
                            cursor: "pointer"
                        }}
                        transition={{
                            duration: 0.1
                        }}
                        className='font-semibold flex items-center gap-1 text-[#d4d4d4] bg-[#411f80] rounded-2xl p-2'>
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
                            duration: 0.1
                        }}
                        className='font-semibold flex items-center gap-1 text-[#d4d4d4] bg-[#411f80] rounded-2xl p-2'>
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
                            duration: 0.1
                        }}
                        className='font-semibold flex items-center gap-1 text-[#d4d4d4] bg-[#411f80] rounded-2xl p-2'>
                        <IoCodeSlashSharp />
                        <p>Interactive UI</p>
                    </motion.div>
                </div>
                <div>
                    <motion.button
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0px 5px 15px #7c3aed",
                            cursor: "pointer"
                        }}
                        transition={{
                            duration: 0.2
                        }}
                        className='bg-violet-600 px-7 py-3 rounded-3xl font-semibold cursor-pointer text-[#f3f3f3]'>Show Project</motion.button>
                    <motion.button
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0px 5px 15px #7c3aed",
                            cursor: "pointer"
                        }}
                        transition={{
                            duration: 0.2
                        }}
                        className='ml-4 border border-violet-600 px-7 py-3 rounded-3xl font-semibold cursor-pointer text-[#f3f3f3]'>Contact Us</motion.button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;