import React from "react";

import styled, { css } from "styled-components";

import { Product } from "./index";
import ProductCard from "../ProductCard/ProductCard";
import Searchbar from "../Searchbar/Searchbar";

const StyledProducts = styled.section`
  ${(props) => css`
    margin: 10em 0;
    h2 {
      text-align: center;
      color: ${props.theme.colors.grays.gray800};
    }

    .products-container {
      margin-top: 3em;
      display: grid;
      grid-template-columns: repeat(auto-fill, 250px);
      gap: 2em;
      justify-content: center;
    }
  `}
`;

type ProductsProps = {
  products: Product[];
};

export default function Products({ products }: ProductsProps) {
  return (
    <StyledProducts id="products">
      <h2>LO QUE OFRECEMOS</h2>
      <Searchbar />
      <div className="products-container">
        {products &&
          products.map((product, i) => (
            <ProductCard product={product} key={i} />
          ))}
      </div>
    </StyledProducts>
  );
}
