import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import ThemeToggle from "@hanawidyatari/components/toggles/ThemeToggle";
import { navbar } from "@hanawidyatari/utils/navbarList";

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [show, setShow] = useState(true);
  const [activeLink, setActiveLink] = useState("#home");

  const handleScroll = () => {
    const sections = navbar?.map((item) => item.link.slice(1));
    let currentSection = sections[0];

    for (const sectionId of sections) {
      const element = document.getElementById(sectionId);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          currentSection = sectionId;
          break;
        }
      }
    }

    const newLink = `#${currentSection}`;

    if (activeLink !== newLink) {
      setActiveLink(newLink);
      window.history.replaceState(null, "", newLink);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeLink, navbar]);

  // Handle initial load with hash in URL
  useEffect(() => {
    const hash = window.location.hash || "#home";
    setActiveLink(hash);

    // Scroll to section if hash exists
    const element = document.getElementById(hash.slice(1));
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
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
        <div className="flex justify-center gap-16">
          {navbar.map((item, i) => {
            const isActive = item.link === activeLink;
            return (
              <ul className="text-sm dark:text-white text-gray-900 text-center" key={i}>
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
