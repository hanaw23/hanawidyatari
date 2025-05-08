import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import ThemeToggle from "@hanawidyatari/components/toggles/ThemeToggle";
import { navbar } from "@hanawidyatari/utils/navbarList";

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [show, setShow] = useState(true);
  const [activeLink, setActiveLink] = useState("");

  // This function is to control show and unshow navbar (deprecated)
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

  const smoothScroll = (link) => {
    setActiveLink(link);
    const element = document.getElementById(link.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", link);
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;
    const isDarkTheme = currentTheme === "dark";

    const handleToggle = () => {
      setTheme(isDarkTheme ? "light" : "dark");
    };

    return <ThemeToggle isDarkTheme={isDarkTheme} onChange={handleToggle} />;
  };

  return (
    <div className={`fixed z-50`}>
      <div className="backdrop-blur-md dark:bg-gray-800/30 bg-white/20 text-gray-50 w-screen h-[58px] flex justify-around py-4 active ">
        <div className="flex gap-2">
          <div className="flex">
            <h1 className="font-bold text-lg dark:text-white text-gray-900">Hana</h1>
            <span className="font-bold text-lg text-orange-500">W</span>
          </div>
          <span height={10} width={10}>
            🤖
          </span>
        </div>
        <div className="ml-40 flex gap-16">
          {navbar.map((item, i) => {
            const isActive = item.link === activeLink;

            return (
              <ul className="text-sm dark:text-white text-gray-900" key={i}>
                <li className={`cursor-pointer hover:text-[#d992f7] ${isActive ? "text-[#d992f7] font-semibold text-base" : ""}`} onClick={() => smoothScroll(item.link)}>
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
