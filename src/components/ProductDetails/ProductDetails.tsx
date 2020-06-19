import React from "react";
import { FaTimes } from "react-icons/fa";
import styled, { css } from "styled-components";

import { Product } from "../Products";

const StyledDetails = styled.div`
  ${(props) => css`
    .top {
      display: flex;
      justify-content: space-between;
      align-items: baseline;

      span {
        color: ${props.theme.colors.grays.gray600};
      }

      button {
        background-color: transparent;
        border: transparent;
        cursor: pointer;

        svg {
          height: 20px;
          width: 20px;
          fill: ${props.theme.colors.grays.gray500};
          transition: all 0.1s linear;
        }

        &:hover svg {
          fill: ${props.theme.colors.reds.red600};
          transform: scale(1.05);
        }
      }
    }

    h1 {
      font-weight: normal;
      color: ${props.theme.colors.teals.teal900};
    }

    & > span {
      font-size: 0.8rem;
      padding: 1px 10px;
      background-color: ${props.theme.colors.grays.gray300};
      border-radius: 15px;
      margin-left: -0.5em;
    }

    p {
      margin-top: 1em;
      color: ${props.theme.colors.grays.gray700};
    }

    h4 {
      margin-top: 1.5em;
      color: ${props.theme.colors.grays.gray700};
    }

    .image-container {
      width: 300px;
      height: 300px;
      margin: 1em auto 0 auto;
      display: flex;
      justify-content: center;

      @media screen and (max-width: 700px) {
        width: 90%;
        height: auto;
      }

      img {
        width: 100%;
        object-fit: cover;
      }
    }

    & > button {
      display: block;
      margin: 4em auto 1em auto;
      height: 48px;
      width: 220px;
      cursor: pointer;

      background-color: ${props.theme.colors.indigos.indigo600};
      color: white;
      border: none;
      font-size: 1rem;
      border-radius: 5px;

      &:hover {
        background-color: ${props.theme.colors.indigos.indigo500};
      }

      &:active {
        background-color: ${props.theme.colors.indigos.indigo700};
      }
    }
  `}
`;

type ProductDetailsProps = {
  product: Product;
  toggleModal: () => void;
};

export default function ProductDetails({
  product,
  toggleModal,
}: ProductDetailsProps) {
  return (
    <StyledDetails>
      <div className="top">
        <span>#{product?._id}</span>
        <button onClick={toggleModal}>
          <FaTimes />
        </button>
      </div>
      <h1>{product?.name}</h1>
      <span>{product?.tag}</span>
      <p>{product?.description}</p>
      <h4>${product?.price} MX</h4>
      <div className="image-container">
        <img src={product?.imageUrl} alt="product" />
      </div>
    </StyledDetails>
  );
}
