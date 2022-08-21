import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const scrolled = Math.floor((winScroll / height) * 100);

    setScrollTop(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="h-[5px] w-screen bg-transparent fixed">
      <div className={`h-[5px] bg-gradient-to-r from-[#b01436] via-[#a809ab] to-[#1365d1]`} style={{ width: `${scrollTop}%` }}></div>
    </div>
  );
}
