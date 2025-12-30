import { useEffect, useState } from "react";
import Image from "next/image";
import CustomButton from "@hanawidyatari/components/buttons/CustomButton";
import AndoridIcon from "@hanawidyatari/icons/projectIcons/AndroidIcon";

const ProjectDetailCard = (props) => {
  return (
    <div className="relative overflow-hidden rounded-lg">
      {/* Main Content Container */}
      <div>
        {/* Info Section */}
        <div className="flex-1 text-center w-full px-4 lg:px-10 py-6 overflow-y-auto overflow-x-hidden max-h-[400px] lg:h-[550px]">
          <h2 className="text-xl lg:text-3xl font-bold dark:text-white mb-4">{props.name}</h2>
          <p className="text-justify text-sm lg:text-base mb-4">{props.intro}</p>
          <CustomButton
            children={<p className="px-10 py-3 font-semibold">See More Details</p>}
            className="border border-[#a934dc] text-[#a934dc] hover:bg-[#a934dc] hover:text-white rounded-[50px] dark:text-white dark:hover:bg-transparent dark:hover:border-[#a934dc] dark:hover:text-[#a934dc] dark:bg-[#a934dc]"
          />
          {/* {props.link && (
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
          )} */}
          {/* <div className="mt-4 lg:mt-6">
            <h3 className="text-base font-semibold mb-2 dark:text-white">Technology</h3>
            <div className="grid grid-cols-4 lg:grid-cols-6 gap-4 mt-4">
              {props.icons?.map((icon, i) => (
                <div key={i} className="flex justify-center items-center">
                  {icon.iconHtml}
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailCard;
