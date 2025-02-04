import { css } from "@emotion/css";

export const landingContainer = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
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
`;

export const linkContainer = css`
  display: flex;
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
`;
