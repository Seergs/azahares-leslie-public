import React from "react";

import styled, { css } from "styled-components";
import { FaArrowRight } from "react-icons/fa";

import Navbar from "../Navbar/Navbar";

import image from "../../assets/images/hero.jpg";
import { Link } from "react-router-dom";

const StyledLanding = styled.section`
  ${(props) => css`
    display: flex;
    height: 100vh;
    main {
      padding: 2em 3em 2em 4em;
      width: 65%;
      display: flex;
      flex-direction: column;

      h1 {
        font-size: 3rem;
        max-width: 500px;
        line-height: 72px;
        color: ${props.theme.secondaryColor};
      }

      p {
        margin-top: 0.8em;
        font-size: 1.3rem;
        color: ${props.theme.secondaryColor};
      }

      .primary {
        width: fit-content;
        display: flex;
        align-items: center;
        margin-top: 4em;
        border-bottom: 5px solid ${props.theme.primaryColor};
        color: ${props.theme.secondaryColor};
        font-weight: bold;

        svg {
          color: ${props.theme.primaryColor};
          margin-left: 8px;
        }
      }

      .container {
        margin-top: 5em;
        height: 500px;
      }
    }

    img {
      width: 35%;
    }
  `}
`;

export default function Landing() {
  return (
    <StyledLanding>
      <main>
        <Navbar />
        <div className="container">
          <h1>ARTÍCULOS RELIGIOSOS PARA TODA OCASIÓN</h1>
          <p>Hechos con la mejor calidad y al mejor precio</p>
          <Link to="/products" className="primary">
            Ver productos
            <FaArrowRight />
          </Link>
        </div>
      </main>
      <img src={image} alt="bride" />
    </StyledLanding>
  );
}
