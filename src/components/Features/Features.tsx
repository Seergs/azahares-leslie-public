import React from "react";
import styled, { css } from "styled-components/macro";
import theme from "../../theme/theme";
import mixins from "../../theme/mixins";
import { ReactComponent as BgPattern } from "../../assets/images/pattern.svg";

const { colors, fontSizes } = theme;
const { flex, justifyBetween, flexRowReverse } = mixins;

type OddProps = {
  isOdd?: boolean;
};

const Wrapper = styled.div`
  background-color: ${colors.beige};
  padding: 7rem;
  position: relative;
  height: 620px;
`;

const Title = styled.h1<OddProps>`
  font-size: ${fontSizes.undelay};
  position: absolute;
  color: ${colors.underlay};
  filter: opacity(0.2);
  top: 3.5rem;

  ${({ isOdd }) =>
    isOdd &&
    css`
      right: 7rem;
    `}
`;

const Subtitle = styled.h2<OddProps>`
  font-size: ${fontSizes.header};
  font-weight: bold;
  color: ${colors.black};

  ${({ isOdd }) =>
    isOdd &&
    css`
      text-align: right;
    `}
`;

const Text = styled.p<OddProps>`
  color: ${colors.darkBeige};
  font-size: ${fontSizes.xl};
  margin-top: 2rem;
  max-width: 500px;
  margin-right: 6rem;
  text-align: left;
  line-height: 1.5;

  ${({ isOdd }) =>
    isOdd &&
    css`
      margin-left: 6rem;
    `}
`;

const ImageWrapper = styled.div`
  width: 50%;
  position: relative;
`;

const Image = styled.img<OddProps>`
  position: absolute;
  width: 300px;
  height: auto;
  z-index: 1;

  ${({ isOdd }) =>
    isOdd &&
    css`
      right: 0;
    `}
`;

const Pattern = styled(BgPattern)<OddProps>`
  position: absolute;
  left: 40px;
  top: 80px;
  width: 300px;
  height: 300px;

  ${({ isOdd }) =>
    isOdd &&
    css`
      right: 50px;
      left: auto;
    `}
`;

const Container = styled.div<OddProps>`
  ${flex};

  ${({ isOdd }) =>
    isOdd &&
    css`
      ${flexRowReverse}
    `}
`;

export default function Features() {
  return (
    <>
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
            pariatur ipsum in temporibus reiciendis quae labore minima
            repudiandae laborum suscipit maxime.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quis
            suscipit obcaecati rerum! Animi aperiam.
          </Text>
          <ImageWrapper>
            <Image
              src="https://res.cloudinary.com/du2j41pda/image/upload/w_630,h_630,c_fill/v1600816822/azahares_leslie/candle_czys0a.jpg"
              alt=""
            />
            <Pattern />
          </ImageWrapper>
        </Container>
      </Wrapper>
      <Wrapper>
        <Title isOdd>MODERNO</Title>
        <Subtitle isOdd>
          Artículos modernos
          <br /> para gente moderna
        </Subtitle>
        <Container isOdd>
          <Text isOdd>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quis
            suscipit obcaecati rerum! Animi aperiam, dicta accusantium rerum
            pariatur ipsum in temporibus reiciendis quae labore minima
            repudiandae laborum suscipit maxime.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quis
            suscipit obcaecati rerum! Animi aperiam.
          </Text>
          <ImageWrapper>
            <Image
              src="https://res.cloudinary.com/du2j41pda/image/upload/w_630,h_630,c_fill/v1600828506/azahares_leslie/pillow_yqsauk.jpg"
              alt=""
              isOdd
            />
            <Pattern isOdd />
          </ImageWrapper>
        </Container>
      </Wrapper>
    </>
  );
}
