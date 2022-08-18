import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import LightIcon from "../svg/LightIcon";
import DarkIcon from "../svg/DarkIcon";
import DetailHover from "../hovers/DetailHover";

export default function Header() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <>
          <DetailHover
            icon={
              <div className="flex flex-col px-2">
                <LightIcon role="button" onClick={() => setTheme("light")} height={20} width={20} className="fill-gray-50" hover={() => setIsHover(true)} leave={() => setIsHover(!isHover)} />
              </div>
            }
            detail="Light"
            onHover={isHover}
          />
        </>
      );
    } else {
      return (
        <>
          <DetailHover
            icon={
              <div className="flex flex-col px-2">
                <DarkIcon role="button" onClick={() => setTheme("dark")} height={20} width={20} className="fill-gray-800" hover={() => setIsHover(true)} leave={() => setIsHover(!isHover)} />
              </div>
            }
            detail="Dark"
            onHover={isHover}
          />
        </>
      );
    }
  };

  return (
    <div className="bg-[#7C96BF] dark:bg-transparent w-screen h-16 flex justify-around py-4">
      <div className="flex gap-2">
        <div className="flex">
          <h1 className="font-bold text-lg">Hana</h1>
          <span className="font-bold text-lg text-blue-500">W</span>
        </div>
        <span height={10} width={10}>
          🤖
        </span>
      </div>
      <div className="ml-40">
        <ul className="flex gap-10 text-sm">
          <li className="cursor-pointer">About Me</li>
          <li>Technical Features</li>
          <li>Experiences</li>
          <li>Contact Me</li>
        </ul>
      </div>
      {renderThemeChanger()}
    </div>
  );
}
