import { useState } from "react";

import DetailHover from "../../hovers/DetailHover";

export default function HtmlIcon(props) {
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
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={props.className} width={props.width} height={props.height} onMouseEnter={handleHover} onMouseLeave={handleLeaveHover}>
          <path d="m5.902 27.201-2.247-25.201h24.69l-2.25 25.197-10.11 2.803z" fill="#e44f26" />
          <path d="m16 27.858 8.17-2.265 1.922-21.532h-10.092z" fill="#f1662a" />
          <path d="m16 13.407h-4.09l-.282-3.165h4.372v-3.091h-.011-7.739l.074.83.759 8.517h6.917z" fill="#ebebeb" />
          <path d="m16 21.434-.014.004-3.442-.929-.22-2.465h-1.673-1.43l.433 4.852 6.332 1.758.014-.004z" fill="#ebebeb" />
          <g fill="#fff">
            <path d="m15.989 13.407v3.091h3.806l-.358 4.009-3.448.93v3.216l6.337-1.757.046-.522.726-8.137.076-.83h-.833z" />
            <path d="m15.989 7.151v1.92 1.164.007h7.456.01l.062-.694.141-1.567.074-.83z" />
          </g>
        </svg>
      }
      detail="Html"
      onHover={isHover}
      classNameDiv="flex flex-col w-[50px] h-[50px]"
      classNameDetail="w-fit -mt-3 ml-[17px]"
    />
  );
}
