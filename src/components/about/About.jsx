import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { IoArrowForward } from "react-icons/io5"
import React from 'react'

const About = () => {
  return (
    <div className='text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12'>
        <div>
        <h2 className='text-2xl md:text-4xl font-bold'>About</h2>
            <div className='md:flex flex-wrap flex-col md:flex-row items-center' id='About'>
                <DotLottieReact
                className='md:h-50'
                src="https://lottie.host/3f829011-537b-4c68-bc57-7bc93a1404f4/RUKNI7bFNc.lottie"
                loop
                autoplay
                />
                <ul>
                    <div className='flex gap-3 py-4'>
                        <IoArrowForward size={30} className='mt-1'/>
                        <span className='w-96'>
                            <h1 className='text-xl md:text-2xl font-semibold  leading-normal'>Frontend Developer</h1>
                            <p className='text-sm md:text-md leading-tight'>Skilled in crafting responsive and dynamic user interfaces using React.js, Bootstrap, and Tailwind CSS. Experienced in building intuitive, mobile-first designs for apps like Task Manager and Wellness Hub. Passionate about clean code and seamless user experiences.</p>
                        </span>
                    </div>
                    <div className='flex gap-3 py-4'>
                        <IoArrowForward size={30} className='mt-1'/>
                        <span className='w-96'>
                            <h1 className='text-xl md:text-2xl font-semibold  leading-normal'>Backend Developer</h1>
                            <p className='text-sm md:text-md leading-tight'>Strong foundation in Node.js and Express.js for building scalable, RESTful APIs. Developed robust backend systems for full-stack apps with secure authentication and CRUD operations. Emphasizes performance and maintainability.</p>
                        </span>
                    </div>
                    <div className='flex gap-3 py-4'>
                        <IoArrowForward size={30} className='mt-1'/>
                        <span className='w-96'>
                            <h1 className='text-xl md:text-2xl font-semibold  leading-normal'>Database Developer</h1>
                            <p className='text-sm md:text-md leading-tight'>Proficient in MongoDB and MySQL for handling structured and NoSQL data. Designed and implemented efficient schemas for projects such as Expense Tracker and Doctor Appointment System, ensuring data integrity and optimized querying.</p>
                        </span>
                    </div>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default About