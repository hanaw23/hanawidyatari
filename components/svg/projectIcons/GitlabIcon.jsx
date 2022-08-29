import { useState } from "react";

import DetailHover from "../../hovers/DetailHover";

export default function GitlabIcon(props) {
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
        <svg preserveAspectRatio="xMidYMid" viewBox="0 0 256 236" xmlns="http://www.w3.org/2000/svg" className={props.className} width={props.width} height={props.height} onMouseEnter={handleHover} onMouseLeave={handleLeaveHover}>
          <path d="m128.07485 236.074667 47.104-144.9703622h-94.2080005z" fill="#e24329" />
          <path d="m128.07485 236.074423-47.1040005-144.970362h-66.0150857z" fill="#fc6d26" />
          <path d="m14.9558857 91.1044267-14.31405713 44.0551623c-1.3056 4.017981.12434286 8.419961 3.54255238 10.903161l123.89059005 90.012039z" fill="#fca326" />
          <path d="m14.9558857 91.1045486h66.0150857l-28.3708952-87.31428574c-1.4592-4.49340953-7.8153143-4.49219048-9.2745143 0z" fill="#e24329" />
          <path d="m128.07485 236.074423 47.104-144.970362h66.015085z" fill="#fc6d26" />
          <path d="m241.193935 91.1044267 14.314057 44.0551623c1.3056 4.017981-.124342 8.419961-3.542552 10.903161l-123.89059 90.012039z" fill="#fca326" />
          <path d="m241.193935 91.1045486h-66.015085l28.370895-87.31428574c1.4592-4.49340953 7.815314-4.49219048 9.274514 0z" fill="#e24329" />
        </svg>
      }
      detail="Gitlab"
      onHover={isHover}
      classNameDiv="flex flex-col w-[50px] h-[50px]"
      classNameDetail="w-fit -mt-3 ml-[10px]"
    />
  );
}
