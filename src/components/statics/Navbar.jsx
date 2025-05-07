import { useState, useEffect, useMemo } from "react";
import { useTheme } from "next-themes";

import LightIcon from "@hanawidyatari/icons/LightIcon";
import DarkIcon from "@hanawidyatari/icons/DarkIcon";
import DetailHover from "@hanawidyatari/components/hovers/DetailHover";
import { navbar } from "@hanawidyatari/utils/navbarList";

const Navbar = () => {
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

  const smoothScroll = (link) => {
    const element = document.getElementById(link.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", link);
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
    const isDarkTheme = currentTheme === "dark";

    const iconTheme = (
      <div className="flex flex-col px-2">
        {isDarkTheme ? (
          <LightIcon role="button" onClick={() => setTheme("light")} height={20} width={20} className="fill-gray-50" hover={() => setIsHover(true)} leave={() => setIsHover(!isHover)} />
        ) : (
          <DarkIcon role="button" onClick={() => setTheme("dark")} height={20} width={20} className="fill-gray-50" hover={() => setIsHover(true)} leave={() => setIsHover(!isHover)} />
        )}
      </div>
    );

    return <DetailHover icon={iconTheme} detail={isDarkTheme ? "Light" : "Dark"} onHover={isHover} classNameDiv="flex flex-col w-[50px] h-[50px]" classNameDetail="w-fit -mt-3 ml-[18px]" />;
  };

  return (
    <div className={` ${show ? "fixed" : "hidden"} z-50`}>
      <div className="backdrop-blur-md bg-white/6 text-gray-50 w-screen h-[58px] flex justify-around py-4 active ">
        <div className="flex gap-2">
          <div className="flex">
            <h1 className="font-bold text-lg">Hana</h1>
            <span className="font-bold text-lg text-orange-500">W</span>
          </div>
          <span height={10} width={10}>
            🤖
          </span>
        </div>
        <div className="ml-40 flex gap-16">
          {navbar.map((item, i) => {
            return (
              <ul className="text-sm" key={i}>
                <li className="cursor-pointer hover:text-[#d992f7]" onClick={() => smoothScroll(item.link)}>
                  {item.name}
                </li>
              </ul>
            );
          })}
        </div>
        {renderThemeChanger()}
      </div>
    </div>
  );
};

export default Navbar;
