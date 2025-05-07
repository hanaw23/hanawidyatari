import { useState, useMemo } from "react";
import { personalProjects, professionalProjects } from "@hanawidyatari/utils/projectsList";
import ProjectDetailModal from "@hanawidyatari/components/modals/ProjectDetailModal";
import ProjectCard from "@hanawidyatari/components/cards/ProjectCard";
import ProjectDetailCard from "@hanawidyatari/components/cards/ProjectDetailCard";

const projects = ["Professional Projects", "Personal Projects"];

export default function Projects() {
  const [active, setActiveShowDefault] = useState("Professional Projects");
  const [indexProject, setIndexProject] = useState(0);

  const isProfessionalProject = active === projects[0];
  const data = isProfessionalProject ? professionalProjects : personalProjects;

  const handleChangeProject = (projectName) => {
    setActiveShowDefault(projectName);
    setIndexProject(0);
  };

  const handleChangeSubProject = (action) => {
    setIndexProject((prev) => {
      if (action === "next" && prev < data.length - 1) return prev + 1;
      if (action === "prev" && prev > 0) return prev - 1;
      return prev;
    });
  };

  const renderProjects = useMemo(() => {
    const current = data[indexProject];
    return <ProjectDetailCard name={current.name} pic={current.pic} desc={current.desc} icons={current.icons} links={current.links} isPotrait={current.isPotrait} link={current.link} />;
  }, [indexProject, data]);

  return (
    <div className={`py-10 w-full`}>
      <h1 className="my-10 text-[40px] font-semibold text-center">Projects</h1>

      <div className="mx-10">
        <div className="border border-transparent backdrop-blur-md bg-white/10 rounded-[10px] p-4 h-[600px]">
          <div className="flex justify-end">
            {projects.map((project) => (
              <div key={project} className={`my-2 border border-transparent cursor-pointer ${active === project ? "text-[#a934dc] font-bold" : ""} p-4 mx-auto rounded-2xl`} onClick={() => handleChangeProject(project)}>
                <p className="text-center">{project}</p>
              </div>
            ))}
          </div>
          <div className="pb-20">{renderProjects}</div>
        </div>
        <div className="flex justify-center gap-10 mt-4">
          <button onClick={() => handleChangeSubProject("prev")} disabled={indexProject === 0} className={`px-4 py-2 rounded bg-white/20 hover:bg-white/30 transition ${indexProject === 0 ? "opacity-50 cursor-not-allowed" : ""}`}>
            Previous
          </button>
          <button
            onClick={() => handleChangeSubProject("next")}
            disabled={indexProject === data.length - 1}
            className={`px-4 py-2 rounded bg-white/20 hover:bg-white/30 transition ${indexProject === data.length - 1 ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
