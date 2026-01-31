"use client"
import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { IoSearchOutline } from 'react-icons/io5';
import { Link } from 'react-scroll'

const Navbar = () => {

    const [toggle, setToggle] = useState<boolean>(false)
    const [isSticky, setIsSticky] = useState<boolean>(false)
    const [isTheme, setIsTheme] = useState('dark')

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


    useEffect(() => {
        const shortedTheme = localStorage.getItem('theme')
        if (shortedTheme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
            setIsTheme('light')
        }
    }, [isTheme])


    const handleThemeToggle = () => {
        const newTheme = isTheme === 'dark' ? 'light' : 'dark'
        setIsTheme(newTheme)
        if (isTheme === 'dark') {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', newTheme)
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', newTheme)
        }
    }



    const links = <>
        <li className='font-rubik'>
            <Link
                to="hero"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                activeClass="border-b-2 text-[#9577ED]! font-bold border-[#9577ED] rounded-none"
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
                activeClass="border-b-2 text-[#9577ED]! font-bold border-[#9577ED] rounded-none"
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
                activeClass="border-b-2 text-[#9577ED]! font-bold border-[#9577ED] rounded-none"
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
                activeClass="border-b-2 text-[#9577ED]! font-bold border-[#9577ED] rounded-none"
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
                activeClass="border-b-2 text-[#9577ED]! font-bold border-[#9577ED] rounded-none"
                className={'text-white cursor-pointer dark:text-black'}>
                Contact Us
            </Link>
        </li>
    </>

    return (
        <div className={`sticky top-0 z-50  text-[#f5f5f5] shadow-xl backdrop-blur-lg transition-all duration-300 opacity-100 bg-[#01161e] dark:bg-white`}>
            <nav className={` z-50 max-w-6xl m-auto px-3 flex justify-between py-3 font-roboto font-extralight`}>
                <div className='flex items-center gap-20'>
                    <h1 className='text-3xl'>
                        <img className='w-52' src="/logo.png" alt="" />
                    </h1>
                    <ul className='hidden lg:flex items-center space-x-3 gap-5 text-[16px] font-normal'>
                        {links}
                    </ul>
                </div>
                <div>
                    <label className="swap swap-rotate">
                        {/* this hidden checkbox controls the state */}
                        <input
                            checked={isTheme === 'dark'}
                            onClick={handleThemeToggle}
                            readOnly
                            type="checkbox"
                            className="theme-controller"
                            value="synthwave" />

                        {/* sun icon */}
                        <svg
                            className="swap-on h-10 w-10 fill-current text-[#ffbf69]"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                        </svg>

                        {/* moon icon */}
                        <svg
                            className="swap-off h-9 w-9 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                        </svg>
                    </label>
                </div>
                <div className='flex items-center gap-5 text-[19px]'>
                    {
                        toggle ? (
                            <IoMdClose onClick={handleToggle} className='text-white dark:text-[#363d4b] text-2xl lg:hidden' />
                        ) : (

                            <FaBars onClick={handleToggle} className='text-white dark:text-[#363d4b] lg:hidden' />
                        )
                    }
                </div>
                <ul className={`z-50 absolute left-0 p-5 lg:hidden  bg-[#7b50fd]  text-white dark:text-[#363d4b] w-full flex flex-col  gap-5 text-[19px] font-light translate-y-10 duration-700  ${toggle ? "translate-x-0" : "-translate-x-full "}`}>
                    {links}
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;