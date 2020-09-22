import { css } from "styled-components";

const mixins = {
  flex: css`
    display: flex;
  `,
  flexColumn: css`
    display: flex;
    flex-direction: column;
  `,
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  justifyCenter: css`
    display: flex;
    justify-content: center;
  `,
  justifyBetween: css`
    display: flex;
    justify-content: space-between;
  `,
  alignCenter: css`
    display: flex;
    align-items: center;
  `,
};

export default mixins;
