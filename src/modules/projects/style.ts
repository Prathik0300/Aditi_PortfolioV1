import { css } from "@emotion/css";

export const projectContainer = css`
  display: flex;
  flex-direction: column;
  gap: 30px;
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
`;

export const projectContent = css`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 50%;
`;

export const imageContainer = css`
  width: 50%;
  max-width: 50%;
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
