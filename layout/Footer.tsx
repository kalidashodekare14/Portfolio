"use client"

import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { motion } from "motion/react";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="-mt-px bg-[#161E2D]">
            <div className=" max-w-6xl m-auto font-roboto">
                <footer className="footer sm:footer-horizontal text-neutral-content items-center p-4">
                    <aside className="grid-flow-col items-center">
                        <img className="w-14" src="/singel_logo.png" alt="" />
                        <p className="text-[17px]">Kalidash Odekare © {new Date().getFullYear()} - All right reserved</p>
                    </aside>
                    <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
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
                                    className='bg-[#4e27c2] text-[#ccc]  cursor-pointer p-3 rounded-full text-[19px]'>
                                    <FaGithub />
                                </motion.div>
                            </Link>
                        </div>
                    </nav>
                </footer>
            </div>
        </div>
    );
};

export default Footer;