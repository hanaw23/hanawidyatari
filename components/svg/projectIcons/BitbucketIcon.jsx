import { useState } from "react";

import DetailHover from "../../hovers/DetailHover";

export default function BitbucketIcon(props) {
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
        <svg preserveAspectRatio="xMidYMid" viewBox="0 0 256 231" xmlns="http://www.w3.org/2000/svg" lassName={props.className} width={props.width} height={props.height} onMouseEnter={handleHover} onMouseLeave={handleLeaveHover}>
          <linearGradient id="a" x1="108.63338%" x2="46.926596%" y1="13.818022%" y2="78.776141%">
            <stop offset=".18" stop-color="#0052cc" />
            <stop offset="1" stop-color="#2684ff" />
          </linearGradient>
          <g fill="none">
            <path d="m101.272088 152.561281h53.448624l12.901393-75.3195555h-80.5620266z" />
            <path
              d="m8.30813067.0006835c-2.42310093-.03125205-4.73600404 1.01057319-6.31827423 2.84600661s-2.27194244 4.2765956-1.88401252 6.66864601l34.81870728 211.37292988c.895485 5.339259 5.4953944 9.264746 10.9090413 9.309595h167.0395695c4.063354.052298 7.552433-2.878529 8.202287-6.889921l34.818707-213.75159244c.38793-2.39205042-.301742-4.83321259-1.884012-6.66864602-1.582271-1.83543342-3.895174-2.87725865-6.318275-2.84600661zm146.61587533 152.7675905h-53.314864l-14.4360243-75.4200265h80.6694903z"
              fill="#2684ff"
            />
            <path
              d="m244.610824 77.2417255h-76.917048l-12.908296 75.3598565h-53.272329l-62.9023275 74.663219c1.9937259 1.723985 4.5356374 2.682649 7.1712751 2.704595h166.9472844c4.060112.052256 7.546408-2.876232 8.195743-6.884424z"
              fill="url(#a)"
            />
          </g>
        </svg>
      }
      detail="Bootstrap"
      onHover={isHover}
      classNameDiv="flex flex-col w-[50px] h-[50px]"
      classNameDetail="w-fit -mt-3 ml-[10px]"
    />
  );
}
