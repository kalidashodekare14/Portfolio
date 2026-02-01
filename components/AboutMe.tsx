"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
// bg-[#161E2D]
const AboutMe = () => {
    return (
        <div id="about" className="-mt-px relative bg-[#0D1317] overflow-hidden dark:bg-white flex flex-col ">
            <div className="min-h-screen lg:max-w-6xl m-auto pb-10 font-rubik mt-24">
                <div className="text-white flex flex-col-reverse lg:flex-row items-center gap-10 mx-5">
                    <div className="lg:w-[60%] space-y-3 z-20">
                        <div className="flex items-center gap-2 text-xl my-5">
                            <p className="w-14 border-2 border-[#6532FF]" />
                            <p className="dark:text-[#000000bb]">About me</p>
                            <p className="w-14 border-2 border-[#6532FF]" />
                        </div>
                        <h1 className="text-4xl dark:text-[#6532FF]">Frontend Developer</h1>
                        <p className="text-[#dad9d9bb] text-[17px] dark:text-[#000000bb]">I am a Frontend Developer specializing in React.js, Next.js, and Tailwind CSS, with a strong focus on building user-friendly, responsive, and high-performance web applications. I also have hands-on experience with backend technologies such as Node.js, Express.js, and MongoDB, enabling me to contribute effectively to MERN stack development when required. I enjoy transforming UI/UX designs into clean, scalable, and maintainable code while following best practices. I am continuously learning modern web technologies and improving my problem-solving skills. I work well in collaborative team environments, value clean code and clear communication, and aim to grow into a proficient Full Stack Developer within the next five years.</p>
                        <div className="flex flex-wrap gap-5 border border-[#a0a0a0bb] p-5 rounded-4xl">
                            <div className="flex items-center gap-2">
                                <div className="bg-[#6532FF] text-2xl p-2 rounded-full">
                                    <FaPhoneAlt />
                                </div>
                                <div>
                                    <p className="font-bold dark:text-[#000000bb]">Phone:</p>
                                    <p className="text-[#ebebebbb] dark:text-[#000000bb] text-[16px]">+8801776046270</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="bg-[#6532FF] text-2xl p-2 rounded-full">
                                    <MdEmail />
                                </div>
                                <div>
                                    <p className="font-bold dark:text-[#000000bb]">Email:</p>
                                    <p className="text-[#ebebebbb] text-[16px] dark:text-[#000000bb]">kalidashodekare14@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="bg-[#6532FF] text-2xl p-2 rounded-full">
                                    <FaLocationDot />
                                </div>
                                <div>
                                    <p className="font-bold dark:text-[#000000bb]">Address:</p>
                                    <p className="text-[#ebebebbb] text-[16px] dark:text-[#000000bb]">Birgonj, Dinajpur</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div>
                                    <p className="font-bold dark:text-[#000000bb]">Social:</p>
                                    <div className='flex items-center gap-4'>
                                        <Link href={"https://www.linkedin.com/in/kalidash-odekare-webdev"} target='_blank'>
                                            <motion.div
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                className='bg-[#4e27c2] text-[#ccc] cursor-pointer p-3 rounded-full text-[19px]'>
                                                <FaLinkedinIn />
                                            </motion.div>
                                        </Link>
                                        <Link href={"https://github.com/kalidashodekare14"} target='_blank'>
                                            <motion.div
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                className='bg-[#4e27c2]  text-[#ccc] cursor-pointer p-3 rounded-full text-[19px]'>
                                                <FaGithub />
                                            </motion.div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-[35%] relative z-20">
                        <Image className="w-full h-110 rounded-xl" src={"/about/kalidash.jpg"} alt="Kalidash Odekare" width={500} height={300} />
                    </div>
                </div>
            </div>
            <motion.div
                className='z-10 absolute top-0 left-20 w-60 h-50 rounded-full bg-[#6532FF] opacity-50 blur-[140px]'>
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

export default AboutMe;