import {
  PortfolioContextUpdaterType,
  PortfolioContextValueType,
} from "@/types";
import { createContext, useMemo, useRef, useState } from "react";

export const PortfolioContextValue = createContext<PortfolioContextValueType>({
  navbarCollapse: false,
  homeRef: { current: null },
  aboutMeRef: { current: null },
  projectsRef: { current: null },
  servicesRef: { current: null },
  contactMeRef: { current: null },
  idRefMap: {},
});
export const PortfolioContextUpdater =
  createContext<PortfolioContextUpdaterType>({
    setNavbarCollapse: null,
  });

const PortfolioContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [navbarCollapse, setNavbarCollapse] = useState(false);

  // Refs
  const homeRef = useRef<HTMLElement | null>(null);
  const aboutMeRef = useRef<HTMLElement | null>(null);
  const projectsRef = useRef<HTMLElement | null>(null);
  const servicesRef = useRef<HTMLElement | null>(null);
  const contactMeRef = useRef<HTMLElement | null>(null);

  const idRefMap = useMemo(() => {
    return {
      home: homeRef,
      aboutMe: aboutMeRef,
      projects: projectsRef,
      services: servicesRef,
      contactMe: contactMeRef,
    };
  }, []);

  const contextValue = useMemo(
    () => ({
      navbarCollapse,
      homeRef,
      aboutMeRef,
      projectsRef,
      servicesRef,
      contactMeRef,
      idRefMap,
    }),
    [
      navbarCollapse,
      homeRef,
      aboutMeRef,
      projectsRef,
      servicesRef,
      contactMeRef,
      idRefMap,
    ]
  );

  const contextUpdater = useMemo(
    () => ({ setNavbarCollapse }),
    [setNavbarCollapse]
  );

  return (
    <PortfolioContextUpdater.Provider value={contextUpdater}>
      <PortfolioContextValue.Provider value={contextValue}>
        {children}
      </PortfolioContextValue.Provider>
    </PortfolioContextUpdater.Provider>
  );
};

export default PortfolioContextProvider;
