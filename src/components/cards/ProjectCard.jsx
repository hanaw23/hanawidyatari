const ProjectCard = (props) => {
  return (
    <div className="relative border border-transparent backdrop-blur-xl bg-black/10 dark:bg-white/10 rounded-[50px] h-[600px] lg:h-[700px] shadow-xl shadow-black/30 mx-4 lg:mx-2 ">
      {/* Project Tab */}
      <div className="flex justify-center">
        {props.projects.map((project, i) => (
          <div
            key={project}
            className={`flex-1 justify-center cursor-pointer ${
              props.active === project ? "dark:text-white text-gray-900 font-bold bg-[#a934dc] border-transparent border shadow-xl shadow-black/30" : "bg-[#ffffff0a] border-[#a934dc] text-[#a934dc] border-none"
            } p-4 mx-auto
                ${i === 0 ? "rounded-tl-[50px] " : "rounded-tr-[50px] "}
                `}
            onClick={() => props.handleChangeProject(project)}
          >
            <p className="text-center text-sm lg:text-lg">{project}</p>
          </div>
        ))}
      </div>

      {/* Sub Project Information */}
      <div className={`overflow-y-auto lg:mx-4 lg:mt-8 h-full transition-all duration-300 transform ${props.isTransitioning ? "opacity-0 translate-x-4" : "opacity-100 translate-x-0"}`}>{props.renderProjects}</div>

      {/* Page Counter */}
      {props.isDataMoreThanOne && (
        <div className="absolute bottom-4 left-0 w-full flex justify-center gap-3 pb-8 pr-3 lg:pr-10">
          <div className="flex gap-2">
            {props.data.map((item, i) => {
              return <div className={`border border-transparent w-2 h-2 rounded-[100%] ${props.indexProject === i ? "bg-[#a934dc]" : "bg-gray-200"}`} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
