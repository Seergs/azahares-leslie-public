import React, { useRef, useState } from "react";
import styled, { css } from "styled-components";
import { FaPhoneAlt } from "react-icons/fa";
import theme from "../../theme/theme";
import { motion } from "framer-motion";
import mixins from "../../theme/mixins";

const { colors, fontSizes } = theme;
const { alignCenter } = mixins;

const Container = styled(motion.div)`
  ${alignCenter}
  position: fixed;
  bottom: 2rem;
  padding: 30px;
  z-index: 2;
`;

const PhoneIcon = styled.div`
  ${alignCenter}
  border:1px solid ${colors.black};
  padding: 5px;
  margin-right: 10px;
`;

const PhoneNumber = styled.p`
  font-size: ${fontSizes.lg};
`;

export default function Phone() {
  return (
    <Container
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2,
        },
      }}
    >
      <PhoneIcon>
        <FaPhoneAlt />
      </PhoneIcon>
      <PhoneNumber>355-511-54-55</PhoneNumber>
    </Container>
  );
}
