import { mediaQueryMaxWidth, mediaQueryMinWidth } from "@/utils/mediaQueries";
import { css } from "@emotion/css";

export const landingContainer = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;

  ${mediaQueryMaxWidth.sm} {
    flex-direction: column;
  }
`;

export const contentContainer = css`
  width: 80%;

  p {
    margin: 0;
    font-size: 21px;
  }

  h1 {
    font-weight: bold;
    font-size: 40px;
    color: var(--primary);
  }

  ${mediaQueryMaxWidth.sm} {
    width: 100%;
  }
`;

export const linkContainer = css`
  width: 100%;
  display: flex;
  gap: 8px;
  justify-content: start;
  ${mediaQueryMinWidth.sm} {
    flex-direction: column;
    height: 100%;
    width: 20%;
    align-items: center;
    justify-content: end;
    gap: 12px;
    ::before {
      content: "";
      height: 100px;
      width: 2px;
      background: var(--primary);
      opacity: 0.7;
    }
  }
`;
