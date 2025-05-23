import { useState } from "react";
import DetailHover from "@hanawidyatari/components/hovers/DetailHover";

export default function NuxtJsIcon(props) {
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
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 124 124"
          className="dark:fill-gray-50 fill-[#0e0e0e] cursor-pointer"
          fill={props.fill}
          height={props.height}
          width={props.width}
          onClick={props.onClick}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeaveHover}
        >
          <path
            clip-rule="evenodd"
            d="m55.7498 27.1551c-3.2221-5.5401-11.2775-5.5402-14.4996 0l-35.11616 60.3795c-3.22213 5.5402.80552 12.4654 7.24976 12.4654h27.4137c-2.7537-2.4066-3.7734-6.5697-1.6896-10.1416l26.5954-45.589z"
            fill="#80eec0"
            fill-rule="evenodd"
          />
          <path d="m78.0002 40.3997c2.6666-4.5329 9.333-4.5329 11.9996 0l29.0612 49.4013c2.667 4.5329-.666 10.199-5.999 10.199h-58.1237c-5.3331 0-8.6664-5.6661-5.9998-10.199z" fill="#00dc82" />
        </svg>
      }
      detail="Nuxt"
      onHover={isHover}
      classNameDiv="flex flex-col w-[50px] h-[50px]"
      classNameDetail="w-fit -mt-3 ml-[15px]"
    />
  );
}
