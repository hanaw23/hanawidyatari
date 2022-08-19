import Head from "next/head";

import Navbar from "../components/statics/Navbar";
import AboutMe from "./aboutMe";
import Experiences from "./experiences";
import Styles from "../styles/Styles.module.scss";
import Projects from "./projects";

export default function Home() {
  return (
    <>
      <div className={`h-screen overflow-x-hidden ${Styles.background}`}>
        <Head>
          <title>Hana Widyatari | Portfolio 👩‍💻 </title>
        </Head>
        <div className="overflow-hidden">
          <Navbar />

          <div className="mb-10 ">
            <h1 className="text-center text-[65px] mt-32 font-semibold text-[#b2aab5]">Explore My Works</h1>
          </div>
        </div>
      </div>

      <AboutMe />

      <Experiences />

      <Projects />
    </>
  );
}
