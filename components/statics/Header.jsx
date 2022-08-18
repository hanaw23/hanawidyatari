import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import LightIcon from "../svg/LightIcon";
import DarkIcon from "../svg/DarkIcon";
import DetailHover from "../hovers/DetailHover";
import TriangleIcon from "../svg/TriangleIcon";

export default function Header() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <div className="flex flex-col px-2">
          <LightIcon role="button" onClick={() => setTheme("light")} height={20} width={20} className="fill-gray-50" />
        </div>
      );
    } else {
      return (
        <div>
          <DarkIcon role="button" onClick={() => setTheme("dark")} height={20} width={20} />
        </div>
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
