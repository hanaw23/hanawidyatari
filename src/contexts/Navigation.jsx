"use client";

import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "@hanawidyatari/components/statics/Navbar";
import ScrollProgress from "@hanawidyatari/components/scrolls/ScrollProgress";

export const NavigationContext = createContext({});

export const NavigationProvider = ({ children }) => {
  const router = useRouter();
  const { id } = router.query;
  const fullPath = router.asPath;
  const idPage = id;
  const [isMobile, setIsMobile] = useState(false);

  const backToDashboard = () => {
    router.push("/");
  };

  return (
    <NavigationContext.Provider value={{ isMobile, setIsMobile }}>
      <ScrollProgress />
      {!isMobile && <Navbar isIdPageExist={idPage} handleGoBack={backToDashboard} />}
      {children}
    </NavigationContext.Provider>
  );
};
