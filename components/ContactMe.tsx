"use client"
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { motion } from 'motion/react'

const ContactMe = () => {
    return (
        <div className=" bg-[#161E2D] px-32">
            <div className="h-200 font-roboto">
                <h1 className="text-5xl text-center text-[#7F22FE] font-bold py-10">Contact Me</h1>
                <div className='w-full flex justify-between gap-10 mt-10'>
                    <div className='w-[40%] space-y-9 border '>
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
                                <div className='bg-[#7F22FE] p-3 rounded-full text-[19px]'>
                                    <FaLinkedinIn />
                                </div>
                                <div className='bg-[#7F22FE] p-3 rounded-full text-[19px]'>
                                    <FaGithub />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[60%] rounded-2xl space-y-2 bg-[#12121D] text-white p-5'>
                        <div className='w-full space-y-2'>
                            <p className='text-[#cfcfcf]'>Full Name</p>
                            <input className="input w-full font-medium focus:outline-[#7F22FE] text-white bg-[#1E2939]" type="text" placeholder="Name" />
                        </div>
                        <div className='w-full space-y-2'>
                            <p className='text-[#cfcfcf]'>Email Address</p>
                            <input className="input w-full font-medium focus:outline-[#7F22FE] text-white bg-[#1E2939]" type="email" placeholder="Email" />
                        </div>
                        <div className='w-full space-y-2'>
                            <p className='text-[#cfcfcf]'>Message</p>
                            <textarea className="textarea h-32 w-full font-medium focus:outline-[#7F22FE] text-white bg-[#1E2939]" placeholder="Message" />
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full bg-[#7F22FE] cursor-pointer text-white px-6 py-2 mt-5 rounded-lg font-medium"
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