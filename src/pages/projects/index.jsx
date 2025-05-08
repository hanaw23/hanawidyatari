import { useState, useMemo } from "react";
import { personalProjects, professionalProjects } from "@hanawidyatari/utils/projectsList";
import ProjectCard from "@hanawidyatari/components/cards/ProjectCard";
import ProjectDetailCard from "@hanawidyatari/components/cards/ProjectDetailCard";

const projects = ["Professional Projects", "Personal Projects"];

export default function Projects() {
  const [active, setActiveShowDefault] = useState("Professional Projects");
  const [indexProject, setIndexProject] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const isProfessionalProject = active === projects[0];
  const data = isProfessionalProject ? professionalProjects : personalProjects;
  const isDataMoreThanOne = data.length > 1;
  const isCurrentLastData = indexProject === data.length - 1;
  const isCurrentFirstData = indexProject === 0;

  const handleChangeProject = (projectName) => {
    setActiveShowDefault(projectName);
    setIndexProject(0);
  };

  const handleChangeSubProject = (action) => {
    if (isTransitioning) return;

    setIsTransitioning(true);

    setTimeout(() => {
      setIndexProject((prev) => {
        if (action === "next" && prev < data.length - 1) return prev + 1;
        if (action === "prev" && prev > 0) return prev - 1;
        return prev;
      });
      setIsTransitioning(false);
    }, 300);
  };

  const renderProjects = useMemo(() => {
    const current = data[indexProject];
    return (
      <ProjectDetailCard
        name={current.name}
        pic={current.pic}
        desc={current.desc}
        icons={current.icons}
        links={current.links}
        isPotrait={current.isPotrait}
        link={current.link}
        backToPrevious={() => handleChangeSubProject("prev")}
        goToNext={() => handleChangeSubProject("next")}
        isFirstData={isCurrentFirstData}
        isLastData={isCurrentLastData}
        isDataMoreThanOne={isDataMoreThanOne}
      />
    );
  }, [indexProject, data]);

  return (
    <div className={`py-5 lg:py-20 w-full`}>
      <div className="x-4 lg:mx-10">
        <h1 className="mt-10 lg:mt-14 text-[40px] font-semibold text-center mb-8 lg:mb-14">Projects</h1>

        <ProjectCard
          projects={projects}
          active={active}
          handleChangeProject={handleChangeProject}
          isTransitioning={isTransitioning}
          renderProjects={renderProjects}
          indexProject={indexProject}
          data={data}
          isDataMoreThanOne={isDataMoreThanOne}
        />
      </div>
    </div>
  );
}
