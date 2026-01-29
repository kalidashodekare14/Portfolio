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

        if(form.current){
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
        <div id='contact' className="-mt-px bg-[#0D1317] ">
            <div className="lg:h-200 max-w-6xl m-auto font-roboto">
                <div className="py-20">
                    <h1 className="text-5xl text-center text-[#6f46ec] font-bold">Contact Me</h1>
                    <motion.p
                        initial={{ width: 0 }}
                        whileInView={{ width: 240 }}
                        transition={{ duration: 1 }}
                        className=" m-auto border-2 mt-2 rounded-full border-[#6f46ec]"></motion.p>
                </div>
                <div className='w-full flex flex-col lg:flex-row justify-between gap-10 mt-10 pb-5'>
                    <div className='lg:w-[40%] px-5 lg:space-y-9 space-y-5 '>
                        <div className='text-white border bg-[#0e141f] border-[#3f3f3fbb] p-5 rounded-2xl space-y-1'>
                            <h3 className='text-2xl text-[#ffffffbb]'>Contact Info</h3>
                            <div>
                                <div className='flex items-center gap-2 text-[17px] text-[#b6b4b4]'>
                                    <MdEmail />
                                    <span className='font-medium '>kalidashodekare14@gmail.com</span>
                                </div>
                                <div className='flex items-center gap-2 text-[17px] text-[#b6b4b4]'>
                                    <FaWhatsapp />
                                    <span className='font-medium '>+8801776046270</span>
                                </div>
                            </div>
                        </div>
                        <div className='text-white border bg-[#0e141f] border-[#3f3f3fbb] p-5 rounded-2xl space-y-1'>
                            <h3 className='text-2xl text-[#ffffffbb]'>Address</h3>
                            <div>
                                <div className='flex items-center gap-2 text-[17px] text-[#b6b4b4]'>
                                    <FaLocationDot />
                                    <span className='font-medium'>Dinajpur, Bangladesh</span>
                                </div>
                            </div>
                        </div>
                        <div className='text-white border bg-[#0e141f] border-[#3f3f3fbb] p-5 rounded-2xl space-y-1'>
                            <h3 className='text-2xl text-[#ffffffbb]'>Follow me</h3>
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
                    <form ref={form} onSubmit={sendEmail} className='lg:w-[60%] px-5 rounded-2xl space-y-2 bg-[#0e141f] text-white p-5'>
                        <div className='w-full space-y-2'>
                            <p className='text-[#cfcfcf]'>Full Name</p>
                            <input className="input w-full font-medium focus:outline-[#4e27c2] text-white bg-[#1E2939]" type="text" name='user_name' placeholder="Name" />
                        </div>
                        <div className='w-full space-y-2'>
                            <p className='text-[#cfcfcf]'>Email Address</p>
                            <input className="input w-full font-medium focus:outline-[#4e27c2] text-white bg-[#1E2939]" type="email" name='user_email' placeholder="Email" />
                        </div>
                        <div className='w-full space-y-2'>
                            <p className='text-[#cfcfcf]'>Message</p>
                            <textarea className="textarea h-32 w-full font-medium focus:outline-[#4e27c2] text-white bg-[#1E2939]" name='message' placeholder="Message" />
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full bg-[#4e27c2] text-[#ccc] cursor-pointe px-6 py-2 mt-5 rounded-lg font-medium"
                        >
                            Submit
                        </motion.button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;