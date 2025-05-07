import Navbar from "@hanawidyatari/components/statics/Navbar";
import ScrollProgress from "@hanawidyatari/components/scrolls/ScrollProgress";
import HomePage from "@hanawidyatari/pages/home";
import AboutMePage from "@hanawidyatari/pages/aboutMe";
import ExperiencesPage from "@hanawidyatari/pages/experiences";
import ProjectsPage from "@hanawidyatari/pages/projects";
import ContactMePage from "@hanawidyatari/pages/contactMe";

export default function Home() {
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
      <section id="experiences">
        <ExperiencesPage />
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
