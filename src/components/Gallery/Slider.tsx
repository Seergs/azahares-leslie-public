import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import mixins from "../../theme/mixins";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import theme from "../../theme/theme";
import { motion } from "framer-motion";
import animations from "./animations";
import data from "./data";

const { justifyBetween, alignCenter } = mixins;
const { colors } = theme;
const { firstImage, activeImage, lastImage } = animations;

const StyledSlider = styled.div`
  ${justifyBetween};
  ${alignCenter}
`;

const Image = styled(motion.img)`
  height: 200px;
  width: 266px;
  border-radius: 3px;

  &:nth-child(1),
  &:nth-child(5) {
    position: relative;
  }

  &:last-child {
    right: -150px;
  }

  &:first-child {
    left: -150px;
  }
`;

const Empty = styled.div`
  height: 200px;
  width: 266px;
`;

const EmptyButton = styled.div`
  width: 50px;
  height: 50px;
`;

const Button = styled.button`
  background: transparent;
  border: transparent;
  cursor: pointer;
  width: 50px;
  height: 50px;
  transition: transform 0.2s ease-in-out;

  svg {
    height: 15px;
    width: 15px;
    fill: ${colors.darkBeige};
  }

  &:hover {
    transform: translateX(5px);
  }
`;

export enum DIRECTIONS {
  RIGHT = "right",
  LEFT = "left",
}

export default function Slider() {
  const [index, setIndex] = useState(0);
  const [from, setFrom] = useState(DIRECTIONS.RIGHT);

  return (
    <>
      <StyledSlider>
        {index > -1 ? (
          <Image
            src={data[index].url}
            key={data[index].url + "1"}
            initial={firstImage.initial(from)}
            animate={firstImage.animate}
            alt={data[index].alt}
            title={data[index].alt}
          />
        ) : (
          <Empty />
        )}
        {index > -1 ? (
          <Button
            onClick={() => {
              setIndex((prev) => prev - 1);
              setFrom(DIRECTIONS.RIGHT);
            }}
          >
            <FaArrowLeft />
          </Button>
        ) : (
          <EmptyButton />
        )}

        <Image
          src={data[index + 1].url}
          key={data[index + 1].url + "2"}
          initial={activeImage.initial(from)}
          animate={activeImage.animate}
          whileHover={activeImage.hover}
          alt={data[index + 1].alt}
          title={data[index + 1].alt}
        />

        {index < data.length - 2 ? (
          <Button
            onClick={() => {
              setIndex((prev) => prev + 1);
              setFrom(DIRECTIONS.LEFT);
            }}
          >
            <FaArrowRight />
          </Button>
        ) : (
          <EmptyButton />
        )}

        {index < data.length - 2 ? (
          <Image
            src={data[index + 2].url}
            key={data[index + 2].url + "3"}
            initial={lastImage.initial(from)}
            animate={lastImage.animate}
            alt={data[index + 2].alt}
            title={data[index + 2].alt}
          />
        ) : (
          <Empty />
        )}
      </StyledSlider>
    </>
  );
}
