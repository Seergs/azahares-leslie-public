import React from "react";
import styled from "styled-components/macro";
import Slider from "./Slider";
import theme from "../../theme/theme";

const { colors, fontSizes } = theme;

const Container = styled.div`
  padding-bottom: 5rem;
`;
const Subheading = styled.h3`
  margin-top: 5rem;
  text-align: center;
  color: ${colors.darkBeige};
`;
const Title = styled.h1`
  text-align: center;
  color: ${colors.black};
  font-size: ${fontSizes.title};
  font-weight: normal;
  margin-bottom: 2rem;
`;

export default function Gallery() {
  return (
    <Container id="products">
      <Subheading>TRADICIONES QUE PERDURAN</Subheading>
      <Title>Galería de productos</Title>
      <Slider />
    </Container>
  );
}
