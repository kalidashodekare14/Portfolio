"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="-mt-px bg-[#161E2D] dark:bg-white">
      <div className="xl:max-w-7xl lg:max-w-5xl max-w-6xl m-auto font-roboto">
        <div className="flex flex-col sm:flex-row items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <img className="w-14" src="/singel_logo.png" alt="" />
            <p className="text-[17px] dark:text-[#363d4b]">
              Kalidash Odekare © {new Date().getFullYear()} - All right reserved
            </p>
          </div>
          <div className="flex items-center gap-4 mt-4 sm:mt-0">
            <Link
              href={"https://www.linkedin.com/in/kalidash-odekare-webdev"}
              target="_blank"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-[#4e27c2] text-[#ccc] cursor-pointer p-3 rounded-full text-[19px]"
              >
                <FaLinkedinIn />
              </motion.div>
            </Link>
            <Link
              href={"https://github.com/kalidashodekare14"}
              target="_blank"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-[#4e27c2] text-[#ccc]  cursor-pointer p-3 rounded-full text-[19px]"
              >
                <FaGithub />
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
