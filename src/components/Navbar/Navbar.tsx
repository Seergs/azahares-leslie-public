import React from "react";

import styled from "styled-components";
import theme from "../../theme/theme";
const { colors, fontSizes } = theme;

const Header = styled.header`
  padding: 2rem;
`;

const Link = styled.a`
  font-family: "Pinyon Script", cursive;
  font-size: ${fontSizes.header};
  color: ${colors.black};

  &:hover {
    color: ${colors.darkGray};
  }
`;

export default function Navbar() {
  return (
    <Header>
      <Link href="/">Azahares Leslie</Link>
    </Header>
  );
}
