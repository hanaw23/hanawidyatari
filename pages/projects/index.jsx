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
    <div className="h-fit">
      <div className="flex justify-center">
        <h1 className="mt-10 text-[40px] font-semibold">Projects</h1>
      </div>

      {projects.map((item, i) => {
        return (
          <div className="flex justify-between  border border-white" key={i}>
            <div role="button" onClick={() => handleShowDetailProject(item.id)} className="border border-white">
              <div className="grid grid-rows-5 gap-4 mx-20 mt-20 ">
                <div className={`${showDetail && idDetail === `${item.id}` ? "bg-[#a934dc]" : "bg-transparent"} cursor-pointer border border-transparent hover:bg-[#a934dc] w-[350px] px-2 py-4 rounded-[5px] `}>
                  <div>{item.name}</div>
                </div>
              </div>
            </div>

            {idDetail === `${item.id}` ? (
              <div className={`${showDetail ? " flex" : "hidden"} mr-[100px] w-[850px]  px-3 py-3 mt-10 mb- border border-white`}>
                <div>
                  <h2 className="text-center text-[25px] font-semibold text-[#a934dc]">{item.name}</h2>
                  <div className="flex justify-center gap-3">
                    {item.pics?.map((pic) => {
                      return (
                        <div className="mt-10  gap-5">
                          <img src={pic.urlPic} alt="admin" height={250} width={250} />
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-4">
                    <h3 className="text-m font-semibold mb-2 text-[#a934dc]">Description</h3>
                    <p className="text-justify text-sm">{item.desc}</p>
                  </div>

                  {!item.link ? null : (
                    <div className="mt-4">
                      <h3 className="text-m font-semibold mb-2 text-[#a934dc]">Link Project</h3>
                      <a href={item.link} target="_blank">
                        {item.link}
                      </a>
                    </div>
                  )}

                  <div className="mt-4">
                    <h3 className="text-m font-semibold mb-4 text-[#a934dc]">Technology</h3>
                    <div className="grid grid-cols-10 gap-x-1 gap-y-3 w-[550px]">
                      {item.icons?.map((icon, i) => {
                        return <div key={i}>{icon.iconHtml}</div>;
                      })}
                    </div>
                  </div>
                </div>
              </div>
            ) : // <ProjectDetailModal className={`${showDetail ? " flex" : "hidden"} mr-[100px] w-[850px]  px-3 py-3 mt-10 mb- border border-white`} name={item.name} icons={item.icons} desc={item.desc} link={item.link} pics={item.pics} />
            null}
          </div>
        );
      })}
    </div>
  );
}
