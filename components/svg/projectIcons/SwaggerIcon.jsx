import { useState } from "react";

import DetailHover from "../../hovers/DetailHover";

export default function SwaggerIcon(props) {
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
          <path d="m30 16a14 14 0 1 1 -4.1-9.9 13.956 13.956 0 0 1 4.1 9.9z" fill="#fff" />
          <path d="m27.9 16a11.9 11.9 0 1 1 -3.485-8.415 11.863 11.863 0 0 1 3.485 8.415z" fill="#6d9a00" />
          <g fill="#fff">
            <path d="m11.66 15.983a.938.938 0 0 1 .977-.976.976.976 0 1 1 -.977.976z" />
            <path d="m15.031 15.983a.938.938 0 0 1 .977-.976.976.976 0 1 1 -.977.976z" />
            <path d="m18.4 15.983a.938.938 0 0 1 .977-.976.976.976 0 1 1 -.977.976z" />
            <path d="m7.619 16.89v-1.748a2.824 2.824 0 0 0 .881-.142 1.126 1.126 0 0 0 .439-.441 2.1 2.1 0 0 0 .254-.776 9.08 9.08 0 0 0 .055-1.216 10.547 10.547 0 0 1 .123-1.97 1.847 1.847 0 0 1 .446-.9 1.72 1.72 0 0 1 .81-.552 4.788 4.788 0 0 1 1.316-.131h.363v1.437a3.177 3.177 0 0 0 -.977.091.63.63 0 0 0 -.319.277 3.372 3.372 0 0 0 -.1.941q0 .459-.062 1.741a4.639 4.639 0 0 1 -.178 1.169 2.435 2.435 0 0 1 -.367.739 2.939 2.939 0 0 1 -.682.6 2.432 2.432 0 0 1 .662.579 2.377 2.377 0 0 1 .394.8 5.8 5.8 0 0 1 .178 1.267q.048 1.209.048 1.544a3.034 3.034 0 0 0 .11.932.694.694 0 0 0 .333.288 2.927 2.927 0 0 0 .963.1v1.486h-.363a3.843 3.843 0 0 1 -1.292-.192 1.905 1.905 0 0 1 -.834-.513 1.875 1.875 0 0 1 -.456-.9 8.724 8.724 0 0 1 -.117-1.686 8.414 8.414 0 0 0 -.11-1.741 1.553 1.553 0 0 0 -.456-.834 2.106 2.106 0 0 0 -1.062-.249z" />
            <path d="m23.285 17.143a1.553 1.553 0 0 0 -.456.834 8.414 8.414 0 0 0 -.11 1.741 8.724 8.724 0 0 1 -.119 1.682 1.875 1.875 0 0 1 -.456.9 1.905 1.905 0 0 1 -.833.521 3.843 3.843 0 0 1 -1.292.192h-.363v-1.483a2.927 2.927 0 0 0 .963-.1.694.694 0 0 0 .333-.288 3.034 3.034 0 0 0 .11-.932q0-.335.048-1.544a5.8 5.8 0 0 1 .18-1.266 2.377 2.377 0 0 1 .394-.8 2.432 2.432 0 0 1 .662-.579 2.939 2.939 0 0 1 -.682-.6 2.435 2.435 0 0 1 -.367-.739 4.639 4.639 0 0 1 -.178-1.169q-.062-1.282-.062-1.741a3.372 3.372 0 0 0 -.1-.941.63.63 0 0 0 -.319-.277 3.177 3.177 0 0 0 -.977-.091v-1.447h.363a4.788 4.788 0 0 1 1.316.131 1.72 1.72 0 0 1 .81.552 1.847 1.847 0 0 1 .446.9 10.547 10.547 0 0 1 .123 1.97 9.08 9.08 0 0 0 .055 1.216 2.1 2.1 0 0 0 .254.776 1.126 1.126 0 0 0 .439.441 2.824 2.824 0 0 0 .883.144v1.744a2.106 2.106 0 0 0 -1.065.253z" />
          </g>
        </svg>
      }
      detail="Swagger"
      onHover={isHover}
      classNameDiv="flex flex-col w-[50px] h-[50px]"
      classNameDetail="w-fit -mt-3 ml-[9px]"
    />
  );
}