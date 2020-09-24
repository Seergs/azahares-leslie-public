import React, { useRef } from "react";
import styled, { css } from "styled-components/macro";
import theme from "../../theme/theme";

const { colors, fontSizes } = theme;

type OddProps = {
  $isOdd?: boolean;
};

const Title = styled.h1<OddProps>`
  font-size: ${fontSizes.undelay};
  position: absolute;
  color: ${colors.underlay};
  filter: opacity(0.2);
  top: 3.5rem;

  ${({ $isOdd }) =>
    $isOdd &&
    css`
      right: 7rem;
    `}
`;

type UnderlayProps = {
  isOdd?: boolean;
  children: any;
};

export default function Underlay({ isOdd = false, children }: UnderlayProps) {
  return <Title $isOdd={isOdd}>{children}</Title>;
}
