import React, { useRef } from "react";
import styled, { css } from "styled-components/macro";
import theme from "../../theme/theme";
import mixins from "../../theme/mixins";
import { useIntersection } from "react-use";
import { motion } from "framer-motion";
import ImageComponent from "./Image";
import Underlay from "./Underlay";

const { colors, fontSizes } = theme;
const { flex, flexRowReverse } = mixins;

type OddProps = {
  $isOdd?: boolean;
};

const Wrapper = styled(motion.div)`
  background-color: ${colors.beige};
  padding: 7rem;
  position: relative;
  height: 620px;
`;

const Subtitle = styled.h2<OddProps>`
  font-size: ${fontSizes.header};
  font-weight: bold;
  color: ${colors.black};

  ${({ $isOdd }) =>
    $isOdd &&
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

  ${({ $isOdd }) =>
    $isOdd &&
    css`
      margin-left: 6rem;
    `}
`;

const Container = styled.div<OddProps>`
  ${flex};

  ${({ $isOdd }) =>
    $isOdd &&
    css`
      ${flexRowReverse}
    `}
`;

export default function Features() {
  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  });
  console.log(intersection);
  return (
    <>
      <Wrapper id="about">
        <Underlay>ELEGANCIA</Underlay>
        <Subtitle>
          Accesorios
          <br /> elegantes
        </Subtitle>
        <Container>
          <Text>
            Todos nuestro productos cuentan con diseños elegantes que hacen a
            tus ceremonias lucirse por sobre todas las demás. Cada producto está
            hecho con la mejor calidad y los mejores materiales lo que hace que
            tus experiencias religiosas sean inolvidables.
            <br />
            <br />
            Si deseas un diseño más personalizado, no dudes en llamarnos para
            ajustar detalles y lograr tu diseño ideal.
          </Text>
          <ImageComponent
            url="https://res.cloudinary.com/du2j41pda/image/upload/w_630,h_630,c_fill/v1600816822/azahares_leslie/candle_czys0a.jpg"
            alt="Candle"
          />
        </Container>
      </Wrapper>
      <Wrapper>
        <Underlay isOdd>MODERNO</Underlay>
        <Subtitle $isOdd>
          Artículos modernos
          <br /> para gente moderna
        </Subtitle>
        <Container $isOdd>
          <Text $isOdd>
            En nuestra empresa se manejan estándares que hacen que cada producto
            que compres tenga la modernidad de hoy en día, para que tus
            ceremonias se vean elegantes y con ese toque moderno que a todos nos
            gusta.
            <br />
            <br />
            Si tienes un diseño personalizado en mente, no dudes en contactarnos
            para crearlo a tu gusto.
          </Text>
          <ImageComponent
            url="https://res.cloudinary.com/du2j41pda/image/upload/w_630,h_630,c_fill/v1600828506/azahares_leslie/pillow_yqsauk.jpg"
            alt="pillow"
          />
        </Container>
      </Wrapper>
    </>
  );
}
