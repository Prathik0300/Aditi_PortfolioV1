import { NAVBAR_CONTENT } from "@/constants";
import {
  activeContent,
  navbarContainer,
  navbarContent,
  navbarContentWrapper,
} from "./style";
import { useEffect, useState } from "react";
import classNames from "classnames";
const Navbar = () => {
  const [activeNavItem, setActiveNavItem] = useState(NAVBAR_CONTENT[0]);

  useEffect(() => {
    if (
      activeNavItem?.isCustomHandler &&
      typeof activeNavItem?.handler === "function"
    ) {
      activeNavItem.handler();
    }
  }, [activeNavItem]);

  const handleNavItemClick = (navItem) => {
    return () => {
      if (activeNavItem?.id === navItem.id) {
        // scrollToId(navItem.id);
        return;
      }
      if (setActiveNavItem) {
        setActiveNavItem((prevNavItem) => ({
          ...navItem,
          isElementLeftOfActiveNavItem: navItem.navIndex < prevNavItem.navIndex,
        }));
        // scrollToId(navItem.id);
      }
    };
  };

  return (
    <div className={navbarContainer}>
      <div className={navbarContentWrapper}>
        {NAVBAR_CONTENT.map((navItem) => {
          const isActive = activeNavItem?.id === navItem.id;
          const isElementLeftOfActiveNavItem =
            activeNavItem?.isElementLeftOfActiveNavItem || false;
          return (
            <div
              key={`navItem-${navItem.id}`}
              className={classNames(navbarContent, {
                [activeContent(isElementLeftOfActiveNavItem)]: isActive,
              })}
              onClick={handleNavItemClick(navItem)}
            >
              {navItem.displayName}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
