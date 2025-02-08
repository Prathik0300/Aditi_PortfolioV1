import { mediaQueryMaxWidth, mediaQueryMinWidth } from "@/utils/mediaQueries";
import { css } from "@emotion/css";

export const navbarContainer = css`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 22;
  margin-bottom: 30px;
  background-color: var(--dark-scheme);

  ${mediaQueryMaxWidth.sm} {
    justify-content: flex-start;
    align-items: center;
    
  }
`;

export const navbarContentWrapper = css`
  width: 90%;
  max-width: max-content;
  min-width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  z-index: 2;

  ${mediaQueryMaxWidth.sm} {
    width: 100%;
    padding: 0;
    justify-content: flex-start;

    button {
      padding: 10px 0;
    }
  }
`;

export const navbarContent = css`
  margin: 0 10px;
  cursor: pointer;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: bold;
  position: relative;
  transition: all 0.3s ease-in-out;
  opacity: 0.75;

  &::after {
    content: "";
    width: 0px;
    position: absolute;
  }

  &:hover {
    opacity: 1;
  }

  ${mediaQueryMaxWidth.sm} {
  }
`;

export const activeContent = (isElementLeftOfActiveNavItem?: boolean) => css`
  color: var(--primary);
  transition: 300ms;

  ${mediaQueryMinWidth.sm} {
    opacity: 1;
    &::after {
      opacity: 1;
      content: "";
      position: absolute;
      height: 2px;
      width: 100%;
      ${isElementLeftOfActiveNavItem ? "right: 0;" : "left: 0;"};
      bottom: -3px;
      background-color: var(--primary);
      transition: 300ms;
    }
  }
`;

export const hamburgerMenuContainer = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 100%;
  height: 100%;
  max-height: 100%;
  background-color: var(--black);
  padding: 25px;
  font-size: 20px;
  font-weight: bold;
  border: none;
`;

export const closeIconContainer = css`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;

  svg {
    width: 30px;
    height: 30px;
  }
`;
