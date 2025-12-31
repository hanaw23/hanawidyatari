import { useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "@hanawidyatari/components/statics/Navbar";
import ScrollProgress from "@hanawidyatari/components/scrolls/ScrollProgress";
import HomePage from "@hanawidyatari/pages/home";
import AboutMePage from "@hanawidyatari/pages/aboutMe";
import ExperiencePage from "@hanawidyatari/pages/experience";
import ProjectsPage from "@hanawidyatari/pages/projects";
import ContactMePage from "@hanawidyatari/pages/contactMe";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.hash = "home";
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <ScrollProgress />
      <div className="hidden lg:block">
        <Navbar />
      </div>
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
