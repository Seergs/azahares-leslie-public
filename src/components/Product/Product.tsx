import React from "react";

import styled, { css } from "styled-components";

import { Product as IProduct } from "../../pages/Products";

const StyledProduct = styled.div`
  width: 200px;
  height: 200px;
`;

type ProductProps = {
  product: IProduct;
};

export default function Product({ product }: ProductProps) {
  return (
    <StyledProduct>
      <div className="image">
        <img src={product.imageUrl} alt="product" />
      </div>
      <p>{product.name}</p>
      <p>{product.price}</p>
    </StyledProduct>
  );
}
