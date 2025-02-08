import { mediaQueryMaxWidth } from "@/utils/mediaQueries";
import { css } from "@emotion/css";

export const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: #fff;
`;

export const componentWrapper = css`
  width: 850px;
  max-width: 850px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  ${mediaQueryMaxWidth.sm1} {
    width: 100%;
    max-width: 100%;
    padding: 0 25px;
    gap: 20px;
  }
`;
