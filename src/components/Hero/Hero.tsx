import React from "react";
import Navbar from "../Navbar/Navbar";
import Phone from "./Phone";

import {
  titleVariants,
  paragraphVariants,
  containerVariants,
  imageVariants,
  Container,
  Main,
  Text,
  Title,
  Paragraph,
  Image,
} from "./styles";

export default function Hero() {
  return (
    <Container>
      <Main>
        <Navbar />
        <Text
          className="container"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Title variants={titleVariants}>
            ARTÍCULOS RELIGIOSOS PARA TODA OCASIÓN
          </Title>
          <Paragraph variants={paragraphVariants}>
            Hechos con la mejor calidad y al mejor precio
          </Paragraph>
        </Text>
      </Main>
      <Image
        src="https://res.cloudinary.com/du2j41pda/image/upload/f_auto,q_auto/v1592611077/azahares_leslie/hero_rypcap.png"
        alt="bride"
        className="landing-image"
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      />
    </Container>
  );
}
