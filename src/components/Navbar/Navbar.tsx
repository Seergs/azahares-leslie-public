import React from "react";
import styled from "styled-components";

const StyledNavbar = styled.nav`
  height: 4em;
  padding: 10px;

  .logo {
    font-size: 2rem;
    font-family: "Parisienne", cursive;
  }

  display: flex;
  ul {
    display: flex;
    list-style-type: none;
  }
`;

export default function Navbar() {
  return (
    <StyledNavbar>
      <div className="logo">Azahares Leslie</div>
    </StyledNavbar>
  );
}
