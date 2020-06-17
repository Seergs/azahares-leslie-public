import React from "react";

import styled, { css } from "styled-components";

const StyledAbout = styled.section`
  ${(props) => css`
    max-width: 900px;
    margin: 10em auto 0 auto;

    h3,
    p {
      text-align: center;
    }

    h3 {
      color: ${props.theme.colors.teals.teal800};

      border-bottom: 1px solid ${props.theme.colors.teals.teal500};
      line-height: 0.1em;

      margin-bottom: 2em;

      span {
        background-color: white;
        padding: 0 10px;
      }
    }

    p {
      margin: 0 auto;
      max-width: 600px;
      line-height: 30px;

      color: ${props.theme.colors.teals.teal800};
    }
  `}
`;

export default function About() {
  return (
    <StyledAbout>
      <h3>
        <span>Acerca de nosotros</span>
      </h3>
      <p>
        Somos una pequeña empresa que se dedica a la creación de todo tipo de
        productos para ceremonias religiosas, como bodas, primeras comuniones,
        bautizos y más.
      </p>
    </StyledAbout>
  );
}
