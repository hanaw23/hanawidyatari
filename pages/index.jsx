import Navbar from "../components/statics/Navbar";
import ScrollProgress from "../components/scrolls/ScrollProgress";
import HomePage from "./home";
import AboutMe from "./aboutMe";
import Experiences from "./experiences";
import Projects from "./projects";
import ContactMe from "./contactMe";

export default function Home() {
  return (
    <>
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
    </>
  );
}
