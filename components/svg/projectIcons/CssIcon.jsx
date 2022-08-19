import { useState } from "react";

import DetailHover from "../../hovers/DetailHover";

export default function CssIcon(props) {
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
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
          className={props.className}
          fill={props.fill}
          height={props.height}
          width={props.width}
          onClick={props.onClick}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeaveHover}
        >
          <path d="m480 32-64 368-223.3 80-192.7-80 19.6-94.8h82l-8 40.6 116.4 44.4 134.1-44.4 18.8-97.1h-333.4l16-82h333.7l10.5-52.7h-333.4l16.3-82z" />
        </svg>
      }
      detail="CSS"
      onHover={isHover}
      classNameDiv="flex flex-col w-[50px] h-[50px]"
      classNameDetail="w-fit -mt-3 ml-[21px]"
    />
  );
}
