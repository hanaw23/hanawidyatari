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
          <p className="text-sm lg:text-base mb-8 lg:mb-6">{props.intro}</p>
          <CustomButton
            children={<p className="px-10 py-3 font-semibold">See More Details</p>}
            className="border border-[#a934dc] text-[#a934dc] hover:bg-[#a934dc] hover:text-white rounded-[50px] dark:text-white dark:hover:bg-transparent dark:hover:border-[#a934dc] dark:hover:text-[#a934dc] dark:bg-[#a934dc]"
            onClick={props.handleOpenDetailPage}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailCard;
