"use client";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import { useParams } from 'next/navigation';
import { motion } from "motion/react"
import { FaDisplay } from 'react-icons/fa6';
import { FaCheck, FaGithub } from 'react-icons/fa';
import { AiFillDatabase } from 'react-icons/ai';
import Link from 'next/link';
import { IoShieldCheckmark } from 'react-icons/io5';
import { IoIosCheckmarkCircle, IoIosCheckmarkCircleOutline } from 'react-icons/io';

const projectInfo = [
    {
        "id": 1,
        "images": [
            "https://i.postimg.cc/5NyVnFXZ/project.png",
            "https://i.postimg.cc/fWBscvRp/project2.png",
        ],
        "title": "HelpLink – Disaster Relief Platform",
        "overview": "Every year, during winter, floods and cyclones in Bangladesh, underprivileged people suffer. Many donors want to help but do not know who to help. This project is a MERN Stack web platform that connects donors, receivers, volunteers and admin to ensure timely relief distribution.",
        "skills": [
            "Next.js",
            "TypeScript",
            "Redux Toolkit",
            "Tailwind CSS",
            "Node.js",
            "MongoDB"
        ],
        "features": [
            "Emergency request posting",
            "AI-based emergency detection",
            "Real-time hazard map",
            "Secure payment integration",
            "Role-based access control"
        ],
        "liveLink": "https://helplink.vercel.app",
        "frontendCode": "https://github.com/username/HelpLink_Frontend",
        "backendCode": "https://github.com/username/HelpLink_Backend"
    },
    {
        "id": 2,
        "images": [
            "https://i.postimg.cc/5NyVnFXZ/project.png",
            "https://i.postimg.cc/fWBscvRp/project2.png",
        ],
        "title": "HelpLink – Disaster Relief Platform",
        "overview": "HelpLink is a disaster relief platform that connects affected people with donors and volunteers.",
        "skills": [
            "Next.js",
            "TypeScript",
            "Redux Toolkit",
            "Tailwind CSS",
            "Node.js",
            "MongoDB"
        ],
        "features": [
            "Emergency request posting",
            "AI-based emergency detection",
            "Real-time hazard map",
            "Secure payment integration",
            "Role-based access control"
        ],
        "liveLink": "https://helplink.vercel.app",
        "frontendCode": "https://github.com/username/HelpLink_Frontend",
        "backendCode": "https://github.com/username/HelpLink_Backend"
    },

]


const page = () => {

    const { id } = useParams()
    console.log(id);
    const projectData = projectInfo.filter((p) => p.id === Number(id))[0];
    console.log(projectData);

    return (
        <div className='bg-[#161E2D] text-white'>
            <div className='max-w-5xl m-auto py-10'>
                <h1>Project Details</h1>
                <div className='my-10'>
                    <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                        {
                            projectData.images.map((img, index) => (
                                <SwiperSlide key={index}>
                                    <div className='h-96 rounded-2xl'>
                                        <img src={img} alt={`Project Image ${index + 1}`} className="w-full h-full rounded-2xl object-cover" />
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
                <div>
                    {/* Project Title */}
                    <h2 className='text-4xl font-bold mb-4'>{projectData.title}</h2>
                    <div>
                        {projectData.skills.map((skill, index) => (
                            <span key={index} className="inline-block bg-[#522374] text-sm px-3 py-1 rounded-full mr-2 mb-2">
                                {skill}
                            </span>
                        ))}
                    </div>
                    {/* Project Links */}
                    <div className='flex items-center my-4 space-x-4'>
                        <Link href={projectData.liveLink} target="_blank">
                            <motion.button
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0px 5px 15px #7C25B6",
                                    cursor: "pointer"
                                }}
                                transition={{
                                    duration: 0.2
                                }}
                                // bg-violet-600
                                className='flex items-center gap-2 bg-[#7209b7] px-5 py-3 rounded-xl font-semibold cursor-pointer text-[#f3f3f3]'>
                                <FaDisplay />
                                <span>Live Project</span>
                            </motion.button>
                        </Link>
                        <Link href={projectData.frontendCode} target="_blank">
                            <motion.button
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0px 5px 15px #7C25B6",
                                    cursor: "pointer"
                                }}
                                transition={{
                                    duration: 0.2
                                }}
                                className='flex items-center gap-2 ml-2 border border-[#7209b7] px-5 py-3 rounded-xl font-semibold cursor-pointer text-[#f3f3f3]'>
                                <FaGithub />
                                <span>Frontend Code</span>
                            </motion.button>
                        </Link>
                        <Link href={projectData.backendCode} target="_blank">
                            <motion.button
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0px 5px 15px #7C25B6",
                                    cursor: "pointer"
                                }}
                                transition={{
                                    duration: 0.2
                                }}
                                className='flex items-center gap-2 ml-2 border border-[#7209b7] px-5 py-3 rounded-xl font-semibold cursor-pointer text-[#f3f3f3]'>
                                <AiFillDatabase />
                                <span>Backend Code</span>
                            </motion.button>
                        </Link>
                    </div>
                </div>
                {/* Project Overview */}
                <div className='my-10'>
                    <h3 className='text-3xl font-semibold mb-2'>Overview</h3>
                    <p className='text-gray-300'>{projectData.overview}</p>
                </div>
                {/* Project Features */}
                <div className='mb-6'>
                    <h3 className='text-3xl font-semibold mb-2'>Key Features</h3>
                    <div className='list-disc list-inside text-gray-300'>
                        {projectData.features.map((feature, index) => (
                            <div className='flex items-center gap-2 mb-2' key={index}>
                                <IoIosCheckmarkCircleOutline className='text-2xl text-[#8823cc]' />
                                <span className='text-[17px]' key={index}>{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;    