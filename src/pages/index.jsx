import Navbar from "@hanawidyatari/components/statics/Navbar";
import ScrollProgress from "@hanawidyatari/components/scrolls/ScrollProgress";
import HomePage from "@hanawidyatari/pages/home";
import AboutMe from "@hanawidyatari/pages/aboutMe";
import Experiences from "@hanawidyatari/pages/experiences";
import Projects from "@hanawidyatari/pages/projects";
import ContactMe from "@hanawidyatari/pages/contactMe";

export default function Home() {
  return (
    <div className="w-full">
      <ScrollProgress />
      <Navbar />
      <section id="home">
        <HomePage />
      </section>
      <section id="aboutMe">
        <AboutMe />
      </section>
      <section id="experiences">
        <Experiences />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contactMe">
        <ContactMe />
      </section>
    </div>
  );
}
