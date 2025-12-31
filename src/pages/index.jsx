import { useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { useIsMobile } from "@hanawidyatari/hooks";
import { NavigationContext } from "@hanawidyatari/contexts";
import HomePage from "@hanawidyatari/pages/home";
import AboutMePage from "@hanawidyatari/pages/aboutMe";
import ExperiencePage from "@hanawidyatari/pages/experience";
import ProjectsPage from "@hanawidyatari/pages/projects";
import ContactMePage from "@hanawidyatari/pages/contactMe";

export default function Home() {
  const router = useRouter();
  const isMobileView = useIsMobile();
  const navigationContext = useContext(NavigationContext);
  const { setIsMobile } = navigationContext;

  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.hash = "home";
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!router.asPath.includes("#")) return;

    const id = router.asPath.split("#")[1];

    const el = document.getElementById(id);
    if (!el) return;

    setTimeout(() => {
      el.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [router.asPath]);

  useEffect(() => {
    setIsMobile(isMobileView);
  }, [isMobileView]);

  return (
    <>
      <section id="home">
        <HomePage />
      </section>
      <section id="aboutMe">
        <AboutMePage />
      </section>
      <section id="experience">
        <ExperiencePage />
      </section>
      <section id="projects">
        <ProjectsPage />
      </section>
      <section id="contactMe">
        <ContactMePage />
      </section>
    </>
  );
}
