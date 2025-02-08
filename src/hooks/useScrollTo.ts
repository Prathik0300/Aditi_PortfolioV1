import { RefObject } from "react";
import { usePortfolioContext } from "./usePortfolioContext";

export const useScrollTo = () => {
  const {
    contextValue: { idRefMap },
  } = usePortfolioContext();

  const scrollTo = (targetRef?: RefObject<null | HTMLElement>) => {
    if (targetRef?.current) {
      targetRef?.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const scrollToId = (id: string) => {
    if (!id || idRefMap[id] === null) {
      return;
    }
    if (idRefMap[id] !== null) {
      scrollTo(idRefMap[id]);
    }
  };

  return { scrollToId };
};
