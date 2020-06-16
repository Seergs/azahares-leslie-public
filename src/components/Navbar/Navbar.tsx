import React from "react";
import { Link } from "react-router-dom";

import styled, { css } from "styled-components";

const StyledNavbar = styled.nav`
  ${(props) => css`
    height: 50px;
    display: flex;
    align-items: baseline;
    .brand {
      width: 40%;
      font-family: "Pinyon Script", cursive;
      font-size: 2rem;
      color: ${props.theme.colors.grays.gray900};

      &:hover {
        color: ${props.theme.primaryColor};
      }
    }
    ul {
      width: 60%;
      display: flex;
      justify-content: flex-end;

      li {
        font-size: 1.1rem;
        margin: 0 1em;

        a {
          color: ${props.theme.colors.grays.gray900};
        }
      }
    }
  `}
`;

export default function Navbar() {
  return (
    <StyledNavbar>
      <Link to="/" className="brand">
        Azahares Leslie
      </Link>
      <ul>
        <li>
          <Link to="/products">productos</Link>
        </li>
        <li>
          <Link to="/contact">contacto</Link>
        </li>
      </ul>
    </StyledNavbar>
  );
}
