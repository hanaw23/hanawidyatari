import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import LightIcon from "../svg/LightIcon";
import DarkIcon from "../svg/DarkIcon";
import DetailHover from "../hovers/DetailHover";
import { navbar } from "../../utility/navBarList";

export default function Navbar() {
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
    <div className="bg-[#a934dc] dark:bg-[#0e0e0e] w-screen h-18 flex justify-around py-6 active fixed">
      <div className="flex gap-2">
        <div className="flex">
          <h1 className="font-bold text-lg">Hana</h1>
          <span className="font-bold text-lg text-blue-500">W</span>
        </div>
        <span height={10} width={10}>
          🤖
        </span>
      </div>
      <div className="ml-40 flex gap-10">
        {navbar.map((item, i) => {
          return (
            <ul className=" text-sm" key={i}>
              <li className="cursor-pointer">{item.name}</li>
            </ul>
          );
        })}
      </div>
      {renderThemeChanger()}
    </div>
  );
}
