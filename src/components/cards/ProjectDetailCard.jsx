import { useEffect, useState } from "react";
import AndoridIcon from "@hanawidyatari/icons/projectIcons/AndroidIcon";

const ProjectDetailCard = (props) => {
  return (
    <div className="mt-6">
      <h2 className="text-[30px] font-bold text-white mx-12">{props.name}</h2>
      <div className="flex justify-between mx-6 my-6">
        <div className="flex-1 px-6">
          <div className="mt-4">
            <h3 className="text-m font-semibold mb-2 text-white">Description</h3>
            <p className="text-justify text-sm">{props.desc}</p>
          </div>

          {props.link && (
            <div className="mt-4">
              <h3 className="text-m font-semibold mb-2 text-white">Link Project</h3>
              <a href={props.link} target="_blank">
                {props.link}
              </a>
            </div>
          )}

          {props.links && (
            <div className="mt-4">
              <h3 className="text-m font-semibold mb-2 text-white">Link Project</h3>
              <div className="grid grid-cols-10 gap-1">
                {props.links?.map((item, i) => {
                  return (
                    <a href={item.link} target="_blank" className="cursor-pointer -ml-8">
                      <div>{item.iconHtml}</div>
                    </a>
                  );
                })}
              </div>
            </div>
          )}

          <div className="mt-4">
            <h3 className="text-m font-semibold mb-4 text-white">Technology</h3>
            <div className="grid grid-cols-10 gap-1">
              {props.icons?.map((icon, i) => {
                return <div key={i}>{icon.iconHtml}</div>;
              })}
            </div>
          </div>
        </div>

        <div className="flex-1 flex justify-center items-center mx-auto">
          <img src={props.pic} alt="alt" height={props.isPotrait ? 200 : 600} width={props.isPotrait ? 200 : 600} className={`${props.isPotrait ? "-mt-16" : ""}`} />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailCard;
