import { useContext } from "react";
import {
  PortfolioContextUpdater,
  PortfolioContextValue,
} from "@/context/PortfolioContext";

export const usePortfolioContext = () => {
  const contextValue = useContext(PortfolioContextValue) || {};
  const contextUpdater = useContext(PortfolioContextUpdater) || {};
  return { contextValue, contextUpdater };
};
