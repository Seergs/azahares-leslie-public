import React, { useEffect, useState } from "react";

import axios from "axios";

import styled, { css } from "styled-components";

import Navbar from "../components/Navbar/Navbar";
import Product from "../components/Product/Product";

axios.defaults.baseURL = "https://azahares-leslie-server.herokuapp.com";

const StyledProducts = styled.div`
  padding: 2em 3em 2em 4em;

  .products-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, 200px);
  }
`;

export default function Products() {
  const [products, setProducts] = useState<null | Product[]>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get("/api/v1/products/public");
        setProducts(response.data);
      } catch (e) {
        console.log(e);
      }
    }
    fetchProducts();
  }, []);

  return (
    <StyledProducts>
      <Navbar search />
      {products && (
        <div className="products-container">
          {products.map((product) => (
            <Product product={product} key={product._id} />
          ))}
        </div>
      )}
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
