import React from "react";
import styled from "styled-components/macro";
import theme from "../../theme/theme";
const { colors, fontSizes } = theme;

const StyledFooter = styled.footer`
  margin-top: 5rem;
  background-color: ${colors.ultraBlack};
  height: 170px;
  color: ${colors.white};
  padding: 2rem;

  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: 1fr 2fr;
  column-gap: 1rem;
`;

const Title = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  text-align: right;
  font-size: ${fontSizes.lg};
`;

const List = styled.ul`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
`;

const ListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 3px;
  }
  a {
    color: white;
  }
`;

const ContactInfo = styled.div`
  grid-column: 3 / 4;
  grid-row: 2 / 3;
  p,
  h5 {
    font-size: ${fontSizes.lg};
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <Title>Azahares Leslie</Title>
      <List>
        <ListItem>
          <a href="#about">Acerca</a>
        </ListItem>
        <ListItem>
          <a href="#products">Productos</a>
        </ListItem>
      </List>
      <ContactInfo>
        <h5>CONTACTO</h5>
        <p>Tel 355-511-54-55</p>
      </ContactInfo>
    </StyledFooter>
  );
}
