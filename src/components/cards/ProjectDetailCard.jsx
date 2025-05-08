import { useEffect, useState } from "react";
import AndoridIcon from "@hanawidyatari/icons/projectIcons/AndroidIcon";
import BackIcon from "@hanawidyatari/icons/BackIcon";
import NextIcon from "@hanawidyatari/icons/NextIcon";

const ProjectDetailCard = (props) => {
  const isShowBackButton = props.isDataMoreThanOne && !props.isFirstData;
  const isShowNextButton = props.isDataMoreThanOne && !props.isLastData;

  return (
    <div className="mt-8 lg:mt-6 relative">
      {/* Back Button */}
      {isShowBackButton && (
        <div className="absolute left-1 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full dark:bg-black/30 bg-white/30 hover:bg-white/50 dark:hover:bg-black/50  transition duration-200 cursor-pointer" onClick={() => props.backToPrevious()}>
          <BackIcon />
        </div>
      )}

      {/* Main Content Container */}
      <h2 className="text-[20px] lg:text-[30px] font-bold dark:text-white mx-4 lg:mx-10">{props.name}</h2>
      <div className="flex justify-between items-center mx-2 mt-4 lg:mx-4 lg:mt-6 gap-6 lg:gap-6">
        {/* Info Section */}
        <div className="flex-1 px-2 lg:px-6 overflow-y-auto overflow-x-hidden h-[350px] lg:h-full">
          <div className="mt-4">
            <h3 className="text-m font-semibold mb-2 dark:text-white">Description</h3>
            <p className="text-justify text-sm">{props.desc}</p>
          </div>

          {props.link && (
            <div className="mt-3 lg:mt-6">
              <h3 className="text-m font-semibold mb-2 dark:text-white">Link Project</h3>
              <a href={props.link.url} target="_blank" className="cursor-pointer">
                <p className="dark:text-white font-semibold underline text-sm lg:text-base">Link to project</p>
              </a>
            </div>
          )}

          {props.links && (
            <div className="mt-3 lg:mt-6">
              <h3 className="text-m font-semibold mb-2 dark:text-white">Link Project</h3>
              <div className="grid grid-cols-6 lg:grid-cols-10 gap-8 lg:gap-1">
                {props.links?.map((item, i) => (
                  <a href={item.link} target="_blank" className="cursor-pointer -ml-10 lg:-ml-8" key={i}>
                    <div>{item.iconHtml}</div>
                  </a>
                ))}
              </div>
            </div>
          )}

          <div className="mt-3 lg:mt-6">
            <h3 className="text-m font-semibold mb-2 dark:text-white">Technology</h3>
            <div className="grid grid-cols-4 lg:grid-cols-6 mt-4">
              {props.icons?.map((icon, i) => (
                <div key={i}>{icon.iconHtml}</div>
              ))}
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="flex-1 mt-6 lg:justify-center lg:flex lg:items-center">
          <img src={props.pic} alt="alt" height={props.isPotrait ? 200 : 600} width={props.isPotrait ? 200 : 600} className={`${props.isPotrait ? "lg:-mt-20 " : "-mt-14"}`} />
        </div>
      </div>

      {/* Next Button */}
      {isShowNextButton && (
        <div
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full dark:bg-black/30 bg-white/30 hover:bg-white/50 dark:hover:bg-black/50  transition duration-200 cursor-pointer"
          onClick={() => props.goToNext()}
          onClick={() => props.goToNext()}
        >
          <NextIcon />
        </div>
      )}
    </div>
  );
};

export default ProjectDetailCard;
