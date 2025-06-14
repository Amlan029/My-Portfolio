import React from 'react'
import { CiLinkedin } from 'react-icons/ci'
import { FaGithub } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'

const Footer = () => {
  return (
    <div id='Contact' className='flex justify-around bg-[#465697] text-white p-10 md:p-5 items-center'>
        <div>
            <h1 className='text-2xl md:text-6xl font-bold '>Contact</h1>
            <h3 className='text-sm md:text-2xl font-normal'>Feel Free to reach out</h3>
        </div>
        <ul className='text-sm md:text-xl text-zinc-900'>
            <li className='flex gap-2 items-center'><MdOutlineEmail size={20}/>amlangit111@gmail.com</li>
            <li className='flex gap-2 items-center'><CiLinkedin size={20}/>https://www.linkedin.com/in/amlan-mukherjee-240063227/</li>
            <li className='flex gap-2 items-center'><FaGithub size={20}/>Amlan029</li>
        </ul>  
    </div>
  )
}

export default Footer