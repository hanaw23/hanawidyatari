import Head from "next/head";
import { NavigationProvider } from "@hanawidyatari/contexts";
import { ThemeProvider } from "next-themes";
import { ParallaxProvider } from "react-scroll-parallax";
import "@hanawidyatari/styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <NavigationProvider>
        <ParallaxProvider>
          <Head>
            <title>Hana Widyatari</title>
          </Head>
          <Component {...pageProps} />
        </ParallaxProvider>
      </NavigationProvider>
    </ThemeProvider>
  );
}

export default MyApp;
