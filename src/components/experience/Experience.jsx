import { RiNetflixFill } from '@remixicon/react';
import React from 'react'
import { FaHtml5, FaCss3, FaJs, FaNode, FaGithub, FaGitAlt, FaReact, FaGoogle } from 'react-icons/fa';
import { SiMongodb, SiMysql, SiPostman, SiTailwindcss, SiBootstrap } from 'react-icons/si';
const Experience = () => {
  return (
    <div id='Experience' className='p-10 md:p-24'>
        <h1 className='text-2xl md:text-4xl text-white font-bold'>Experience</h1>
        <div className='flex flex-wrap items-center justify-around'>
            <div className='flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10'>
                <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                    <FaHtml5  color="#E34F26" size={50}/>
                </span>
                <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                    <FaCss3  color="#1572b6" size={50}/>
                </span>
                <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                    <FaJs  color="#F7DF1E" size={50}/>
                </span>
                <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                    <FaReact  color="#61DAFB" size={50}/>
                </span>
                <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                    <FaNode  color="#47A248" size={50}/>
                </span>
                <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                    <SiMongodb  color="#47A248" size={50}/>
                </span>
                <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                    <SiMysql  color="#e48e00" size={50}/>
                </span>
                <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                    <FaGitAlt  color="#f14e32" size={50}/>
                </span>
                <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                    <FaGithub  className='' color="#FFFFFF" size={50}/>
                </span>
                <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                    <SiPostman  color="#ff6c37" size={50}/>
                </span>
                <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                    <SiTailwindcss  color="#1572b6" size={50}/>
                </span>
                <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                    <SiBootstrap  color="#9933ff" size={50}/>
                </span>
            </div>
            <div>
            {/* Experience section start here */}
            <div className='flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center'>
                <img src="/Devtown-logo.png" alt="DevTown Logo" className="w-10 h-10" />
                <span className='text-white '>
                    <h2 className='loading-tight'>Full Stack Web Developer, Devtown</h2>
                    <p className='text-sm loading-tight font-thin'>Nov 2023 - Feb 2024</p>
                    <ul className='text-sm p-2'>
                        <li>- Work as Web developer</li>
                        {/* <li>Senior SDE developer</li> */}
                    </ul>
                </span>
            </div>
            {/* Experience section ends here */}
            {/* Experience section start here */}
            {/* <div className='flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center'>
                <RiNetflixFill color='#E50914' size={50}/>
                <span className='text-white '>
                    <h2 className='loading-tight'>Software Engineer, Google</h2>
                    <p className='text-sm loading-tight font-thin'>Nov 2023 - Feb 2024</p>
                    <ul className='text-sm p-2'>
                        <li>Work as software developer</li>
                        <li>Senior SDE developer</li>
                    </ul>
                </span>
            </div> */}
            {/* Experience section ends here */}
            </div>
        </div>
    </div>
  )
}

export default Experience