import { mediaQueryMaxWidth } from "@/utils/mediaQueries";
import { css } from "@emotion/css";

export const contactContainer = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  width: 100%;
  margin-bottom: 30px;

  ${mediaQueryMaxWidth.sm} {
    flex-direction: column;
  }
`;

export const contactTitle = css`
  display: flex;
  flex-direction: column;
  font-size: 30px;
  width: 40%;

  div {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  svg {
    width: 32px;
    height: 32px;
  }

  ${mediaQueryMaxWidth.sm} {
    display: grid;
    grid-template-rows: auto auto;
    align-items: center;
    justify-content: center;
    width: 100%;

    div {
      gap: 5px;
    }
  }
`;
export const contactContent = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  padding: 14px;
  height: fit-content;
  border: 2px solid var(--primary);
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: all 300ms ease-in-out;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :hover {
    background-color: var(--primary);
  }
`;
