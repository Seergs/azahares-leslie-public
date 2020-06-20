import React from "react";

import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

import Navbar from "../Navbar/Navbar";

import {
  StyledLanding,
  titleVariants,
  paragraphVariants,
  containerVariants,
  buttonVariants,
  imageVariants,
} from "./Styles";

export default function Landing() {
  return (
    <StyledLanding>
      <main>
        <Navbar />
        <motion.div
          className="container"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={titleVariants}>
            ARTÍCULOS RELIGIOSOS PARA TODA OCASIÓN
          </motion.h1>
          <motion.p variants={paragraphVariants}>
            Hechos con la mejor calidad y al mejor precio
          </motion.p>
          <motion.div variants={buttonVariants}>
            <a href="#products" className="primary">
              Ver productos
              <FaArrowRight />
            </a>
          </motion.div>
        </motion.div>
      </main>
      <motion.img
        src="https://res.cloudinary.com/du2j41pda/image/upload/f_auto,q_auto/v1592611077/azahares_leslie/hero_rypcap.png"
        alt="bride"
        className="landing-image"
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      />
    </StyledLanding>
  );
}
