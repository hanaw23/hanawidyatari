import { useState } from "react";

import DetailHover from "@hanawidyatari/components/hovers/DetailHover";

export default function EjsIcon(props) {
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
          <path
            d="m2 17.672v-3.344l11.86-6.2v3.072l-8.76 4.739 8.762 4.835v3.1zm27.814-8.88-10.349 14.437h-3.553l10.369-14.438zm-2.867 12.708a.794.794 0 0 0 .619-.278 1.061 1.061 0 0 0 .248-.732 1.141 1.141 0 0 0 -.248-.753.768.768 0 0 0 -1.217 0 1.141 1.141 0 0 0 -.248.753 1.09 1.09 0 0 0 .237.732.763.763 0 0 0 .609.278zm2.186 1.042a3.237 3.237 0 0 1 -4.352-.01 2.864 2.864 0 0 1 0-4.1 3.223 3.223 0 0 1 4.352 0 2.773 2.773 0 0 1 .867 2.054 2.74 2.74 0 0 1 -.866 2.052zm-10.312-9.481a.794.794 0 0 0 .619-.278 1.061 1.061 0 0 0 .248-.732 1.141 1.141 0 0 0 -.248-.753.769.769 0 0 0 -1.217 0 1.141 1.141 0 0 0 -.248.753 1.09 1.09 0 0 0 .237.732.763.763 0 0 0 .609.278zm2.186 1.039a3.237 3.237 0 0 1 -4.352-.01 2.864 2.864 0 0 1 0-4.1 3.223 3.223 0 0 1 4.352 0 2.773 2.773 0 0 1 .866 2.063 2.74 2.74 0 0 1 -.866 2.047z"
            fill="#90a93a"
          />
        </svg>
      }
      detail="EJS"
      onHover={isHover}
      classNameDiv="flex flex-col w-[50px] h-[50px]"
      classNameDetail="w-fit -mt-3 ml-[22px]"
    />
  );
}
