"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { GrTechnology } from "react-icons/gr";
import { IoLogoGithub } from "react-icons/io5";
import { RiApps2Line } from "react-icons/ri";
import { TiExport } from "react-icons/ti";

const projects = [
  {
    title: "HelpLink",
    sub_title: "MERN Stack Disaster Relief Application",
    image: "/project/helplink.png",
    link: "/projects/1",
    liveLInk: "https://helplink-frontend.vercel.app",
    githubLink: "https://github.com/kalidashodekare14/HelpLink_Frontend",
    tech: ["Next.js", "TypeScript", "Tailwind", "Node.js", "Express"],
  },
  {
    title: "Adoply",
    sub_title: "MERN Stack Pet Adoption Application",
    image: "/project/adoply.png",
    link: "/projects/2",
    liveLInk: "https://adoptly-team-project.vercel.app",
    githubLink: "https://github.com/Mehedi86/adoptly-team-project",
    tech: ["Next.js", "Tailwind", "Node.js", "Express", "MongoDB"],
  },
  {
    title: "HealthCare",
    sub_title: "Doctor Appointment System",
    image: "/project/healthcare.png",
    link: "/projects/3",
    liveLInk: "https://health-care14.vercel.app",
    githubLink: "https://github.com/kalidashodekare14/HealthCare",
    tech: ["Next.js", "Tailwind", "Node.js", "Express", "MongoDB"],
  },
];

/* ===== VARIANTS ===== */
const card = {
  rest: { y: 0, scale: 1 },
  hover: { y: -6, scale: 1.01 },
};

const image = {
  rest: { scale: 1 },
  hover: { scale: 1.08 },
};

const Projects = () => {
  return (
    <section id="projects" className="relative bg-[#0D1317] dark:bg-white py-20 flex flex-col items-center">
      {/* TITLE */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-white dark:text-black">
          Projects
        </h2>
        <div className="w-20 h-1 bg-[#6532FF] mx-auto mt-2 rounded-full" />
      </motion.div>

      {/* GRID */}
      <div className="max-w-6xl w-full grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-5">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            variants={card}
            initial="rest"
            whileInView="rest"
            whileHover="hover"
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.25,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="group bg-[#0e141f] dark:bg-white border border-white/10 rounded-2xl shadow-lg overflow-hidden"
          >
            {/* IMAGE */}
            <div className="overflow-hidden">
              <motion.div
                variants={image}
                transition={{
                  duration: 1.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Image
                  src={p.image}
                  alt={p.title}
                  width={500}
                  height={400}
                  className="w-full h-52 object-cover"
                />
              </motion.div>
            </div>

            {/* CONTENT */}
            <div className="p-5 space-y-3">
              <h2 className="text-xl font-semibold text-white dark:text-gray-800">
                {p.title}
              </h2>

              <div className="text-[15px] text-gray-400 dark:text-gray-600 leading-relaxed flex items-center gap-2">
                <span>
                  <RiApps2Line />
                </span>
                <span>{p.sub_title}</span>
              </div>
              <div className="text-white flex items-center gap-2">
                <GrTechnology />
                <p className="font-semibold">Tech Stack</p>
              </div>
              <div className="w-full h-[0.2px] bg-[#535252bb]"></div>
              {/* TECH */}
              <div className="flex flex-wrap gap-2">
                {p.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 rounded-full bg-white/10 dark:bg-black/5 border border-white/10 text-gray-300 dark:text-gray-600"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-5">
                {/* BUTTON */}
                <Link href={p.link}>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.2 }}
                    className="w-48 mt-3 py-2 rounded-xl bg-[#4e27c2] hover:bg-[#5a32d6] text-white"
                  >
                    View Details
                  </motion.button>
                </Link>
                <div className="min-w-10 h-10 flex justify-center items-center text-[#b4b4b4] bg-[#272C36] text-2xl border rounded-full cursor-pointer hover:border-[#4e27c2] hover:bg-[#2e1d5f] duration-300">
                  <TiExport />
                </div>
                <div className="min-w-10 h-10 flex justify-center items-center text-[#b4b4b4] bg-[#272C36] text-2xl border rounded-full cursor-pointer hover:border-[#4e27c2] hover:bg-[#2e1d5f] duration-300">
                  <IoLogoGithub />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* MORE */}
      <Link href="/projects">
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="mt-12 px-6 py-2 border border-[#7f5ee0] text-gray-400 rounded-xl"
        >
          More Projects
        </motion.button>
      </Link>

      {/* GLOW */}
      <div className="absolute top-0 left-10 w-60 h-60 bg-[#6532FF] opacity-20 blur-[120px]" />
    </section>
  );
};

export default Projects;
