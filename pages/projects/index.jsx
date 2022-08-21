import { useState } from "react";
import { projects } from "../../utility/projectsList";
import ProjectDetailModal from "../../components/modals/ProjectDetailModal";

export default function Projects() {
  const [showDetail, setShowDetail] = useState(false);
  const [idDetail, setIdDetail] = useState("");

  const handleShowDetailProject = (id) => {
    setShowDetail(true);
    setIdDetail(`${id}`);
  };

  return (
    <div className="h-fit py-10 mt-40 mb-20">
      <div className="flex justify-center">
        <h1 className="mt-10 text-[40px] mb-8 font-semibold">Personal Projects</h1>
      </div>

      <div className="flex justify-between">
        <div className="grid grid-rows-4 gap-3 mx-20 ">
          {projects.map((item, i) => {
            return (
              <div>
                <div
                  key={i}
                  id={item.id}
                  className={`mt-10 hover:bg-[#a934dc] w-[350px] px-2 py-3 rounded-[5px] ${idDetail === `${item.id}` && showDetail ? "bg-[#a934dc]" : "bg-transparent"}`}
                  role="button"
                  onClick={() => handleShowDetailProject(item.id)}
                >
                  <h1>{item.name}</h1>
                </div>

                <div>
                  {idDetail === `${item.id}` && showDetail ? (
                    <ProjectDetailModal className="mr-[100px] w-[850px] h-[600px] z-10 px-3 -mt-[1165px] ml-[550px]" name={item.name} pics={item.pics} desc={item.desc} link={item.link} icons={item.icons} />
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
