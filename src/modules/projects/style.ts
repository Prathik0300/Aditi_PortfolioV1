import { mediaQueryMaxWidth } from "@/utils/mediaQueries";
import { css } from "@emotion/css";

export const projectContainer = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const projectTitle = css`
  font-size: 25px;
`;

export const projectInformation = css`
  display: flex;
  flex-direction: column;
`;

export const projectTile = css`
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 20px;
  padding: 20px 0;

  ${mediaQueryMaxWidth.sm} {
    flex-direction: column;
    gap: 35px;
  }
`;

export const projectLinkContainer = css`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-wrap: wrap;
  gap: 10px;
`;

export const projectLinkBtn = css`
  :hover {
    cursor: pointer;
  }
`;

export const projectLinkIcon = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const projectContent = css`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 50%;

  p {
    font-size: 18px;
  }
  ${mediaQueryMaxWidth.sm} {
    width: 100%;
  }
`;

export const imageContainer = css`
  width: 50%;
  max-width: 50%;

  ${mediaQueryMaxWidth.sm} {
    width: 100%;
    max-width: 100%;
  }
`;

export const carousel = css`
  width: 100% !important;
  height: 100% !important;
`;

export const images = css`
  position: relative !important;
  width: 100%;
  height: 220px;
`;

export const divider = css`
  margin: 20px 0;
  border-top: none;
`;
