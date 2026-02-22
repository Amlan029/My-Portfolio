
import ProjectCard from './ProjectCard'
import stonePaperScissor from '../../assets/stonePaperScissor.png';
import CurrImg from '../../assets/currencyC.png'
import DA from '../../assets/DocAppo.png'
import FF from "../../assets/feedformly.png"
import Con_Mor from "../../assets/Content_Morpher.png"
const projects = [
  {
    title: "Stone Paper Scissor Game",
    description:
      "A simple and fun game built using HTML5, CSS3, and JavaScript where the player competes with the computer in a classic Stone Paper Scissor match.",
    ImgSrc: stonePaperScissor,
    codeLink: "https://github.com/Amlan029/stonePaperScissors",
    demoLink: "https://amlan029.github.io/stonePaperScissors/",
    tech: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Currency Mine",
    description:
      "A front-end currency-converter app built with the React js. It allows users to get a particular currency value to another with real-time data and clean UI.",
    ImgSrc: CurrImg,
    codeLink: "https://github.com/Amlan029/Currency-converter",
    demoLink: "https://currency-converter-mine.netlify.app/",
    tech: ["React", "API", "Tailwind"]
  },
  {
    title: "Wellness Hub",
    description:
      "A doctor appointment booking web app built with the MERN stack. Users can find doctors by specialty and schedule appointments through a secure interface.",
    ImgSrc: DA,
    codeLink: "https://github.com/Amlan029/WELLNESSHUB",
    demoLink: "https://well-ness-hub.netlify.app/",
    tech: ["MongoDB", "Express", "React", "Node"]
  },
  {
    title: "Feed Formly",
    description:
      "FeedFormly is a modern Next.js platform that lets users send and receive anonymous messages securely.",
    ImgSrc: FF,
    codeLink: "https://github.com/Amlan029/FeedFormly",
    demoLink: "https://feed-formly-ehrg.vercel.app/",
    tech: ["Next.js", "Clerk", "PostgreSQL"]
  },
  {
    title: "Content Morpher",
    description:
      "AI-driven content generator using Gemini with subscriptions, auth, analytics, and templates.",
    ImgSrc: Con_Mor,
    codeLink: "https://github.com/Amlan029/Content-Morpher",
    demoLink: "https://content-morpher.vercel.app/",
    tech: ["Next.js", "Gemini AI", "PostgreSQL", "Drizzle", "Razorpay"]
  }
];
const Projects = () => {
  return (
    <div id='Projects' className='p-10 md:p-24 text-white'>
        <h1 className='text-2xl md:text-4xl text-white font-bold'>Projects</h1>
        <div className='py-12 px-8 flex flex-wrap gap-5 justify-center '>
          {
          projects.map((project,index)=>(
            <ProjectCard key={index} title={project.title} main={project.description}
            ImgSrc={project.ImgSrc} CodeLink={project.codeLink} DemoLink={project.demoLink} tech={project.tech}/>
          ))
          }
            
            
        </div>
    </div>
  )
}

export default Projects
