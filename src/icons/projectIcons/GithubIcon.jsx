import { useState } from "react";

import DetailHover from "@hanawidyatari/components/hovers/DetailHover";

export default function GithubIcon(props) {
  const [isHover, setIsHover] = useState(false);

  const handleHover = () => {
    setIsHover(true);
  };

  const handleLeaveHover = () => {
    setIsHover(!isHover);
  };
  return (
    <>
      {props.noHover ? (
        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className="dark:fill-gray-50 fill-[#0e0e0e] cursor-pointer" width={props.width} height={props.height} fill={props.fill}>
          <path d="m0 0h16v16h-16z" fill="none" />
          <path
            clip-rule="evenodd"
            d="m7.999 0c-4.417 0-7.999 3.582-7.999 8 0 3.534 2.292 6.533 5.471 7.591.4.073.546-.174.546-.386 0-.19-.007-.693-.011-1.361-2.225.483-2.695-1.072-2.695-1.072-.364-.924-.888-1.17-.888-1.17-.726-.496.055-.486.055-.486.803.057 1.225.824 1.225.824.714 1.223 1.872.87 2.328.665.073-.517.279-.87.508-1.069-1.776-.202-3.644-.888-3.644-3.954 0-.873.312-1.587.823-2.147-.081-.202-.356-1.016.08-2.117 0 0 .672-.215 2.2.82.638-.177 1.322-.266 2.002-.269.679.003 1.364.092 2.003.269 1.527-1.035 2.198-.82 2.198-.82.436 1.101.162 1.915.08 2.117.513.559.822 1.273.822 2.147 0 3.073-1.87 3.75-3.653 3.948.287.247.543.735.543 1.481 0 1.069-.01 1.932-.01 2.195 0 .214.144.463.55.385 3.177-1.061 5.467-4.057 5.467-7.591 0-4.418-3.582-8-8.001-8z"
            fill-rule="evenodd"
          />
        </svg>
      ) : (
        <DetailHover
          icon={
            <svg
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
              className="dark:fill-gray-50 fill-[#0e0e0e] cursor-pointer"
              width={props.width}
              height={props.height}
              fill={props.fill}
              onMouseEnter={handleHover}
              onMouseLeave={handleLeaveHover}
            >
              <path d="m0 0h16v16h-16z" fill="none" />
              <path
                clip-rule="evenodd"
                d="m7.999 0c-4.417 0-7.999 3.582-7.999 8 0 3.534 2.292 6.533 5.471 7.591.4.073.546-.174.546-.386 0-.19-.007-.693-.011-1.361-2.225.483-2.695-1.072-2.695-1.072-.364-.924-.888-1.17-.888-1.17-.726-.496.055-.486.055-.486.803.057 1.225.824 1.225.824.714 1.223 1.872.87 2.328.665.073-.517.279-.87.508-1.069-1.776-.202-3.644-.888-3.644-3.954 0-.873.312-1.587.823-2.147-.081-.202-.356-1.016.08-2.117 0 0 .672-.215 2.2.82.638-.177 1.322-.266 2.002-.269.679.003 1.364.092 2.003.269 1.527-1.035 2.198-.82 2.198-.82.436 1.101.162 1.915.08 2.117.513.559.822 1.273.822 2.147 0 3.073-1.87 3.75-3.653 3.948.287.247.543.735.543 1.481 0 1.069-.01 1.932-.01 2.195 0 .214.144.463.55.385 3.177-1.061 5.467-4.057 5.467-7.591 0-4.418-3.582-8-8.001-8z"
                fill-rule="evenodd"
              />
            </svg>
          }
          detail="Github"
          onHover={isHover}
          classNameDiv="flex flex-col w-[50px] h-[50px]"
          classNameDetail="w-fit -mt-3 ml-[13px]"
        />
      )}
    </>
  );
}
