"use client"
import { motion } from "motion/react"
import { ins } from "motion/react-client";
import Link from "next/link";
import { IoCodeSlashSharp } from "react-icons/io5";
import { SiReaddotcv } from "react-icons/si";
import { Link as ScrollLink } from 'react-scroll'
// 161f2d
const HeroSection1 = () => {
    

    return (
        <div id='hero' className='-mt-px relative  bg-[#0D1317] overflow-hidden font-roboto pb-5'>
            <div className='relative lg:max-w-6xl m-auto lg:h-150 flex flex-col lg:flex-row items-center'>
                <div className="lg:w-[55%] space-y-7 mx-5 mt-10 lg:mt-0">
                    <p className='relative z-20 w-60 text-[#f7f6f6d5] text-[22px] bg-[#3e2783] p-3 py-1 rounded-3xl'>Frontend Developer</p>
                    <h1 className='text-white text-[80px] lg:text-6xl text-center lg:text-left font-bold leading-tight'>
                        <span className='bg-linear-to-r from-[#8e77d4] via-[#9d84e7] to-[#9079d6] bg-clip-text text-transparent animate-linear'>Kalidash Odekare</span>
                        {/* <span className='bg-linear-to-r from-[#ad6cdb] via-[#9a5dc2] to-[#8c50b4] bg-clip-text text-transparent animate-linear'>Kalidash Odekare</span> */}
                    </h1>
                    <p className='text-[#B7B7B7] text-xl'>Building Beautiful & Functional Web Interfaces</p>
                    <div className=' flex flex-wrap lg:justify-start justify-center lg:flex-row gap-4'>
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
                            className='font-semibold flex items-center gap-1 text-[#d4d4d4] bg-[#3e2783] rounded-2xl p-2'>
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
                            className='font-semibold flex items-center gap-1 text-[#d4d4d4] bg-[#3e2783] rounded-2xl p-2'>
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
                            className='font-semibold flex items-center gap-1 text-[#d4d4d4] bg-[#3e2783] rounded-2xl p-2'>
                            <IoCodeSlashSharp />
                            <p>Interactive UI</p>
                        </motion.div>
                    </div>
                    <div className='flex flex-col lg:flex-row gap-4'>
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
                                className='lg:ml-4 border w-full border-[#6532FF] px-9 py-4 rounded-3xl font-semibold cursor-pointer text-[#f3f3f3]'>
                                Contact Us
                            </motion.button>
                        </ScrollLink>
                    </div>
                </div>
                <div className='hidden lg:flex lg:w-[45%] bg-linear-to-r from-[#11151a] via-[#11151a] to-[#0f1316] text-slate-400 border border-[#3f3f3fbb] rounded-xl p-5 mx-5 text-[16px]'>
                    <div className="select-none pr-2">
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
                        <span className="text-[#bbb]">skills</span>{" "}
                        <span>=</span>{" "}
                        <span>{"{"}</span>
                        {"\n"}
                        <span className="text-[#d38b5d]">frontEnd</span>{" "}
                        <span>:</span>{" "}
                        <span>['</span>
                        <span className="text-[#9A82E3]">TypeScript</span>
                        <span>'</span>
                        <span>,</span>{" "}
                        <span>'</span>
                        <span className="text-[#9A82E3]">React.js</span>
                        <span>'</span>
                        <span className="text-[#9A82E3]">,</span>{" "}
                        <span>'</span>
                        <span className="text-[#9A82E3]">Next.js</span>
                        <span>'</span>
                        <span>,</span>{" "}
                        <span>'</span>
                        <span className="text-[#9A82E3]">Tailwind CSS</span>
                        <span>']</span>
                        <span>,</span>
                        {"\n"}
                        <span className="text-[#d38b5d]">backendEnd</span>{" "}
                        <span>:</span>{" "}
                        <span>['</span>
                        <span className="text-[#9A82E3]">TypeScript</span>
                        <span>'</span>
                        <span>,</span>{" "}
                        <span>'</span>
                        <span className="text-[#9A82E3]">Node.js</span>
                        <span>'</span>
                        <span>,</span>{" "}
                        <span>'</span>
                        <span className="text-[#9A82E3]">Express.js</span>
                        <span>'</span>
                        <span>,</span>{" "}
                        <span>'</span>
                        <span className="text-[#9A82E3]">MongoDB</span>
                        <span>']</span>
                        <span>,</span>
                        {"\n"}
                        <span className="text-[#d38b5d]">tools</span>{" "}
                        <span>:</span>{" "}
                        <span>['</span>
                        <span className="text-[#9A82E3]">VS Code</span>
                        <span>'</span>
                        <span>,</span>{" "}
                        <span>'</span>
                        <span className="text-[#9A82E3]">GitHub</span>
                        <span>'</span>
                        <span>,</span>{" "}
                        <span>'</span>
                        <span className="text-[#9A82E3]">Firebase</span>
                        <span>'</span>
                        <span className="text-[#9A82E3]">,</span>{" "}
                        <span>'</span>
                        <span className="text-[#9A82E3]">Redux</span>
                        <span>']</span>
                        {"\n"}
                        <span>{"}"}</span>
                    </pre>
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
                className='z-10 absolute -bottom-20 right-0 w-50 h-50 rounded-full bg-[#6532FF] opacity-100 blur-[140px]'>

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
                className='z-10 absolute -bottom-5 left-0 w-50 h-50 rounded-full bg-[#6532FF] opacity-100 blur-[140px]'>

            </motion.div>
        </div>
    );
};

export default HeroSection1;