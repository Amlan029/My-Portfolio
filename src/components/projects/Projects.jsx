import React from 'react'
import ProjectCard from './ProjectCard'
import stonePaperScissor from '../../assets/stonePaperScissor.png';
import TaskM from '../../assets/TaskMan.png'
import DA from '../../assets/DocAppo.png'
const Projects = () => {
  return (
    <div id='Projects' className='p-10 md:p-24 text-white'>
        <h1 className='text-2xl md:text-4xl text-white font-bold'>Projects</h1>
        <div className='py-12 px-8 flex flex-wrap gap-5 justify-center '>
            <ProjectCard title="Stone Paper Scissor Game" main="A simple and fun game built using HTML5, CSS3, and JavaScript where the player competes with the computer in a classic Stone Paper Scissor match."
            ImgSrc={stonePaperScissor} CodeLink='https://github.com/Amlan029/stonePaperScissors' DemoLink='https://amlan029.github.io/stonePaperScissors/'/>
            <ProjectCard title="Task Manager" main="A full-stack task management app built with the MERN stack. It allows users to add, update, and delete tasks with real-time interaction and clean UI." ImgSrc={TaskM} CodeLink='https://github.com/Amlan029/TASK-MANAGER' DemoLink='https://mern-task-manager-amlan029.netlify.app/'/>
            <ProjectCard title="Wellness Hub" main="A doctor appointment booking web app built with the MERN stack. Users can find doctors by specialty and schedule appointments through a secure interface." ImgSrc={DA} CodeLink='https://github.com/Amlan029/WELLNESSHUB' DemoLink='https://well-ness-hub.netlify.app/'/>
        </div>
    </div>
  )
}

export default Projects
