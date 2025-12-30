import { useState, useMemo, useContext } from "react";
import { useRouter } from "next/router";
import { ModalImageContext } from "@hanawidyatari/contexts";
import { projects } from "@hanawidyatari/utils/projectsList";
import ProjectCard from "@hanawidyatari/components/cards/ProjectCard";
import ProjectDetailCard from "@hanawidyatari/components/cards/ProjectDetailCard";

export default function Projects() {
  const router = useRouter();
  const modalImageContext = useContext(ModalImageContext);
  const { setImageModal, setOpenModalImage } = modalImageContext;
  const [indexProject, setIndexProject] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentData, setCurrentData] = useState();

  const data = projects;
  const isDataMoreThanOne = data.length > 1;
  const isCurrentLastData = indexProject === data.length - 1;
  const isCurrentFirstData = indexProject === 0;

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

  const handleOpenDetailPage = (id) => {
    router.push(`/projects/${id}`);
  };

  const renderProjects = useMemo(() => {
    const current = data[indexProject];
    setCurrentData(current);

    return (
      <ProjectDetailCard
        name={current.name}
        pic={current.pic}
        desc={current.desc}
        icons={current.icons}
        links={current.links}
        isPotrait={current.isPotrait}
        link={current.link}
        intro={current.intro}
        handleOpenDetailPage={() => handleOpenDetailPage(current.id)}
      />
    );
  }, [indexProject, data]);

  const handleOpenImageModalPreview = () => {
    setOpenModalImage(true);
    setImageModal(currentData?.pic ?? "");
  };

  return (
    <div className={`py-5 lg:py-20 w-full`}>
      <div className="x-4 lg:mx-10">
        <h1 className="mt-10 lg:mt-14 text-[40px] lg:text-[55px] font-semibold text-center mb-8 lg:mb-14">
          Featured <span className="text-[#a934dc]">Projects</span>
        </h1>
        <ProjectCard
          projects={projects}
          isTransitioning={isTransitioning}
          renderProjects={renderProjects}
          indexProject={indexProject}
          data={data}
          currentData={currentData}
          isDataMoreThanOne={isDataMoreThanOne}
          backToPrevious={() => handleChangeSubProject("prev")}
          goToNext={() => handleChangeSubProject("next")}
          handleOpenImageModalPreview={handleOpenImageModalPreview}
          isFirstData={isCurrentFirstData}
          isLastData={isCurrentLastData}
        />
      </div>
    </div>
  );
}
