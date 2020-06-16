import React from "react";
import styled, { css } from "styled-components";

import heroImage from "../../assets/images/hero.png";

const StyledHero = styled.section`
  ${(props) => css`
    .container {
      position: relative;
      img {
        margin-top: 1em;
        width: 100%;
        filter: opacity(30%);
      }
      h1 {
        position: absolute;
        top: 50px;
        z-index: 1;
        font-size: 2.5em;
        font-weight: normal;
        color: ${props.theme.colors.grays.gray800};
      }
      button {
        position: absolute;
        top: 70%;
        left: 50%;
        transform: translate(-50%, -70%);
        cursor: pointer;
        letter-spacing: 1px;

        border: none;
        height: 48px;
        width: 200px;

        background-color: ${props.theme.colors.teals.teal500};
        color: ${props.theme.colors.teals.teal100};
        font-size: 1rem;
        font-weight: bold;
        box-shadow: ${props.theme.shadows.shadow2};
        transition: all 0.1s linear;

        &:hover {
          filter: brightness(1.1);
          transform: translate(-50%, -75%);
        }
      }

      h1,
      button {
        padding: 0 15px;
        margin: 0 auto;
      }
    }
  `}
`;

export default function Hero() {
  return (
    <StyledHero>
      <div className="container">
        <h1>Artículos religiosos para toda ocasión</h1>
        <img src={heroImage} alt="bride" />
        <button>Ver productos</button>
      </div>
    </StyledHero>
  );
}
