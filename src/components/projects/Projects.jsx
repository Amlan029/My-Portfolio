
import ProjectCard from './ProjectCard'
import stonePaperScissor from '../../assets/stonePaperScissor.png';
import CurrImg from '../../assets/currencyC.png'
import DA from '../../assets/DocAppo.png'
import FF from "../../assets/feedformly.png"
import Con_Mor from "../../assets/Content_Morpher.png"
const projects = [
{
  title: "Stone Paper Scissor Game",
  description: "A simple and fun game built using HTML5, CSS3, and JavaScript where the player competes with the computer in a classic Stone Paper Scissor match.",
  ImgSrc: stonePaperScissor,
  codeLink: 'https://github.com/Amlan029/stonePaperScissors',
  demoLink: 'https://amlan029.github.io/stonePaperScissors/' 
},
{
  title: "Currency Mine",
  description: "A front-end currency-converter app built with the React js. It allows users to get a particular currency value to another with real-time data and clean UI.",
  ImgSrc: CurrImg,
  codeLink: 'https://github.com/Amlan029/Currency-converter',
  demoLink: 'https://currency-converter-mine.netlify.app/' 
},
{
  title: "Wellness Hub",
  description: "A doctor appointment booking web app built with the MERN stack. Users can find doctors by specialty and schedule appointments through a secure interface.",
  ImgSrc: DA,
  codeLink: 'https://github.com/Amlan029/WELLNESSHUB',
  demoLink: 'https://well-ness-hub.netlify.app/' 
},
{
  title: "Feed Formly",
  description: "FeedFormly is a modern Next.js platform that lets users send and receive anonymous messages securely. Share your profile link, get honest feedback, and connect with others — all while keeping your identity private.",
  ImgSrc: FF,
  codeLink: 'https://github.com/Amlan029/FeedFormly',
  demoLink: 'https://feed-formly-ehrg.vercel.app/' 
},
{
  title: "Content Morpher",
  description: "Built an AI-driven content generator (Content Morpher) that converts user key points into long-form content using Gemini. Implemented subscription billing (Razorpay), authentication (Clerk), dashboard analytics, and template-based generation workflows using Next.js, PostgreSQL, and Drizzle ORM.",
  ImgSrc: Con_Mor,
  codeLink: 'https://github.com/Amlan029/Content-Morpher',
  demoLink: 'https://content-morpher.vercel.app/' 
},
];
const Projects = () => {
  return (
    <div id='Projects' className='p-10 md:p-24 text-white'>
        <h1 className='text-2xl md:text-4xl text-white font-bold'>Projects</h1>
        <div className='py-12 px-8 flex flex-wrap gap-5 justify-center '>
          {
          projects.map((project,index)=>(
            <ProjectCard key={index} title={project.title} main={project.description}
            ImgSrc={project.ImgSrc} CodeLink={project.codeLink} DemoLink={project.demoLink}/>
          ))
          }
            
            
        </div>
    </div>
  )
}

export default Projects
