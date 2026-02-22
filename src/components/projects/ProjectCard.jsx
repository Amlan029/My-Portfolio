const ProjectCard = ({ title, main, ImgSrc, CodeLink, DemoLink,tech = [] }) => {
  return (
    <div
      className="
        p-3 md:p-6 flex-col w-80
        bg-white/10
        backdrop-blur-lg
        border border-white/20
        rounded-2xl
        shadow-lg shadow-black/40
        hover:scale-105
        hover:shadow-indigo-500/40
        transition-all duration-300
      "
    >
      <img className="p-4 rounded-xl" src={ImgSrc} alt="" />

      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal text-white">
        {title}
      </h3>

      <p className="px-4 text-sm md:text-md leading-tight py-2 text-gray-300">
        {main}
      </p>
      {/* Tech Badges */}
      <div className="flex flex-wrap gap-2 mt-2">
        {tech.map((item, idx) => (
          <span
            key={idx}
            className="text-xs px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-400/30"
          >
            {item}
          </span>
        ))}
      </div>
      <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4">
        <a href={DemoLink}>
          <button className="cursor-pointer md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:px-4 font-semibold rounded-3xl bg-indigo-500/80 hover:bg-indigo-500 transition">
            Demo
          </button>
        </a>

        <a href={CodeLink}>
          <button className="cursor-pointer md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:px-4 font-semibold rounded-3xl bg-indigo-500/80 hover:bg-indigo-500 transition">
            Source Code
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;