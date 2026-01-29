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
import { FaArrowLeft, FaCheck, FaGithub } from 'react-icons/fa';
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
            "https://i.postimg.cc/52YscWJK/a1.png",
            "https://i.postimg.cc/W1F5RcVS/a2.png",
            "https://i.postimg.cc/8zJZ8gGH/a3.png",
            "https://i.postimg.cc/zGbxmYNg/a4.png",
            "https://i.postimg.cc/Qd9fLZDc/a5.png",
            "https://i.postimg.cc/TYHtHYzc/a6.png",
        ],
        "title": "Adoply – Pet Adoption Platform",
        "overview": "Adoptly is a team-based MERN Stack project for pet adoption, featuring smart filtering, Firebaseauthentication, and role-based dashboards for users and admins.",
        "skills": [
            "Next.js",
            "Tailwind CSS",
            "Firebase Auth",
            "Tanstack Query",
        ],
        "features": [
            "Responsive home page sections and core application pages",
            "All Pets listing and detailed Pet Details pages",
            "Efficient API integration with loading, error, and caching handling",
            "Secure user dashboard with protected routes and role-based access",
            "Dark mode support with toggle and persistent user preferences"
        ],
        "liveLink": "https://adoptly-team-project.vercel.app",
        "frontendCode": "https://github.com/Mehedi86/adoptly-team-project",
        "backendCode": ""
    },
    {
        "id": 3,
        "images": [
            "https://i.postimg.cc/zGmQpfZG/img-1.png",
            "https://i.postimg.cc/vZRKXmFw/img-2.png",
            "https://i.postimg.cc/hPJFpwXm/img-3.png",
        ],
        "title": "HealthCare – Online Medical Service Platform",
        "overview": "The Healthcare project is designed for patients. Here, you can easily book doctor appointments online without any hassle, make payments if required, and receive doctor consultations and treatments. Patients can view their booked appointments, and there is a dashboard that the admin can control.",
        "skills": [
            "Next.js",
            "Tailwind CSS",
            "Tanstack Query",
            "NextAuth.js",
            "Node.js",
            "Express.js",
            "MongoDB"
        ],
        "features": [
            "Doctor search and filtering by name, department, and specialization",
            "Online doctor appointment booking with optional payment system",
            "Online doctor consultation and treatment support",
            "Admin dashboard for managing doctors, patients, and appointments",
            "Admin analytics to track revenue, total patients, doctors, and appointments",
            "Full administrative control over the entire system"
        ],
        "liveLink": "https://health-care14.vercel.app",
        "frontendCode": "https://github.com/kalidashodekare14/HealthCare",
        "backendCode": ""
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
                <Link href="/" className='flex items-center gap-2 text-[#9045F8] mb-5 hover:underline w-fit'>
                    <div className='mx-5 flex items-center gap-2 text-xl text-[#be5cff] cursor-pointer'>
                        <FaArrowLeft />
                        <h1>Back to Project</h1>
                    </div>
                </Link>
                <div className='my-10 mx-5'>
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
                <div className='mx-5'>
                    {/* Project Title */}
                    <h2 className='text-4xl font-bold mb-4'>{projectData.title}</h2>
                    <div>
                        {projectData.skills.map((skill, index) => (
                            <span key={index} className="inline-block bg-[#6732b1] text-sm px-3 py-1 rounded-full mr-2 mb-2">
                                {skill}
                            </span>
                        ))}
                    </div>
                    {/* Project Links */}
                    <div className='flex flex-wrap gap-5 my-4 lg:space-x-4'>
                        <Link href={projectData.liveLink} target="_blank">
                            <motion.button
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0px 5px 15px #9045F8",
                                    cursor: "pointer"
                                }}
                                transition={{
                                    duration: 0.2
                                }}
                                // bg-violet-600
                                className='flex items-center gap-2 bg-[#9045F8] px-5 py-3 rounded-xl font-semibold cursor-pointer text-[#f3f3f3]'>
                                <FaDisplay />
                                <span>Live Project</span>
                            </motion.button>
                        </Link>
                        <Link href={projectData.frontendCode} target="_blank">
                            <motion.button
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0px 5px 15px #9045F8",
                                    cursor: "pointer"
                                }}
                                transition={{
                                    duration: 0.2
                                }}
                                className='flex items-center gap-2 lg:ml-2 border border-[#9045F8] px-5 py-3 rounded-xl font-semibold cursor-pointer text-[#f3f3f3]'>
                                <FaGithub />
                                <span>Frontend Code</span>
                            </motion.button>
                        </Link>
                        <Link href={projectData.backendCode} target="_blank">
                            <motion.button
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0px 5px 15px #9045F8",
                                    cursor: "pointer"
                                }}
                                transition={{
                                    duration: 0.2
                                }}
                                className='flex items-center gap-2 lg:ml-2 border border-[#9045F8] px-5 py-3 rounded-xl font-semibold cursor-pointer text-[#f3f3f3]'>
                                <AiFillDatabase />
                                <span>Backend Code</span>
                            </motion.button>
                        </Link>
                    </div>
                </div>
                {/* Project Overview */}
                <div className='my-10 mx-5'>
                    <h3 className='text-3xl font-semibold mb-2'>Overview</h3>
                    <p className='text-gray-300'>{projectData.overview}</p>
                </div>
                {/* Project Features */}
                <div className='mb-6 mx-5'>
                    <h3 className='text-3xl font-semibold mb-2'>Key Features</h3>
                    <div className='list-disc list-inside text-gray-300'>
                        {projectData.features.map((feature, index) => (
                            <div className='flex items-center gap-2 mb-2' key={index}>
                                <IoIosCheckmarkCircleOutline className='text-2xl text-[#9045F8]' />
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