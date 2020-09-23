import React, { useState } from "react";
import styled from "styled-components/macro";
import mixins from "../../theme/mixins";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const { justifyBetween, alignCenter } = mixins;

const StyledSlider = styled.div`
  ${justifyBetween};
  ${alignCenter}
`;

const Image = styled.img`
  height: 200px;
  width: 266px;

  &:nth-child(1),
  &:nth-child(5) {
    filter: opacity(0.4);
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
`;

const images = [
  "https://res.cloudinary.com/du2j41pda/image/upload/w_800,h_600,c_fill/v1600831982/azahares_leslie/favour_gkueii.jpg",
  "https://res.cloudinary.com/du2j41pda/image/upload/w_800,h_600,c_fill/v1600831982/azahares_leslie/bible_uxuywm.jpg",
  "https://res.cloudinary.com/du2j41pda/image/upload/w_800,h_600,c_fill/v1600831982/azahares_leslie/coins_lbgwmz.jpg",
  "https://res.cloudinary.com/du2j41pda/image/upload/v1600833585/azahares_leslie/proyc_4_ohvcds.png",
];

export default function Slider() {
  const [index, setIndex] = useState(0);

  return (
    <>
      <StyledSlider>
        {index > -1 ? <Image src={images[index]} /> : <Empty />}
        {index > -1 ? (
          <Button
            onClick={() => {
              setIndex((prev) => prev - 1);
            }}
          >
            <FaArrowLeft />
          </Button>
        ) : (
          <EmptyButton />
        )}

        <Image src={images[index + 1]} />
        {index < images.length - 2 ? (
          <Button
            onClick={() => {
              setIndex((prev) => prev + 1);
            }}
          >
            <FaArrowRight />
          </Button>
        ) : (
          <EmptyButton />
        )}

        {index < images.length - 2 ? (
          <Image src={images[index + 2]} />
        ) : (
          <Empty />
        )}
      </StyledSlider>
    </>
  );
}
