import { useState } from "react";

import DetailHover from "../../hovers/DetailHover";

export default function VrIcon(props) {
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
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="dark:fill-gray-50 fill-[#0e0e0e] cursor-pointer"
          fill={props.fill}
          height={props.height}
          width={props.width}
          onClick={props.onClick}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeaveHover}
        >
          <path d="m5 3c-1.11 0-2 .9-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-14a2 2 0 0 0 -2-2zm1 6h1.5l1 3.43 1-3.43h1.5l-1.75 6h-1.5zm7 0h3.5c.85 0 1.5.65 1.5 1.5v1c0 .6-.4 1.15-.9 1.4l.9 2.1h-1.5l-.85-2h-1.15v2h-1.5zm1.5 1.5v1h2v-1z" />
        </svg>
      }
      detail="Virtual Reality"
      onHover={isHover}
      classNameDiv="flex flex-col w-[80px] h-[80px]"
      classNameDetail="w-fit -mt-3 -ml-[3px]"
    />
  );
}
