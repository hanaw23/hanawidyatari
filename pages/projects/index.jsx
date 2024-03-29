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
    <div className={`${showDetail ? "h-[975px]" : "h-fits"} py-10 mb-20`}>
      <div className="flex justify-center">
        <h1 className="mt-10 text-[40px] mb-20 font-semibold">Personal Projects</h1>
      </div>

      <div className="flex justify-between">
        <div className={`grid ${showDetail ? "grid-rows-4" : "grid-cols-3"}   ${showDetail ? "mx-20" : "ml-[250px]"} ${showDetail ? "gap-3" : "gap-x-8"} `}>
          {projects.map((item, i) => {
            return (
              <div>
                <div
                  key={i}
                  id={item.id}
                  className={`mt-10 hover:bg-[#a934dc] bg-[#a934dc] w-[350px] px-5 py-3 rounded-[5px] ${idDetail === `${item.id}` ? "bg-[#a934dc]" : "bg-transparent"}`}
                  role="button"
                  onClick={() => handleShowDetailProject(item.id)}
                >
                  <h1>{item.name}</h1>
                </div>

                {idDetail === `${item.id}` && showDetail ? (
                  <ProjectDetailModal className="mr-[100px] w-[850px] h-[850px] z-10 px-3 -mt-[1400px]  ml-[550px]" name={item.name} pics={item.pics} desc={item.desc} link={item.link} icons={item.icons} />
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
