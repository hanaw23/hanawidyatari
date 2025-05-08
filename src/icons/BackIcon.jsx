import { useState } from "react";
import DetailHover from "@hanawidyatari/components/hovers/DetailHover";

export default function BackIcon(props) {
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
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={props.className}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      }
      detail="Back to Previous Page"
      onHover={isHover}
      classNameDiv="flex flex-col w-[25px] h-[25px] lg:w-[35px] lg:h-[35px]"
      classNameDetail="w-fit -mt-5"
    />
  );
}
