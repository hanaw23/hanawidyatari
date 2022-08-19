import { useState } from "react";
import { projects } from "../../utility/projectsList";

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
          <div className="flex justify-between" key={i}>
            <div role="button" onClick={() => handleShowDetailProject(item.id)}>
              <div className="flex flex-col gap-10 mx-20 mt-20">
                <div className="cursor-pointer border border-transparent hover:bg-[#a934dc] w-[350px] px-2 py-4 rounded-[5px]">
                  <div>{item.name}</div>
                </div>
              </div>
            </div>

            {idDetail === `${item.id}` ? (
              <div className={`${showDetail ? " flex" : "hidden"} mr-[100px] w-[850px]  px-3 py-3 mt-10`}>
                <div>
                  <h2 className="text-center text-[25px] font-semibold">{item.name}</h2>
                  <div className="flex justify-center gap-3">
                    {item.pics?.map((pic) => {
                      return (
                        <div className="mt-10  gap-5">
                          <img src={pic.urlPic} alt="admin" height={250} width={250} />
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-5">
                    <h3>Description</h3>
                    <p className="text-justify text-sm">{item.desc}</p>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
