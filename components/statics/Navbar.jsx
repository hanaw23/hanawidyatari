import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import LightIcon from "../svg/LightIcon";
import DarkIcon from "../svg/DarkIcon";
import DetailHover from "../hovers/DetailHover";

import { navbar } from "../../utility/navbarList";

export default function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [show, setShow] = useState(true);

  const controlNavbar = () => {
    if (window.scrollY > 50) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    return () => window.addEventListener("scroll", controlNavbar);
  }, []);

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
            classNameDiv="flex flex-col w-[50px] h-[50px]"
            classNameDetail="w-fit -mt-3 ml-[18px]"
          />
        </>
      );
    } else {
      return (
        <>
          <DetailHover
            icon={
              <div className="flex flex-col px-2">
                <DarkIcon role="button" onClick={() => setTheme("dark")} height={20} width={20} className="fill-gray-50" hover={() => setIsHover(true)} leave={() => setIsHover(!isHover)} />
              </div>
            }
            detail="Dark"
            onHover={isHover}
            classNameDiv="flex flex-col w-[50px] h-[50px]"
            classNameDetail="w-fit -mt-3 ml-[18px]"
          />
        </>
      );
    }
  };

  return (
    <div className={` ${show ? "fixed" : "hidden"} z-50`}>
      <div className="backdrop-blur-md bg-white/6 text-gray-50 w-screen h-[58px] flex justify-around py-4 active ">
        <div className="flex gap-2">
          <div className="flex">
            <h1 className="font-bold text-lg">Hana</h1>
            <span className="font-bold text-lg text-blue-500">W</span>
          </div>
          <span height={10} width={10}>
            🤖
          </span>
        </div>
        <div className="ml-40 flex gap-16">
          {navbar.map((item, i) => {
            return (
              <ul className=" text-sm " key={i}>
                <li className="cursor-pointer hover:text-[#d992f7]">
                  <a href={item.link}>{item.name}</a>
                </li>
              </ul>
            );
          })}
        </div>
        {renderThemeChanger()}
      </div>
    </div>
  );
}
