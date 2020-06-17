import React from "react";
import { Link } from "react-router-dom";

import styled, { css } from "styled-components";

const StyledNavbar = styled.nav`
  ${(props) => css`
    height: 50px;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    .brand {
      width: 40%;
      font-family: "Pinyon Script", cursive;
      font-size: 2rem;

      a {
        color: ${props.theme.secondaryColor};
        &:hover {
          color: ${props.theme.primaryColor};
        }
      }
    }
    ul {
      width: 60%;
      display: flex;
      justify-content: flex-end;

      li {
        font-size: 1.1rem;
        margin: 0 1em;
        transition: transform 50ms ease;

        &:hover {
          transform: scale(1.05);
        }

        a {
          color: ${props.theme.colors.grays.gray900};
        }
      }
    }

    @media screen and (max-width: 1340px) {
      .brand {
        margin-right: 1em;
        width: fit-content;
      }
      ul {
        width: fit-content;
      }
    }

    @media screen and (max-width: 1284px) {
      width: auto;
    }
  `}
`;

type NavbarProps = {
  search?: boolean;
};

export default function Navbar({ search = false }: NavbarProps) {
  return (
    <StyledNavbar>
      <div className="brand">
        <Link to="/">Azahares Leslie</Link>
      </div>
      {search && <input />}
    </StyledNavbar>
  );
}
