"use client"

import { motion } from 'motion/react'
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

const Projects = () => {

    const projectInfo = [
        {
            "id": 1,
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
            "id": 2,
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
        {
            "id": 4,
            "images": [
                "https://i.postimg.cc/zGmQpfZG/img-1.png",
                "https://i.postimg.cc/vZRKXmFw/img-2.png",
                "https://i.postimg.cc/hPJFpwXm/img-3.png",
            ],
            "title": "BookZoneBD – E-commerce Platform",
            "overview": "BookZoneBD is a MERN Stack project where book readers can easily browse, search, filter, add to cart, and order books. It features role-based authentication secured via JWT and Firebase.",
            "skills": [
                "React.js",
                "Tailwind CSS",
                "Redux",
                "Firebase",
                "Node.js",
                "Express.js",
                "MongoDB"
            ],
            "features": [
                "Role-Based Secure Authentication : Secure login/registration with JWT and Firebase. Users, authors, and admins get separate functionality.",
                "User Book Interaction & Payment: Users can search and filter books, add them to the cart, and complete orders securely via SSLCommerz payment integration.",
                "Admin Dashboard & Management: Admin can monitor and manage all data from an intuitive dashboard, including books, users, orders, and reviews.",
            ],
            "liveLink": "https://bookzonebd.vercel.app",
            "frontendCode": "https://github.com/kalidashodekare14/BookZoneBD-Client",
            "backendCode": "https://github.com/kalidashodekare14/BookZoneBD-Server"
        },

    ]

    return (
        <div className=''>
            <div className='max-w-6xl m-auto py-10'>
                <Link href="/" className='flex items-center gap-2 text-[#9045F8] mb-5 hover:underline w-fit'>
                    <div className='mx-5 flex items-center gap-2 text-xl text-[#be5cff] cursor-pointer'>
                        <FaArrowLeft />
                        <h1>Back to Project</h1>
                    </div>
                </Link>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
                    {
                        projectInfo.map(project => (
                            <motion.div
                                key={project.id}
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
                            >
                                <motion.div
                                    whileHover={{
                                        scale: 1.02,
                                        boxShadow: "0px 10px 20px #512EB9",
                                    }}
                                    transition={{
                                        duration: 0.2
                                    }}
                                    className="text-white rounded-2xl bg-[#0e141f] dark:bg-white border border-[#bbbb] shadow-lg">
                                    <img className="w-full h-52 rounded-t-2xl" src={project?.images[0]} alt="HelpLink" width={500} height={400} />
                                    <div className="px-5 my-4 space-y-3">
                                        <h2 className="text-3xl text-[#dadada] dark:text-[#363d4b]">{project?.title}</h2>
                                        <p className="text-[#b9b9b9] font-medium dark:text-[#4c566a]">{project?.overview.slice(0, 150)}...</p>
                                        <div className="flex flex-wrap gap-3">
                                            {
                                                project.skills.map(skill => (
                                                    <div className="text-[#d4d3d3] dark:text-[#354461] bg-[#452d8d] dark:bg-[rgb(205,189,255)]  px-2 py-1 rounded-xl">
                                                        <p className="font-medium text-[15px]">{skill}</p>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                        <Link href={`/projects/${project.id}`} >
                                            <motion.button
                                                whileHover={{
                                                    scale: 1.05,
                                                    boxShadow: "0px 5px 30px #4e27c2",
                                                    cursor: "pointer"
                                                }}
                                                transition={{
                                                    duration: 0.2
                                                }}
                                                className='bg-[#401fa1] mt-5 px-5 py-3 rounded-3xl font-semibold cursor-pointer text-[#cacaca]'>
                                                <span>Show Project</span>
                                            </motion.button>
                                        </Link>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Projects;