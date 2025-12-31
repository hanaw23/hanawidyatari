import { useState } from "react";
import DetailHover from "@hanawidyatari/components/hovers/DetailHover";

export default function NextIcon(props) {
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
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" classNaclassName={props.className}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      }
      detail="Next Page"
      onHover={isHover}
      classNameDiv="flex flex-col w-[15px] h-[15px] lg:w-[25px] lg:h-[25px]"
      classNameDetail="w-fit -mt-5"
    />
  );
}
