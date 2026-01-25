"use client"
import React, { useEffect, useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import { Link } from 'react-scroll'

const Navbar = () => {

    const [toggle, setToggle] = useState<boolean>(false)
    const [isSticky, setIsSticky] = useState<boolean>(false)

    const handleToggle = () => {
        setToggle(!toggle)
    }


    useEffect(() => {
        const handleScroll = () => {
            const isTop = window.scrollY < 150;
            setIsSticky(!isTop)
        }
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])


    const navgicaton = [
        {
            "id": 1,
            "name": "Home",
            "path": "hero"
        },
        {
            "id": 2,
            "name": "About",
            "path": "about"
        },
        {
            "id": 3,
            "name": "Skills",
            "path": "skills"
        },
        {
            "id": 4,
            "name": "Projects",
            "path": "projects"
        },
        {
            "id": 5,
            "name": "Contact Us",
            "path": "contact"
        },
    ]
    const links = <>
        <li className='font-rubik'>
            <Link
                to="hero"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                activeClass="border-b-2 text-[#A684FF] border-[#A684FF] rounded-none"
                className={'text-white cursor-pointer dark:text-black'}>
                Home
            </Link>
        </li>
        <li className='font-rubik'>
            <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-80}
                activeClass="border-b-2 text-[#A684FF] border-[#A684FF] rounded-none"
                duration={500}
                className={'text-white cursor-pointer dark:text-black'}>
                About Me
            </Link>
        </li>
        <li className='font-rubik'>
            <Link
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass="border-b-2 text-[#A684FF] border-[#A684FF] rounded-none"
                className={'text-white cursor-pointer dark:text-black'}>
                My Skills
            </Link>
        </li>
        <li className='font-rubik'>
            <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
                activeClass="border-b-2 text-[#A684FF] border-[#A684FF] rounded-none"
                className={'text-white cursor-pointer dark:text-black'}>
                Projects
            </Link>
        </li>
        <li className='font-rubik'>
            <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                activeClass="border-b-2 text-[#A684FF] border-[#A684FF] rounded-none"
                className={'text-white cursor-pointer dark:text-black'}>
                Contact Us
            </Link>
        </li>
    </>

    return (
        <div className={`sticky top-0 z-50  text-[#f5f5f5] shadow-xl backdrop-blur-lg transition-all duration-300 opacity-100 bg-[#01161e]`}>
            <nav className={` z-50 w-full lg:px-32 px-3 flex justify-between py-3 font-roboto font-extralight`}>
                <div className='flex items-center gap-20'>
                    <h1 className='text-3xl'>
                        Portfolio
                    </h1>
                    <ul className='hidden lg:flex items-center space-x-3 gap-5 text-[16px] font-normal'>
                        {links}
                    </ul>
                </div>
                <div className='flex items-center gap-5 text-[19px]'>
                    <IoSearchOutline className='hidden lg:flex' />
                </div>
                <ul className={`z-50 absolute left-0 p-5 lg:hidden  bg-[#307bc4] text-white w-full flex flex-col  gap-5 text-[19px] font-light translate-y-14 duration-700  ${toggle ? "translate-x-0" : "-translate-x-full"}`}>
                    {links}
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;