import { RiNetflixFill } from '@remixicon/react';
import React from 'react';
import Marquee from "react-fast-marquee";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaNode,
  FaGithub,
  FaGitAlt,
  FaReact
} from 'react-icons/fa';
import {
  SiMongodb,
  SiMysql,
  SiPostman,
  SiTailwindcss,
  SiBootstrap,
  SiNextdotjs
} from 'react-icons/si';

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl font-bold">Experience</h1>

      <div className="flex flex-col items-center justify-center gap-12">

        {/* ===== Tech Stack Marquee ===== */}
        <Marquee pauseOnHover={true} gradient={false} speed={50}>
          <div className="flex items-center gap-8 py-10 px-6">

            {[
              <FaHtml5 color="#E34F26" size={50} />,
              <FaCss3 color="#1572b6" size={50} />,
              <FaJs color="#F7DF1E" size={50} />,
              <FaReact color="#61DAFB" size={50} />,
              <FaNode color="#47A248" size={50} />,
              <SiMongodb color="#47A248" size={50} />,
              <SiMysql color="#e48e00" size={50} />,
              <FaGitAlt color="#f14e32" size={50} />,
              <FaGithub color="#ffffff" size={50} />,
              <SiPostman color="#ff6c37" size={50} />,
              <SiTailwindcss color="#38bdf8" size={50} />,
              <SiBootstrap color="#9933ff" size={50} />,
              <SiNextdotjs color="#ffffff" size={50} />
            ].map((icon, index) => (
              <span
                key={index}
                className="
                  p-4
                  bg-white/10
                  backdrop-blur-lg
                  border border-white/20
                  rounded-2xl
                  shadow-lg shadow-black/40
                  hover:scale-110
                  transition-all duration-300
                "
              >
                {icon}
              </span>
            ))}

          </div>
        </Marquee>

        {/* ===== Experience Card ===== */}
        <div
          className="
            flex gap-6 items-center
            bg-white/10
            backdrop-blur-lg
            border border-white/20
            rounded-2xl
            p-6
            shadow-lg shadow-black/40
            hover:-translate-y-1
            hover:shadow-indigo-500/40
            transition-all duration-300
            max-w-xl
          "
        >
          <img
            src="/Devtown-logo.png"
            alt="DevTown Logo"
            className="w-12 h-12 rounded-lg"
          />

          <div>
            <h2 className="text-lg font-semibold">
              Full Stack Web Developer, Devtown
            </h2>
            <p className="text-sm text-gray-300">
              Nov 2023 – Feb 2024
            </p>
            <ul className="text-sm mt-2 text-gray-200 list-disc list-inside">
              <li>Worked as Web Developer</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Experience;