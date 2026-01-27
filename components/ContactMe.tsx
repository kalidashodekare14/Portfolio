"use client"
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { motion } from 'motion/react'
import Link from 'next/link';

const ContactMe = () => {
    return (
        <div id='contact' className="-mt-px bg-[#161E2D] ">
            <div className="lg:h-200 max-w-6xl m-auto font-roboto">
                <h1 className="text-5xl text-center text-[#9045F8] font-bold py-10">Contact Me</h1>
                <div className='w-full flex flex-col lg:flex-row justify-between gap-10 mt-10 pb-5'>
                    <div className='lg:w-[40%] px-5 lg:space-y-9 space-y-5 border '>
                        <div className='text-white border bg-[#12121D] border-[#bbbb] p-5 rounded-2xl space-y-1'>
                            <h3 className='text-2xl'>Contact Info</h3>
                            <div>
                                <div className='flex items-center gap-2 text-[17px] text-[#cfcfcf]'>
                                    <MdEmail />
                                    <span className='font-medium'>kalidashodekare14@gmail.com</span>
                                </div>
                                <div className='flex items-center gap-2 text-[17px] text-[#cfcfcf]'>
                                    <FaWhatsapp />
                                    <span className='font-medium'>+8801776046270</span>
                                </div>
                            </div>
                        </div>
                        <div className='text-white border bg-[#12121D] border-[#bbbb] p-5 rounded-2xl space-y-1'>
                            <h3 className='text-2xl'>Address</h3>
                            <div>
                                <div className='flex items-center gap-2 text-[17px] text-[#cfcfcf]'>
                                    <FaLocationDot />
                                    <span className='font-medium'>Dinajpur, Bangladesh</span>
                                </div>
                            </div>
                        </div>
                        <div className='text-white border bg-[#12121D] border-[#bbbb] p-5 rounded-2xl space-y-1'>
                            <h3 className='text-2xl'>Follow me</h3>
                            <div className='flex items-center gap-4'>
                                <Link href={"https://www.linkedin.com/in/kalidash-odekare-webdev"} target='_blank'>
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className='bg-[#9045F8] cursor-pointer p-3 rounded-full text-[19px]'>
                                        <FaLinkedinIn />
                                    </motion.div>
                                </Link>
                                <Link href={"https://github.com/kalidashodekare14"} target='_blank'>
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className='bg-[#9045F8]  cursor-pointer p-3 rounded-full text-[19px]'>
                                        <FaGithub />
                                    </motion.div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-[60%] px-5 rounded-2xl space-y-2 bg-[#12121D] text-white p-5'>
                        <div className='w-full space-y-2'>
                            <p className='text-[#cfcfcf]'>Full Name</p>
                            <input className="input w-full font-medium focus:outline-[#9045F8] text-white bg-[#1E2939]" type="text" placeholder="Name" />
                        </div>
                        <div className='w-full space-y-2'>
                            <p className='text-[#cfcfcf]'>Email Address</p>
                            <input className="input w-full font-medium focus:outline-[#9045F8] text-white bg-[#1E2939]" type="email" placeholder="Email" />
                        </div>
                        <div className='w-full space-y-2'>
                            <p className='text-[#cfcfcf]'>Message</p>
                            <textarea className="textarea h-32 w-full font-medium focus:outline-[#9045F8] text-white bg-[#1E2939]" placeholder="Message" />
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full bg-[#9045F8] cursor-pointer text-white px-6 py-2 mt-5 rounded-lg font-medium"
                        >
                            Submit
                        </motion.button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;