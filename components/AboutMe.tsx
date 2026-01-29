"use client"

import Image from "next/image";
import { motion } from "framer-motion";
// bg-[#161E2D]
const AboutMe = () => {
    return (
        <div id="about" className="-mt-px bg-[#0D1317] flex flex-col justify-center items-center font-roboto">
            <div className="min-h-screen lg:max-w-5xl mx-5 pb-10">
                <div className="py-20">
                    <h1 className="text-5xl text-center text-[#6532FF] font-bold">About Me</h1>
                    <motion.p
                        initial={{ width: 0 }}
                        whileInView={{ width: 240 }}
                        transition={{ duration: 1 }}
                        className=" m-auto border-2 mt-2 rounded-full border-[#6532FF]"></motion.p>
                </div>
                <div className="flex flex-col lg:flex-row justify-between">
                    <div className="lg:w-[40%]">
                        <Image className="w-96 h-96  rounded-xl" src={"/about/kalidash.jpg"} alt="Kalidash Odekare" width={500} height={300} />
                    </div>
                    <div className="lg:w-[50%]">
                        <p className="text-[#f0efefbb] leading-7 text-[17px] p-5 lg:p-0">I am a Frontend Developer specializing in React.js, Next.js, and Tailwind CSS, with a strong focus on building user-friendly, responsive, and high-performance web applications. I also have hands-on experience with backend technologies such as Node.js, Express.js, and MongoDB, enabling me to contribute effectively to MERN stack development when required. I enjoy transforming UI/UX designs into clean, scalable, and maintainable code while following best practices. I am continuously learning modern web technologies and improving my problem-solving skills. I work well in collaborative team environments, value clean code and clear communication, and aim to grow into a proficient Full Stack Developer within the next five years.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;