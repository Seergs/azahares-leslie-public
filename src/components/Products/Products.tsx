import React, { useState } from "react";

import styled, { css } from "styled-components";

import { Product } from "./index";
import ProductCard from "../ProductCard/ProductCard";
import Searchbar from "../Searchbar/Searchbar";
import Modal from "../Modal/Modal";
import ProductDetails from "../ProductDetails/ProductDetails";

const StyledProducts = styled.section`
  ${(props) => css`
    margin-top: 10em;
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

      @media screen and (max-width: 400px) {
        grid-template-columns: repeat(auto-fill, 300px);
      }
    }
  `}
`;

type ProductsProps = {
  products: Product[];
  updateQuery: (query: string) => void;
};

export default function Products({ products, updateQuery }: ProductsProps) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  function toggleModal() {
    setModalOpen(!isModalOpen);
  }
  return (
    <>
      <StyledProducts id="products">
        <h2>LO QUE OFRECEMOS</h2>
        <Searchbar updateQuery={updateQuery} />
        <div className="products-container">
          {products &&
            products.map((product, i) => (
              <ProductCard
                key={i}
                product={product}
                toggleModal={toggleModal}
                setSelectedProduct={setSelectedProduct}
              />
            ))}
        </div>
      </StyledProducts>
      <Modal isOpen={isModalOpen} toggleModal={toggleModal}>
        {selectedProduct && (
          <ProductDetails product={selectedProduct} toggleModal={toggleModal} />
        )}
      </Modal>
    </>
  );
}
