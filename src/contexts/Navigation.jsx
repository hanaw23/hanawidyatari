"use client";

import { createContext, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "@hanawidyatari/components/statics/Navbar";
import ScrollProgress from "@hanawidyatari/components/scrolls/ScrollProgress";
import { getParentPathNamePage } from "@hanawidyatari/utils/utils";

export const NavigationContext = createContext({});

export const NavigationProvider = ({ children }) => {
  const router = useRouter();
  const { id } = router.query;
  const fullPath = router.asPath;
  const sectionName = getParentPathNamePage(fullPath);
  const idPage = id;
  const [isMobile, setIsMobile] = useState(false);

  const backToDashboard = () => {
    router.push(`/#${sectionName}`);
  };

  return (
    <NavigationContext.Provider value={{ isMobile, setIsMobile }}>
      <ScrollProgress />
      {!isMobile && <Navbar isIdPageExist={idPage} handleGoBack={backToDashboard} />}
      {children}
    </NavigationContext.Provider>
  );
};
