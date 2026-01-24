"use client"
import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IoSearchOutline } from 'react-icons/io5';

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
            "id": "1",
            "name": "Home",
            "path": "/"
        },
        {
            "id": "2",
            "name": "About",
            "path": "/about"
        },
        {
            "id": "3",
            "name": "Service",
            "path": "/services"
        },
        {
            "id": "4",
            "name": "Project",
            "path": "/doctors"
        },
        {
            "id": "5",
            "name": "Contact Us",
            "path": "/blog"
        },
    ]


    return (
        <div className={`sticky top-0 z-50  text-[#f5f5f5] shadow-xl backdrop-blur-lg transition-all duration-300 opacity-100 bg-[#01161e]`}>
            <nav className={` z-50 w-full lg:px-32 px-3 flex justify-between py-3 font-roboto font-extralight`}>
                <div className='flex items-center gap-20'>
                    <h1 className='text-3xl'>
                        Portfolio
                    </h1>
                    <ul className='hidden lg:flex items-center gap-5 text-[16px] font-normal'>
                        {
                            navgicaton.map((navi) => (
                                <li className='font-rubik'>{navi.name}</li>
                            ))
                        }
                    </ul>
                </div>
                <div className='flex items-center gap-5 text-[19px]'>
                    <IoSearchOutline className='hidden lg:flex' />
                </div>
                <ul className={`z-50 absolute left-0 p-5 lg:hidden  bg-[#307bc4] text-white w-full flex flex-col  gap-5 text-[19px] font-light translate-y-14 duration-700  ${toggle ? "translate-x-0" : "-translate-x-full"}`}>
                    {
                        navgicaton.map((navi) => (
                            <li className='font-rubik'>{navi.name}</li>
                        ))
                    }
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;