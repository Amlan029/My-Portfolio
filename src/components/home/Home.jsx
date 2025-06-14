import React from "react";
// import { useState, useEffect } from 'react';
import { TypeAnimation } from "react-type-animation";
import avatarImg from "/myAvatar 2.jpg";
const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10">
        <h1 className="text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          Hello I'm Amlan
        </h1>
        <TypeAnimation
          sequence={[
            "Full Stack Developer", // Types
            2000, // Waits 2s
            "MERN Stack Developer", // Deletes & types new
            2000,
          ]}
          wrapper="h1"
          speed={50}
          repeat={Infinity}
          className="text-2xl md:text-4xl font-thin flex leading-normal tracking-tighter text-zinc-400"
        />
        <p className="text-sm md:text-2xl tracking-tight">
          Hey there! I’m a Full Stack Developer who loves building cool apps with the MERN stack. I enjoy turning ideas into real, usable web experiences that make life easier..
        </p>
        <div className="flex flex-wrap gap-2">
          <a href="#Contact"><button className="mt-5 md:md-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697] cursor-pointer">
            Contact Me
          </button></a>

          <a href="https://drive.google.com/file/d/1-uZO1atTiUclD7NUsk6DXaN_12-ehO_j/view?usp=sharing"><button className="mt-5 md:md-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697] cursor-pointer">
            Download Resume
          </button></a>
          </div>
      </div>
      <div>
        <img className="rounded-full w-4/5" src={avatarImg} alt="" />
      </div>
    </div>
  );
};

export default Home;
