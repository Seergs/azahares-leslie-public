import React from "react";

import styled, { css } from "styled-components";

import { Product } from "../Products";

const StyledCard = styled.div`
  ${(props) => css`
    width: 250px;
    height: 320px;
    background-color: white;
    box-shadow: ${props.theme.shadows.shadow2};
    transition: transform 0.1s linear;
    cursor: pointer;

    .image-container {
      height: 200px;
      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
    main {
      padding: 1em;

      h3 {
        color: ${props.theme.colors.grays.gray800};
        font-size: 1rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }

      p {
        margin-top: 0.5em;
        color: ${props.theme.colors.grays.gray700};
        font-size: 0.9rem;

        span {
          font-size: 0.8rem;
        }
      }

      & > span {
        display: inline-block;
        margin-top: 0.8em;
        margin-left: -10px;
        background-color: ${props.theme.colors.grays.gray200};
        color: ${props.theme.colors.grays.gray800};
        text-transform: uppercase;
        border-radius: 15px;

        font-size: 0.7rem;
        padding: 3px 10px;
      }
    }

    &:hover {
      transform: scale(1.05);
      box-shadow: ${props.theme.shadows.shadowSpread};
    }

    @media screen and (max-width: 400px) {
      width: 300px;
    }
  `}
`;

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <StyledCard>
      <div className="image-container">
        <img src={product.imageUrl} alt={product.name} />
      </div>
      <main>
        <h3>{product.name}</h3>
        <p>
          ${product.price} <span>MX</span>
        </p>
        <span>#{product.tag}</span>
      </main>
    </StyledCard>
  );
}
