"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { BiLogoTypescript } from "react-icons/bi";
import { FaJs } from "react-icons/fa";
import { SiReaddotcv } from "react-icons/si";
import { Link as ScrollLink } from "react-scroll";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div
      id="hero"
      className="-mt-px relative bg-grid-pattern dark:bg-grid-pattern-white xl:h-150 lg:h-140 bg-[#0D1317] dark:bg-white overflow-hidden font-roboto flex flex-col items-center lg:justify-center pb-5"
    >
      <div className="relative xl:max-w-7xl lg:max-w-5xl max-w-6xl m-auto p-15 ">
        <div>
          <div className="z-20 flex flex-col items-center gap-6 mt-14 lg:mt-0 ">
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
              className="relative z-20 flex items-center gap-2 text-[#f7f6f6bb]  dark:text-[#8C67FA] text-[18px] border-[0.1px] dark:bg-[#ffffffab] border-[#3d3d3dbb] dark:border-[#c0c0c0bb] p-3 py-1 rounded-3xl"
            >
              <div className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#8C67FA] opacity-75"></span>
                <span className="relative inline-flex size-2 rounded-full bg-[#8C67FA]"></span>
              </div>
              <span>MERN Stack Developer</span>
            </motion.div>
            <motion.h1
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
              className="gap-5 text-white text-[80px] lg:text-[80px] text-center font-bold leading-tight"
            >
              <span className="text-[#9981df] dark:text-[#6532FF]">
                Kalidash Odekare
              </span>
              {/* <span className='bg-linear-to-r from-[#ad6cdb] via-[#9a5dc2] to-[#8c50b4] bg-clip-text text-transparent animate-linear'>Kalidash Odekare</span> */}
            </motion.h1>
            {/* text-[#f95738] */}
            <motion.h3
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
              className="text-[#8d82aa] dark:text-[#686374] text-[20px] lg:text-[20px] text-center lg:w-[65%] w-full"
            >
              Focused on building modern and efficient web applications
            </motion.h3>
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
              className="flex flex-col lg:flex-row gap-4"
            >
              <Link
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 5px 15px #6532FF",
                    cursor: "pointer",
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  // bg-violet-600
                  // bg-[#7209b7]
                  // latest: #9045F8+
                  // 208b3a
                  className="flex w-full items-center bg-[#6532FF] px-9 py-4 rounded-3xl font-semibold cursor-pointer text-[#f3f3f3]"
                >
                  <span>Dawnload Resume</span>
                  <motion.span
                    initial={{ x: 0 }}
                    transition={{
                      duration: 0.5,
                    }}
                    className="ml-2 text-2xl"
                  >
                    <SiReaddotcv />
                  </motion.span>
                </motion.button>
              </Link>
              <ScrollLink
                to="contact"
                spy={true}
                smooth={true}
                offset={-50}
                duration={600}
              >
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 5px 15px #6532FF",
                    cursor: "pointer",
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="lg:ml-4 border w-full border-[#6532FF] px-9 py-4 rounded-3xl font-semibold cursor-pointer text-[#f3f3f3] dark:text-[#6532ff]"
                >
                  Hire Me
                </motion.button>
              </ScrollLink>
            </motion.div>
          </div>
        </div>
        {/* tech icons */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
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
              opacity: 1,
            }}
            animate={{
              y: 6,
              opacity: 0.7,
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: 5,
            }}
            className="hidden lg:flex absolute top-0 left-20 text-[#EFD81C] text-3xl"
          >
            <FaJs />
          </motion.div>
          <motion.div
            initial={{
              y: 0,
              opacity: 1,
            }}
            animate={{
              y: 6,
              opacity: 0.7,
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: 5,
            }}
            className="hidden lg:flex absolute top-0 right-20  p-0 text-[#2F74C0] rounded-full text-4xl"
          >
            <BiLogoTypescript />
          </motion.div>
        </motion.div>
        {/* <motion.div
                    initial={{
                        y: 0,
                        opacity: 1,
                    }}
                    animate={{
                        y: 6,
                        opacity: .7,
                    }}
                    transition={{
                        duration: 1,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                    }}
                    className='hidden lg:flex absolute top-0 left-0 text-[#5ED3F3] text-5xl'>
                    <FaReact />
                </motion.div>
                <motion.div
                    initial={{
                        y: 0,
                        opacity: 1,
                    }}
                    animate={{
                        y: 6,
                        opacity: .7,
                    }}
                    transition={{
                        duration: 1,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                    }}
                    className='hidden lg:flex absolute top-0 right-0 bg-white p-0 text-[#161313] rounded-full text-5xl'>
                    <RiNextjsFill />
                </motion.div>
                <motion.div
                    initial={{
                        y: 0,
                        opacity: 1,
                    }}
                    animate={{
                        y: 6,
                        opacity: .7,
                    }}
                    transition={{
                        duration: 1,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                    }}
                    className='hidden lg:flex absolute z-20 bottom-40 left-5 text-[#5ED3F3] text-5xl'>
                    <RiTailwindCssFill />
                </motion.div>
                <motion.div
                    initial={{
                        y: 0,
                        opacity: 1,
                    }}
                    animate={{
                        y: 6,
                        opacity: .7,
                    }}
                    transition={{
                        duration: 1,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                    }}
                    className='hidden lg:flex absolute z-20 bottom-40 right-5 text-[#7248B6] text-5xl'>
                    <TbBrandRedux />
                </motion.div> */}
      </div>
      {/* Scroll element animation */}
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
          delay: 0.8,
        }}
        viewport={{ once: true }}
      >
        <motion.p
          initial={{
            y: 0,
          }}
          animate={{
            y: 5,
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 6,
          }}
          className="flex justify-center items-center border border-[#bbbb] dark:border-[#383838bb] w-7 h-12 rounded-2xl"
        >
          <motion.p
            initial={{
              y: 0,
            }}
            animate={{
              y: 5,
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className="bg-[#d8d3d3bb] dark:bg-[#494949bb] rounded-xl w-1 h-3"
          ></motion.p>
        </motion.p>
      </motion.div>
      {/* background elements */}
      <motion.div
        initial={{
          opacity: 0.2,
        }}
        // animate={{
        //     opacity: 0.20,
        // }}
        // transition={{
        //     duration: 2,
        // }}
        className="z-10 absolute -bottom-5 right-0 w-50 h-50 rounded-full bg-[#6532FF] opacity-100 blur-[140px]"
      ></motion.div>
      <motion.div
        initial={{
          opacity: 0.3,
        }}
        // animate={{
        //     opacity: 0.30,
        // }}
        // transition={{
        //     duration: 2,
        // }}
        className="z-10 absolute -top-50 left-[40%] w-96 h-96 rounded-full bg-[#6532FF] opacity-100 blur-[140px]"
      ></motion.div>
      <motion.div
        initial={{
          opacity: 0.3,
        }}
        // animate={{
        //     opacity: 0.30,
        // }}
        // transition={{
        //     duration: 2,
        // }}
        className="z-10 absolute -bottom-5 left-0 w-50 h-50 rounded-full bg-[#6532FF] opacity-100 blur-[140px]"
      ></motion.div>
    </div>
  );
};

export default HeroSection;
