import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useIsMobile } from "@hanawidyatari/hooks";

export const useFindSection = (sectionId, offset = 80) => {
  const router = useRouter();
  const isMobileView = useIsMobile();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const section = document.getElementById(sectionId);
    if (!section) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();

      const inView = rect.top <= offset && rect.bottom >= offset;

      const hashMatch = window.location.hash === `#${sectionId}`;

      isMobileView ? setIsActive(inView) : setIsActive(inView && hashMatch);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("hashchange", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleScroll);
    };
  }, [sectionId, offset, isMobileView]);

  return isActive;
};
