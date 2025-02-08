import { createContext, useMemo, useRef, useState } from "react";

export const PortfolioContextValue = createContext({});
export const PortfolioContextUpdater = createContext({});

const PortfolioContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [navbarCollapse, setNavbarCollapse] = useState(false);

  // Refs
  const homeRef = useRef(null);
  const aboutMeRef = useRef(null);
  const projectsRef = useRef(null);
  const servicesRef = useRef(null);
  const contactMeRef = useRef(null);

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
