import Head from "next/head";

import Header from "../components/statics/Header";
import AboutMe from "./aboutMe";
import TechnicalFeatures from "./technicalFeatures";

export default function Home() {
  return (
    <div className="h-screen overflow-x-hidden">
      <Head>
        <title>Hana Widyatari | Portfolio 👩‍💻 </title>
      </Head>

      <Header />

      <p className="dark:text-white">Hallo Everything, Im Hana</p>

      <AboutMe />

      <TechnicalFeatures />
    </div>
  );
}
