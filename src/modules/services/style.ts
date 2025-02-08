import { mediaQueryMaxWidth } from "@/utils/mediaQueries";
import { css } from "@emotion/css";

export const servicesContainer = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
  margin-bottom: 30px;
`;

export const serviceTile = css`
  gap: 10px;
  display: flex;
  flex-direction: column;

  ${mediaQueryMaxWidth.sm} {
    p {
      font-size: 19px;
    }
  }
`;

export const servicesTitle = css`
  font-size: 25px;
`;
export const servicesContent = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  text-align: left;

  ${mediaQueryMaxWidth.sm} {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 30px;
  }
`;
