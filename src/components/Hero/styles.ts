import styled, { css } from "styled-components";
import { Variants, motion } from "framer-motion";
import theme from "../../theme/theme";
import mixins from "../../theme/mixins";

const { colors, fontSizes } = theme;
const { flex, flexColumn, justifyBetween } = mixins;

export const Container = styled.div`
  ${flex};
`;

export const Main = styled.main`
  ${flexColumn};
`;

export const Text = styled(motion.div)`
  padding: 30px;
  color: ${colors.black};
  margin-top: 1rem;
`;

export const Title = styled(motion.h1)`
  font-size: ${fontSizes.title};
  line-height: 1.5;
`;

export const Paragraph = styled(motion.p)`
  margin-top: 1rem;
  font-size: ${fontSizes.xl};
`;

export const Image = styled(motion.img)`
  height: 100vh;
  margin-left: auto;
`;

export const containerVariants: Variants = {
  hidden: {},
  visible: {},
};

export const titleVariants: Variants = {
  hidden: {
    y: -10,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export const paragraphVariants: Variants = {
  hidden: {
    y: -10,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
    },
  },
};

export const imageVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.2,
      duration: 1,
    },
  },
};
