import { NAVBAR_CONTENT } from "@/constants";
import {
  activeContent,
  navbarContainer,
  navbarContent,
  navbarContentWrapper,
  hamburgerMenuContainer,
  closeIconContainer,
} from "./style";
import { useEffect, useState } from "react";
import classNames from "classnames";
import useIsMobile from "@/hooks/useIsMobile";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { usePortfolioContext } from "@/hooks/usePortfolioContext";
import HamburgerMenu from "@/components/hamburger_menu";
import CloseIcon from "@mui/icons-material/Close";
import { useScrollTo } from "@/hooks/useScrollTo";

const Navbar = () => {
  const [activeNavItem, setActiveNavItem] = useState(NAVBAR_CONTENT[0]);
  const isMobile = useIsMobile();
  const {
    contextValue: { navbarCollapse },
    contextUpdater: { setNavbarCollapse },
  } = usePortfolioContext();
  const { scrollToId } = useScrollTo();

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
        scrollToId(navItem.id);
        if (isMobile) {
          toggleNavbarCollapse();
        }
        return;
      }
      if (setActiveNavItem) {
        setActiveNavItem((prevNavItem) => ({
          ...navItem,
          isElementLeftOfActiveNavItem: navItem.navIndex < prevNavItem.navIndex,
        }));
        if (isMobile) {
          toggleNavbarCollapse();
        }
        scrollToId(navItem.id);
      }
    };
  };

  const toggleNavbarCollapse = () => {
    setNavbarCollapse((prev) => !prev);
  };

  return (
    <div id="navbar" className={navbarContainer}>
      {isMobile ? (
        <div className={navbarContentWrapper}>
          <IconButton onClick={toggleNavbarCollapse}>
            <MenuIcon />
          </IconButton>
          <HamburgerMenu open={navbarCollapse} onClose={toggleNavbarCollapse}>
            <div className={hamburgerMenuContainer}>
              <div
                className={closeIconContainer}
                onClick={toggleNavbarCollapse}
              >
                <CloseIcon />
              </div>
              {NAVBAR_CONTENT.map((navItem) => {
                const isActive = activeNavItem?.id === navItem.id;

                return (
                  <div
                    key={`hamburger-menu-${navItem.displayName}`}
                    className={classNames({ [activeContent()]: isActive })}
                    onClick={handleNavItemClick(navItem)}
                  >
                    {navItem.displayName}
                  </div>
                );
              })}
            </div>
          </HamburgerMenu>
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default Navbar;
