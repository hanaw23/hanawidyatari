import { ThemeProvider } from "next-themes";
import { ParallaxProvider } from "react-scroll-parallax";

import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <ParallaxProvider>
        <Component {...pageProps} />
      </ParallaxProvider>
    </ThemeProvider>
  );
}

export default MyApp;
