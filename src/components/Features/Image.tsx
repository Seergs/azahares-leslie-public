import React, { useRef } from "react";
import styled, { css } from "styled-components/macro";
import { motion } from "framer-motion";
import { ReactComponent as BgPattern } from "../../assets/images/pattern.svg";
import { useIntersection } from "react-use";

type OddProps = {
  $isOdd?: boolean;
};

const ImageWrapper = styled.div`
  width: 50%;
  position: relative;

  .animate {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Image = styled(motion.img)<OddProps>`
  position: absolute;
  width: 300px;
  height: auto;
  z-index: 1;
  opacity: 0;
  transform: translateY(-20px);
  transition: all 1s;

  ${({ $isOdd }) =>
    $isOdd &&
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

  ${({ $isOdd }) =>
    $isOdd &&
    css`
      right: 50px;
      left: auto;
    `}
`;

type ImageComponentProps = {
  url: string;
  alt: string;
};

export default function ImageComponent({ url, alt }: ImageComponentProps) {
  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  });
  return (
    <ImageWrapper>
      <Image
        src={url}
        alt={alt}
        ref={intersectionRef}
        className={
          intersection
            ? intersection.intersectionRatio < 1
              ? ""
              : "animate"
            : ""
        }
      />
      <Pattern />
    </ImageWrapper>
  );
}
