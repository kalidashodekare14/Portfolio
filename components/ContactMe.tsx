"use client"
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { motion } from 'motion/react'
import Link from 'next/link';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const ContactMe = () => {

    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: any) => {
        e.preventDefault();

        console.log('checking from data', form);

        if (form.current) {
            console.log('form null')
        }

        if (form.current) {
            emailjs
                .sendForm('service_allih9w', 'template_49b5xew', form.current, {
                    publicKey: 'zX6tgAJJyr1MY3rZr',
                })
                .then(
                    () => {
                        console.log('SUCCESS!');
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Your mail has been sent successfully.",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        e.target.reset()
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                    },
                );
        }
    };

    return (
        <div id='contact' className="-mt-px relative overflow-hidden bg-[#0D1317] dark:bg-white">
            <div className="lg:h-150 max-w-5xl m-auto font-roboto relative z-20">
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
                    <p className="text-white dark:text-[#000000bb]">Contact Us</p>
                    <p className="w-14 border-2 border-[#6532FF]" />
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
                        delay: 0.6
                    }}
                     viewport={{ once: true }}
                    className='w-full flex flex-col lg:flex-row justify-between gap-10 mt-10 pb-5'>
                    <form ref={form} onSubmit={sendEmail} className='w-full px-5 rounded-2xl space-y-2 bg-[#0e141f] dark:bg-white border border-[#6e6e6ebb] dark:border-[#bbbb] text-white p-5'>
                        <div className='flex items-center gap-5'>
                            <div className='w-full space-y-2'>
                                <p className='text-[#cfcfcf] dark:text-[#363d4b]'>Full Name</p>
                                <input className="input w-full font-medium focus:outline-[#4e27c2] text-white dark:text-black bg-[#1E2939] dark:bg-white" type="text" name='user_name' placeholder="Name" />
                            </div>
                            <div className='w-full space-y-2'>
                                <p className='text-[#cfcfcf] dark:text-[#363d4b]'>Email Address</p>
                                <input className="input w-full font-medium focus:outline-[#4e27c2] text-white dark:text-black bg-[#1E2939] dark:bg-white" type="email" name='user_email' placeholder="Email" />
                            </div>
                        </div>
                        <div className='w-full space-y-2'>
                            <p className='text-[#cfcfcf] dark:text-[#363d4b]'>Message</p>
                            <textarea className="textarea h-32 w-full font-medium focus:outline-[#4e27c2] text-white dark:text-black bg-[#1E2939] dark:bg-white" name='message' placeholder="Message" />
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full bg-[#4e27c2] text-[#ccc] cursor-pointe px-6 py-2 mt-5 rounded-lg font-medium"
                        >
                            Submit
                        </motion.button>
                    </form>
                </motion.div>
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

export default ContactMe;