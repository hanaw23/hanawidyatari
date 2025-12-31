import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export const useFindSection = (sectionId, offset = 210) => {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const section = document.getElementById(sectionId);
    if (!section) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();

      const inView = rect.top <= offset && rect.bottom >= offset;

      const hashMatch = window.location.hash === `#${sectionId}`;

      setIsActive(inView && hashMatch);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("hashchange", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleScroll);
    };
  }, [sectionId, offset]);

  return isActive;
};
