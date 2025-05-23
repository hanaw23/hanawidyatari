import { useState } from "react";

import DetailHover from "@hanawidyatari/components/hovers/DetailHover";

export default function SassIcon(props) {
  const [isHover, setIsHover] = useState(false);

  const handleHover = () => {
    setIsHover(true);
  };

  const handleLeaveHover = () => {
    setIsHover(!isHover);
  };

  return (
    <DetailHover
      icon={
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={props.width} height={props.height} onMouseEnter={handleHover} onMouseLeave={handleLeaveHover} className={props.className}>
          <rect fill="#c69" height="512" rx="15%" width="512" />
          <path
            d="m258 88c-96 33-158 100-152 140s66 72 93 93c-35 18-79 45-78 80 2 48 54 33 76 19s44-53 30-94c31-8 58 2 66 8 31 22 15 47 4 51s-4 6 3 4 22-12 22-29c0-43-46-63-103-48-33-35-78-51-76-89 1-14 6-50 95-95s152-27 144 14c-12 62-120 104-158 68-2-4-9-7-5 4 20 50 182 27 189-79 2-56-79-71-150-47zm-86 320c-25 8-24-8-23-14 3-17 17-38 59-59 12 38-15 67-36 73z"
            fill="#fff"
          />
        </svg>
      }
      detail="Sass"
      onHover={isHover}
      classNameDiv="flex flex-col w-[50px] h-[50px]"
      classNameDetail="w-fit -mt-3 ml-[18px]"
    />
  );
}
