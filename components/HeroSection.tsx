import React from 'react';
import { IoCodeSlashSharp } from 'react-icons/io5';

const HeroSection = () => {
    return (
        <div className='min-h-screen bg-[#161f2d] font-roboto flex flex-col items-center justify-center h-full'>
            <div className='flex flex-col items-center gap-6'>
                <p className='text-white text-[20px]'>Frontend Developer</p>
                <h1 className='text-white text-7xl font-bold leading-tight'>
                    <span className='bg-linear-to-r from-violet-400 via-violet-400 to-violet-400 bg-clip-text text-transparent animate-linear'>Kalidash Odekare</span>
                </h1>
                {/* text-[#f95738] */}
                <h3 className='text-[#bbbbbb] text-[22px]'>Building Beautiful & Functional Web Interfaces</h3>
                <div className='flex items-center gap-4'>
                    <div className='font-semibold flex items-center gap-1 text-[#d4d4d4] bg-[#411f80] rounded-2xl p-2'>
                        <IoCodeSlashSharp />
                        <p>Clean Code</p>
                    </div>
                    <div className='font-semibold flex items-center gap-1 text-[#d4d4d4] bg-[#411f80] rounded-2xl p-2'>
                        <IoCodeSlashSharp />
                        <p>User Friendly</p>
                    </div>
                    <div className='font-semibold flex items-center gap-1 text-[#d4d4d4] bg-[#411f80] rounded-2xl p-2'>
                        <IoCodeSlashSharp />
                        <p>Interactive UI</p>
                    </div>
                </div>
                <div>
                    <button className='bg-violet-600 px-7 py-3 rounded-3xl font-semibold cursor-pointer text-[#f3f3f3]'>Show Project</button>
                    <button className='ml-4 border border-violet-600 px-7 py-3 rounded-3xl font-semibold cursor-pointer text-[#f3f3f3]'>Contact Us</button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;