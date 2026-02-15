"use client"
import { motion } from "motion/react"

import Link from "next/link";
import { IoCodeSlashSharp } from "react-icons/io5";
import { SiReaddotcv } from "react-icons/si";
import { Link as ScrollLink } from 'react-scroll'
// 161f2d
const HeroSection1 = () => {


    return (
        <div id='hero' className='-mt-px relative  bg-[#0D1317] dark:bg-white overflow-hidden font-roboto pb-5'>
            <div className='relative lg:max-w-6xl m-auto lg:h-150 flex flex-col lg:flex-row items-center'>
                <div className="lg:w-[55%] space-y-7 mx-5 mt-10 lg:mt-0">
                    <motion.p
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
                            delay: 0.5,

                        }}
                        viewport={{ once: true }}
                        className='relative z-20 w-60 text-[#f7f6f6d5] text-[22px] bg-[#3e2783] p-3 py-1 rounded-3xl'>
                        Frontend Developer
                    </motion.p>
                    <motion.h1
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
                        className='text-white text-[80px] lg:text-6xl text-center lg:text-left font-bold leading-tight'>
                        <span className='dark:bg-[#6532FF] bg-linear-to-r from-[#8e77d4] via-[#9d84e7] to-[#9079d6] dark:from-[#6532FF] dark:via-[#6532FF] dark:to-[#6532FF] to bg-clip-text text-transparent animate-linear'>Kalidash Odekare</span>
                        {/* <span className='bg-linear-to-r from-[#ad6cdb] via-[#9a5dc2] to-[#8c50b4] bg-clip-text text-transparent animate-linear'>Kalidash Odekare</span> */}
                    </motion.h1>
                    <motion.p
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
                        className='text-[#B7B7B7] dark:text-[#474747] text-xl'>
                        Building Beautiful & Functional Web Interfaces
                    </motion.p>
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
                        className=' flex flex-wrap lg:justify-start justify-center lg:flex-row gap-4'>
                        <motion.div
                            whileHover={{
                                scale: 1.1,
                                boxShadow: "0px 5px 10px #4e2fad",
                                cursor: "pointer"
                            }}
                            transition={{
                                duration: 0.2,
                                ease: "easeInOut"
                            }}
                            viewport={{ once: true }}
                            className='font-semibold flex items-center gap-1 text-[#d4d4d4] dark:text-[#3e2783] bg-[#3e2783] dark:bg-[#dbcfff] rounded-2xl p-2'>
                            <IoCodeSlashSharp />
                            <p>Clean Code</p>
                        </motion.div>
                        <motion.div
                            whileHover={{
                                scale: 1.1,
                                boxShadow: "0px 5px 10px #4e2fad",
                                cursor: "pointer"
                            }}
                            transition={{
                                duration: 0.2
                            }}
                            viewport={{ once: true }}
                            className='font-semibold flex items-center gap-1 text-[#d4d4d4] dark:text-[#3e2783] bg-[#3e2783] dark:bg-[#dbcfff] rounded-2xl p-2'>
                            <IoCodeSlashSharp />
                            <p>User Friendly</p>
                        </motion.div>
                        <motion.div
                            whileHover={{
                                scale: 1.1,
                                boxShadow: "0px 5px 10px #4e2fad",
                                cursor: "pointer"
                            }}
                            transition={{
                                duration: 0.2
                            }}
                            viewport={{ once: true }}
                            className='font-semibold flex items-center gap-1 text-[#d4d4d4] dark:text-[#3e2783] bg-[#3e2783] dark:bg-[#dbcfff] rounded-2xl p-2'>
                            <IoCodeSlashSharp />
                            <p>Interactive UI</p>
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
                        className='flex flex-col lg:flex-row gap-4'>
                        <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                            <motion.button
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0px 5px 15px #6532FF",
                                    cursor: "pointer"
                                }}
                                transition={{
                                    duration: 0.2
                                }}
                                // bg-violet-600
                                // bg-[#7209b7]
                                // latest: #9045F8+
                                // 208b3a
                                className='flex w-full items-center bg-[#6532FF] px-9 py-4 rounded-3xl font-semibold cursor-pointer text-[#f3f3f3]'>
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
                                    boxShadow: "0px 5px 15px #6532FF",
                                    cursor: "pointer"
                                }}
                                transition={{
                                    duration: 0.2
                                }}
                                className='lg:ml-4 border w-full border-[#6532FF] px-9 py-4 rounded-3xl font-semibold cursor-pointer text-[#f3f3f3] dark:text-[#6532ff]'>
                                Contact Us
                            </motion.button>
                        </ScrollLink>
                    </motion.div>
                </div>
                <motion.div
                    initial={{
                        // y: -50,
                        opacity: 0
                    }}
                    whileInView={{
                        // y: 0,
                        opacity: 1
                    }}
                    transition={{
                        duration: 0.5,
                        delay: 1.1
                    }}
                    viewport={{ once: true }}
                    className='hidden lg:flex lg:w-[45%] bg-[#11151a] dark:bg-[#dbe1e7]   text-slate-400 border border-[#3f3f3fbb] rounded-xl p-5 mx-5 text-[16px]'>
                    <div className="select-none pr-2 dark:text-[#3a3a3a]">
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                        <div>5</div>
                        <div>6</div>
                        <div>7</div>
                        <div>8</div>
                        <div>9</div>

                    </div>
                    <pre className="whitespace-pre-wrap font-medium">
                        <span className="text-[#ba181b]">const</span>{" "}
                        <span className="text-[#bbb] dark:text-[#292828]">skills</span>{" "}
                        <span className="dark:text-[#292828]">=</span>{" "}
                        <span className="dark:text-[#292828]">{"{"}</span>
                        {"\n"}
                        <span className="text-[#d38b5d] dark:text-[#03045e]">frontEnd</span>{" "}
                        <span className="dark:text-[#292828]">:</span>{" "}
                        <span className="dark:text-[#292828]">['</span>
                        <span className="text-[#9A82E3] dark:text-[#2323CC]">TypeScript</span>
                        <span className="dark:text-[#292828]">'</span>
                        <span className="dark:text-[#292828]">,</span>{" "}
                        <span className="dark:text-[#292828]">'</span>
                        <span className="text-[#9A82E3] dark:text-[#2323CC]">React.js</span>
                        <span className="dark:text-[#292828]">'</span>
                        <span className="text-[#9A82E3]">,</span>{" "}
                        <span className="dark:text-[#292828]">'</span>
                        <span className="text-[#9A82E3] dark:text-[#2323CC]">Next.js</span>
                        <span className="dark:text-[#292828]">'</span>
                        <span className="dark:text-[#292828]">,</span>{" "}
                        <span className="dark:text-[#292828]">'</span>
                        <span className="text-[#9A82E3] dark:text-[#2323CC]">Tailwind CSS</span>
                        <span className="dark:text-[#292828]">']</span>
                        <span className="dark:text-[#292828]">,</span>
                        {"\n"}
                        <span className="text-[#d38b5d] dark:text-[#03045e]">backendEnd</span>{" "}
                        <span className="dark:text-[#292828]">:</span>{" "}
                        <span className="dark:text-[#292828]">['</span>
                        <span className="text-[#9A82E3] dark:text-[#2323CC]">TypeScript</span>
                        <span className="dark:text-[#292828]">'</span>
                        <span className="dark:text-[#292828]">,</span>{" "}
                        <span className="dark:text-[#292828]">'</span>
                        <span className="text-[#9A82E3] dark:text-[#2323CC]">Node.js</span>
                        <span className="dark:text-[#292828]">'</span>
                        <span className="dark:text-[#292828]">,</span>{" "}
                        <span className="dark:text-[#292828]">'</span>
                        <span className="text-[#9A82E3] dark:text-[#2323CC]">Express.js</span>
                        <span className="dark:text-[#292828]">'</span>
                        <span className="dark:text-[#292828]">,</span>{" "}
                        <span className="dark:text-[#292828]">'</span>
                        <span className="text-[#9A82E3] dark:text-[#2323CC]">MongoDB</span>
                        <span className="dark:text-[#292828]">']</span>
                        <span className="dark:text-[#292828]">,</span>
                        {"\n"}
                        <span className="text-[#d38b5d] dark:text-[#03045e]">tools</span>{" "}
                        <span className="dark:text-[#292828]">:</span>{" "}
                        <span className="dark:text-[#292828]">['</span>
                        <span className="text-[#9A82E3] dark:text-[#2323CC]">VS Code</span>
                        <span className="dark:text-[#292828]">'</span>
                        <span className="dark:text-[#292828]">,</span>{" "}
                        <span className="dark:text-[#292828]">'</span>
                        <span className="text-[#9A82E3] dark:text-[#2323CC]">GitHub</span>
                        <span className="dark:text-[#292828]">'</span>
                        <span className="dark:text-[#292828]">,</span>{" "}
                        <span className="dark:text-[#292828]">'</span>
                        <span className="text-[#9A82E3] dark:text-[#2323CC]">Firebase</span>
                        <span className="dark:text-[#292828]">'</span>
                        <span className="text-[#9A82E3]">,</span>{" "}
                        <span className="dark:text-[#292828]">'</span>
                        <span className="text-[#9A82E3] dark:text-[#2323CC]">Redux</span>
                        <span className="dark:text-[#292828]">']</span>
                        {"\n"}
                        <span className="dark:text-[#292828]">{"}"}</span>
                    </pre>
                </motion.div>
            </div>
            <motion.div
                initial={{
                    opacity: 0.20,
                }}
                // animate={{
                //     opacity: 0.20,
                // }}
                // transition={{
                //     duration: 2,
                // }}
                className='z-10 absolute -bottom-5 right-0 w-50 h-50 rounded-full bg-[#6532FF] opacity-100 blur-[140px]'>

            </motion.div>
            <motion.div
                initial={{
                    opacity: 0.30,
                }}
                // animate={{
                //     opacity: 0.30,
                // }}
                // transition={{
                //     duration: 2,
                // }}
                className='z-10 absolute -top-50 left-[40%] w-96 h-96 rounded-full bg-[#6532FF] opacity-100 blur-[140px]'>

            </motion.div>
            <motion.div
                initial={{
                    opacity: 0.30,
                }}
                // animate={{
                //     opacity: 0.30,
                // }}
                // transition={{
                //     duration: 2,
                // }}
                className='z-10 absolute -bottom-5 left-0 w-50 h-50 rounded-full bg-[#6532FF] opacity-100 blur-[140px]'>

            </motion.div>
        </div >
    );
};

export default HeroSection1;