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

import image from "../../assets/images/hero.png";

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
        src={image}
        alt="bride"
        className="landing-image"
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      />
    </StyledLanding>
  );
}
