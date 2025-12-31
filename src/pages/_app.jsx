import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { NavigationProvider } from "@hanawidyatari/contexts";
import { ThemeProvider } from "next-themes";
import { ParallaxProvider } from "react-scroll-parallax";

import "@hanawidyatari/styles/globals.scss";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (router.pathname !== "/" && window.location.hash) {
      const cleanUrl = window.location.pathname + window.location.search;

      window.history.replaceState(null, "", cleanUrl);
    }
  }, [router]);

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
