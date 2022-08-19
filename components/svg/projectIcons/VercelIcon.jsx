import { useState } from "react";

import DetailHover from "../../hovers/DetailHover";

export default function VercelIcon(props) {
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
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={props.className} fill={props.fill} height={props.height} width={props.width} onClick={props.onClick} onMouseEnter={handleHover} onMouseLeave={handleLeaveHover}>
          <path d="m24 22.525h-24l12-21.05z" />
        </svg>
      }
      detail="Vercel"
      onHover={isHover}
      classNameDiv="flex flex-col w-[50px] h-[50px]"
      classNameDetail="w-fit -mt-3 ml-[15px]"
    />
  );
}
