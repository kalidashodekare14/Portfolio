"use client";
import { motion } from "motion/react";
import { FaDatabase, FaLink, FaLock } from "react-icons/fa";
import { IoColorPalette, IoRocket, IoSettingsSharp } from "react-icons/io5";

const Services = () => {
  return (
    <div
      id="skills"
      className="-mt-px relative font-rubik overflow-hidden bg-[#0D1317] dark:bg-white"
    >
      <div className="xl:max-w-7xl lg:max-w-5xl max-w-6xl m-auto lg:m-auto mx-5">
        <motion.div
          initial={{
            y: -50,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
            delay: 0.5,
          }}
          viewport={{ once: true }}
          className="flex items-center gap-2 text-xl py-14"
        >
          <p className="w-14 border-2 border-[#6532FF]" />
          <p className="text-white dark:text-[#000000bb]">Services</p>
          <p className="w-14 border-2 border-[#6532FF]" />
        </motion.div>
        <div className="relative z-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          <motion.div
            initial={{
              y: -50,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
              delay: 0.6,
            }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{
                y: 0,
              }}
              whileHover={{
                y: -8,
                boxShadow: "0px 5px 10px #512EB9",
              }}
              transition={{
                duration: 0.3,
              }}
              className="text-white dark:text-black border border-[#63519b] rounded-xl p-5 "
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="text-2xl bg-[#6532FF] p-3 rounded-full">
                  <IoRocket />
                </div>
                <h3 className="text-xl dark:text-black">
                  Full Stack Web Development
                </h3>
              </div>
              <p className="text-[#f1f1f1bb] dark:text-[#2b2b2b]">
                Build scalable and responsive web applications using the MERN
                stack.
              </p>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{
              y: -50,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
              delay: 0.6,
            }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{
                y: 0,
              }}
              whileHover={{
                y: -8,
                boxShadow: "0px 5px 10px #512EB9",
              }}
              transition={{
                duration: 0.3,
              }}
              className="text-white dark:text-black border border-[#63519b] rounded-xl p-5 "
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="text-2xl bg-[#6532FF] p-3 rounded-full">
                  <IoColorPalette />
                </div>
                <h3 className="text-xl dark:text-black">
                  Frontend Development
                </h3>
              </div>
              <p className="text-[#f1f1f1bb] dark:text-[#2b2b2b]">
                Create clean and interactive user interfaces with React and
                Next.js.
              </p>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{
              y: -50,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
              delay: 0.7,
            }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{
                y: 0,
              }}
              whileHover={{
                y: -8,
                boxShadow: "0px 5px 10px #512EB9",
              }}
              transition={{
                duration: 0.3,
              }}
              className="text-white border border-[#63519b] rounded-xl p-5 "
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="text-2xl bg-[#6532FF] p-3 rounded-full">
                  <IoSettingsSharp />
                </div>
                <h3 className="text-xl dark:text-black">Backend Development</h3>
              </div>
              <p className="text-[#f1f1f1bb] dark:text-[#2b2b2b]">
                Develop secure APIs and server-side logic using Node.js and
                Express.
              </p>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{
              y: -50,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
              delay: 0.8,
            }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{
                y: 0,
              }}
              whileHover={{
                y: -8,
                boxShadow: "0px 5px 10px #512EB9",
              }}
              transition={{
                duration: 0.3,
              }}
              className="text-white border border-[#63519b] rounded-xl p-5 "
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="text-2xl bg-[#6532FF] p-3 rounded-full">
                  <FaDatabase />
                </div>
                <h3 className="text-xl dark:text-black">Database Management</h3>
              </div>
              <p className="text-[#f1f1f1bb] dark:text-[#2b2b2b]">
                Design and manage efficient MongoDB databases.
              </p>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{
              y: -50,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
              delay: 0.9,
            }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{
                y: 0,
              }}
              whileHover={{
                y: -8,
                boxShadow: "0px 5px 10px #512EB9",
              }}
              transition={{
                duration: 0.3,
              }}
              className="text-white border border-[#63519b] rounded-xl p-5 "
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="text-2xl bg-[#6532FF] p-3 rounded-full">
                  <FaLock />
                </div>
                <h3 className="text-xl dark:text-black">
                  Authentication System
                </h3>
              </div>
              <p className="text-[#f1f1f1bb] dark:text-[#2b2b2b]">
                Implement secure authentication and role-based access control.
              </p>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{
              y: -50,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
              delay: 1.01,
            }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{
                y: 0,
              }}
              whileHover={{
                y: -8,
                boxShadow: "0px 5px 10px #512EB9",
              }}
              transition={{
                duration: 0.3,
              }}
              className="text-white border border-[#63519b] rounded-xl p-5 "
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="text-2xl bg-[#6532FF] p-3 rounded-full">
                  <FaLink />
                </div>
                <h3 className="text-xl dark:text-black">API Integration</h3>
              </div>
              <p className="text-[#f1f1f1bb] dark:text-[#2b2b2b]">
                Integrate REST APIs and third-party services smoothly.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <motion.div className="z-10 absolute top-0 left-10 w-60 h-50 rounded-full bg-[#6532FF] opacity-50 blur-[140px]"></motion.div>
      <motion.div className="z-10 absolute top-50 left-[40%] w-80 h-80 rounded-full bg-[#6532FF] opacity-20 blur-[160px]"></motion.div>
      <motion.div className="z-10 absolute -bottom-20 left-0 w-50 h-50 rounded-full bg-[#6532FF] opacity-50 blur-[140px]"></motion.div>
    </div>
  );
};

export default Services;
