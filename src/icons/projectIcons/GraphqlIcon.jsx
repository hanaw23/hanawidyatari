import { useState } from "react";
import DetailHover from "@hanawidyatari/components/hovers/DetailHover";

export default function GraphqlIcon(props) {
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
          viewBox="0 0 32 32"
          className="dark:fill-gray-50 fill-[#0e0e0e] cursor-pointer"
          fill={props.fill}
          height={props.height}
          width={props.width}
          onClick={props.onClick}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeaveHover}
        >
          <g fill="#e10098">
            <path d="m-.43 12.534h22.901v1.187h-22.901z" transform="matrix(.50001511 -.86601668 .86601668 .50001511 -5.858 16.107)" />
            <path d="m4.545 21.162h22.902v1.187h-22.902z" />
            <path d="m10.43 18.008h1.187v13.227h-1.187z" transform="matrix(.50001511 -.86601668 .86601668 .50001511 -15.812 21.857)" />
            <path d="m20.381.771h1.187v13.227h-1.187z" transform="matrix(.50001511 -.86601668 .86601668 .50001511 4.092 21.856)" />
            <path d="m4.412 6.787h13.227v1.187h-13.227z" transform="matrix(.86601668 -.50001511 .50001511 .86601668 -2.213 6.502)" />
            <path d="m20.389 1.677h1.187v22.901h-1.187z" transform="matrix(.86601668 -.50001511 .50001511 .86601668 -3.753 12.25)" />
            <path d="m5.454 9.386h1.187v13.228h-1.187z" />
            <path d="m25.36 9.386h1.187v13.228h-1.187z" />
            <path d="m15.222 24.097h11.504v1.037h-11.504z" transform="matrix(.86601668 -.50001511 .50001511 .86601668 -9.498 13.785)" />
            <path d="m28.12 23a2.5 2.5 0 1 1 -.915-3.411 2.5 2.5 0 0 1 .915 3.411" />
            <path d="m8.2 11.5a2.5 2.5 0 1 1 -.915-3.411 2.5 2.5 0 0 1 .915 3.411" />
            <path d="m3.88 23a2.5 2.5 0 1 1 3.411.915 2.5 2.5 0 0 1 -3.411-.915" />
            <path d="m23.8 11.5a2.5 2.5 0 1 1 3.411.915 2.5 2.5 0 0 1 -3.411-.915" />
            <path d="m16 30a2.5 2.5 0 1 1 2.5-2.5 2.493 2.493 0 0 1 -2.5 2.5" />
            <path d="m16 6.991a2.5 2.5 0 1 1 2.5-2.5 2.493 2.493 0 0 1 -2.5 2.5" />
          </g>
        </svg>
      }
      detail="Graphql"
      onHover={isHover}
      classNameDiv="flex flex-col w-[50px] h-[50px]"
      classNameDetail="w-fit -mt-3 ml-[15px]"
    />
  );
}
