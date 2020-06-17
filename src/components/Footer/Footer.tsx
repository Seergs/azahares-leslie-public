import React from "react";

import styled, { css } from "styled-components";

const StyledFooter = styled.footer`
  ${(props) => css`
    margin-top: 4em;
    background-color: black;

    padding: 3em 0;

    h4 {
      text-align: center;
      color: ${props.theme.colors.grays.gray400};
      margin-bottom: 1em;
      font-size: 1rem;
    }

    .container {
      display: flex;
      justify-content: center;

      h5 {
        margin: 0 1em;
        color: ${props.theme.colors.grays.gray600};
        font-size: 0.9rem;
      }
    }
  `}
`;

export default function Footer() {
  return (
    <StyledFooter>
      <h4>Azahares Leslie 2020</h4>
      <div className="container">
        <h5>Chilchota, Michoacán</h5>
        <h5>Tel 355-511-5455</h5>
      </div>
    </StyledFooter>
  );
}
