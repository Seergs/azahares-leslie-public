import React from "react";
import styled from "styled-components";
import theme from "../../theme/theme";
import mixins from "../../theme/mixins";
import { ReactComponent as BgPattern } from "../../assets/images/pattern.svg";

const { colors, fontSizes } = theme;
const { flex, justifyBetween } = mixins;

const Wrapper = styled.div`
  background-color: ${colors.beige};
  padding: 7rem;
  position: relative;
`;

const Title = styled.h1`
  font-size: ${fontSizes.undelay};
  position: absolute;
  color: ${colors.underlay};
  filter: opacity(0.2);
  top: 3.5rem;
`;

const Subtitle = styled.h2`
  font-size: ${fontSizes.header};
  font-weight: bold;
  color: ${colors.black};
`;

const Text = styled.p`
  color: ${colors.darkBeige};
  font-size: ${fontSizes.xl};
  margin-top: 2rem;
  max-width: 500px;
`;

const ImageWrapper = styled.div`
  width: 50%;
  position: relative;
`;

const Image = styled.img`
  position: absolute;
  width: 50%;
  z-index: 1;
`;

const Pattern = styled(BgPattern)`
  position: absolute;
  left: 120px;
  top: 140px;
  width: 260px;
  height: 260px;
  filter: opacity(0.5);
`;

const Container = styled.div`
  ${flex};
  ${justifyBetween};
`;

export default function Features() {
  return (
    <Wrapper>
      <Title>ELEGANCIA</Title>
      <Subtitle>
        Accesorios
        <br /> elegantes
      </Subtitle>
      <Container>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quis
          suscipit obcaecati rerum! Animi aperiam, dicta accusantium rerum
          pariatur ipsum in temporibus reiciendis quae labore minima repudiandae
          laborum suscipit maxime.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quis
          suscipit obcaecati rerum! Animi aperiam.
        </Text>
        <ImageWrapper>
          <Image
            src="https://res.cloudinary.com/du2j41pda/image/upload/w_630,h_630/v1600816822/azahares_leslie/candle_czys0a.jpg"
            alt=""
          />
          <Pattern />
        </ImageWrapper>
      </Container>
    </Wrapper>
  );
}
