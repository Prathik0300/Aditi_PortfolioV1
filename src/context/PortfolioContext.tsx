import { createContext, useMemo } from "react";

export const PortfolioContextValue = createContext({});
export const PortfolioContextUpdater = createContext({});

const PortfolioContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const contextValue = useMemo(() => ({}), []);
  const contextUpdater = useMemo(() => ({}), []);

  return (
    <PortfolioContextUpdater.Provider value={contextUpdater}>
      <PortfolioContextValue.Provider value={contextValue}>
        {children}
      </PortfolioContextValue.Provider>
    </PortfolioContextUpdater.Provider>
  );
};


export default PortfolioContextProvider;