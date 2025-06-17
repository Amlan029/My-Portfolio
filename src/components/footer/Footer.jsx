import React from 'react'
import { CiLinkedin } from 'react-icons/ci'
import { FaGithub } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'

const Footer = () => {
  return (
    <div id='Contact' className='bg-[#465697] text-white p-6 md:p-10'>
      <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-6'>
        
        
        <div>
          <h1 className='text-2xl md:text-4xl font-bold'>Contact</h1>
          <h3 className='text-sm md:text-lg font-normal'>Feel free to reach out</h3>
        </div>

        
        <ul className='text-sm md:text-base space-y-3'>
          <li className='flex items-center gap-2'>
            <MdOutlineEmail size={20} color='#000000'/> 
            <span>amlangit111@gmail.com</span>
          </li>
          <li className='flex items-center gap-2 break-all'>
            <CiLinkedin size={20} color="#000000"/> 
            <span>https://www.linkedin.com/in/amlan-mukherjee-240063227/</span>
          </li>
          <li className='flex items-center gap-2'>
            <FaGithub size={20} color="#000000"/> 
            <span>Amlan029</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer