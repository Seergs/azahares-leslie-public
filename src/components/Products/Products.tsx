import React, { useEffect, useState } from "react";
import axios from "axios";

import styled, { css } from "styled-components";

import ProductCard from "../ProductCard/ProductCard";

axios.defaults.baseURL = "https://azahares-leslie-server.herokuapp.com/api/v1";

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

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await axios.get("/products/public");
      setProducts(response.data);
    }

    fetchProducts();
  }, []);

  return (
    <StyledProducts id="products">
      <h2>LO QUE OFRECEMOS</h2>
      <div className="products-container">
        {products &&
          products.map((product, i) => (
            <ProductCard product={product} key={i} />
          ))}
      </div>
    </StyledProducts>
  );
}

export interface Product {
  _id: string;
  name: string;
  description: string;
  tag: string;
  imageUrl: string;
  enabled: boolean;
  createdAt: Date;
  price: number;
}
