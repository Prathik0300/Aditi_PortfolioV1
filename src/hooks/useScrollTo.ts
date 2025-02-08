import { RefObject } from "react";
import { usePortfolioContext } from "./usePortfolioContext";

export const useScrollTo = () => {
  const {
    contextValue: { idRefMap },
  } = usePortfolioContext();

  const scrollTo = (targetRef?: null | RefObject<HTMLElement>) => {
    targetRef?.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const scrollToId = (id: string) => {
    if (!id || !idRefMap[id]) {
      return;
    }
    scrollTo(idRefMap[id]);
  };

  return { scrollToId };
};
