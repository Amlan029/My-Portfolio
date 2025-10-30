import React from 'react'
import ProjectCard from './ProjectCard'
import stonePaperScissor from '../../assets/stonePaperScissor.png';
import CurrImg from '../../assets/currencyC.png'
import DA from '../../assets/DocAppo.png'
import FF from "../../assets/feedformly.png"
const Projects = () => {
  return (
    <div id='Projects' className='p-10 md:p-24 text-white'>
        <h1 className='text-2xl md:text-4xl text-white font-bold'>Projects</h1>
        <div className='py-12 px-8 flex flex-wrap gap-5 justify-center '>
            <ProjectCard title="Stone Paper Scissor Game" main="A simple and fun game built using HTML5, CSS3, and JavaScript where the player competes with the computer in a classic Stone Paper Scissor match."
            ImgSrc={stonePaperScissor} CodeLink='https://github.com/Amlan029/stonePaperScissors' DemoLink='https://amlan029.github.io/stonePaperScissors/'/>
            <ProjectCard title="Currency Mine" main="A front-end currency-converter app built with the React js. It allows users to get a particular currency value to another with real-time data and clean UI." ImgSrc={CurrImg} CodeLink='https://github.com/Amlan029/Currency-converter' DemoLink='https://currency-converter-mine.netlify.app/'/>
            <ProjectCard title="Wellness Hub" main="A doctor appointment booking web app built with the MERN stack. Users can find doctors by specialty and schedule appointments through a secure interface." ImgSrc={DA} CodeLink='https://github.com/Amlan029/WELLNESSHUB' DemoLink='https://well-ness-hub.netlify.app/'/>
            <ProjectCard title="Feed Formly" main="FeedFormly is a modern Next.js platform that lets users send and receive anonymous messages securely. Share your profile link, get honest feedback, and connect with others — all while keeping your identity private." ImgSrc={FF} CodeLink='https://github.com/Amlan029/FeedFormly' DemoLink='https://feed-formly-ehrg.vercel.app/'/>
        </div>
    </div>
  )
}

export default Projects
