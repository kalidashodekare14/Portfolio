"use client"

import Image from "next/image";

const AboutMe = () => {
    return (
        <div className="-mt-px bg-[#161E2D] flex flex-col justify-center items-center font-roboto">
            <div className="min-h-screen max-w-6xl pb-10">
                <h1 className="text-5xl py-20 text-center text-[#7F22FE] font-bold">About Me</h1>
                <div className="flex flex-col lg:flex-row">
                    <div className="lg:flex-1">
                        <Image className="w-115 h-120 rounded-2xl" src={"/about/kalidash.jpg"} alt="Kalidash Odekare" width={500} height={300} />
                    </div>
                    <div className="lg:flex-1 border">
                        <p className="text-[#f0efefbb] text-[18px] p-5 lg:p-0">I am a Frontend Developer specializing in React.js, Next.js, and Tailwind CSS, with a strong focus on building user-friendly, responsive, and high-performance web applications. I also have hands-on experience with backend technologies such as Node.js, Express.js, and MongoDB, enabling me to contribute effectively to MERN stack development when required. I enjoy transforming UI/UX designs into clean, scalable, and maintainable code while following best practices. I am continuously learning modern web technologies and improving my problem-solving skills. I work well in collaborative team environments, value clean code and clear communication, and aim to grow into a proficient Full Stack Developer within the next five years.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;