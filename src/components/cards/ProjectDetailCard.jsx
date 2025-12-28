import { useEffect, useState } from "react";
import Image from "next/image";
import AndoridIcon from "@hanawidyatari/icons/projectIcons/AndroidIcon";
import BackIcon from "@hanawidyatari/icons/BackIcon";
import NextIcon from "@hanawidyatari/icons/NextIcon";

const ProjectDetailCard = (props) => {
  const isShowBackButton = props.isDataMoreThanOne && !props.isFirstData;
  const isShowNextButton = props.isDataMoreThanOne && !props.isLastData;

  return (
    <div className="mt-6 lg:mt-4 relative">
      {/* Navigation Buttons */}
      <div className="flex justify-end gap-4 items-center px-4 lg:px-6 mb-4">
        {/* Back Button */}
        {isShowBackButton ? (
          <div className="p-3 rounded-full dark:bg-black/30 bg-white/30 hover:bg-white/50 dark:hover:bg-black/50 backdrop-blur-sm transition duration-200 cursor-pointer shadow-lg" onClick={() => props.backToPrevious()}>
            <BackIcon />
          </div>
        ) : (
          <div className="w-12" />
        )}

        {/* Next Button */}
        {isShowNextButton ? (
          <div className="p-3 rounded-full dark:bg-black/30 bg-white/30 hover:bg-white/50 dark:hover:bg-black/50 backdrop-blur-sm transition duration-200 cursor-pointer shadow-lg" onClick={() => props.goToNext()}>
            <NextIcon />
          </div>
        ) : (
          <div className="w-12" />
        )}
      </div>

      {/* Main Content Container */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mx-2 lg:mx-4 gap-4 lg:gap-6 mt-2">
        {/* Image Section */}
        <div className="w-full lg:w-auto flex justify-center lg:justify-start">
          <Image
            src={props.pic}
            height={400}
            width={props.isPotrait ? 200 : 650}
            className={`rounded-lg mt-4 lg:-mt-10  w-auto object-cover`}
            alt="Picture of project"
            loading="lazy"
            placeholder="blur"
            blurDataURL="/_next/image?url=/placeholder.jpg&w=16&q=1"
          />
        </div>

        {/* Info Section */}
        <div className="flex-1 w-full lg:w-auto px-4 lg:px-10 overflow-y-auto overflow-x-hidden max-h-[400px] lg:h-[550px]">
          <h2 className="text-xl lg:text-3xl font-bold dark:text-white mb-4 ">{props.name}</h2>

          <h3 className="text-base font-semibold mb-2 dark:text-white">Description</h3>
          <p className="text-justify text-sm lg:text-base mb-4">{props.desc}</p>

          {props.link && (
            <div className="mt-4 lg:mt-6">
              <h3 className="text-base font-semibold mb-2 dark:text-white">Link Project</h3>
              <a href={props.link.url} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                <p className="dark:text-white font-semibold underline text-sm lg:text-base hover:opacity-70 transition">Link to project</p>
              </a>
            </div>
          )}

          {props.links && (
            <div className="mt-4 lg:mt-6">
              <h3 className="text-base font-semibold mb-2 dark:text-white">Link Project</h3>
              <div className="flex flex-wrap gap-4 lg:gap-6">
                {props.links?.map((item, i) => (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:opacity-70 transition" key={i}>
                    <div>{item.iconHtml}</div>
                  </a>
                ))}
              </div>
            </div>
          )}

          <div className="mt-4 lg:mt-6">
            <h3 className="text-base font-semibold mb-2 dark:text-white">Technology</h3>
            <div className="grid grid-cols-4 lg:grid-cols-6 gap-4 mt-4">
              {props.icons?.map((icon, i) => (
                <div key={i} className="flex justify-center items-center">
                  {icon.iconHtml}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailCard;
