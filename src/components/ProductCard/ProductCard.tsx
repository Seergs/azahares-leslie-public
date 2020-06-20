import React, { useState } from "react";

import styled, { css } from "styled-components";
import { FaShoppingCart } from "react-icons/fa";

import { Product } from "../Products";
import axios from "axios";
import Modal from "../Modal/CheckoutModal";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

const StyledCard = styled.div`
  ${(props) => css`
    width: 250px;
    height: 370px;
    background-color: white;
    box-shadow: ${props.theme.shadows.shadow2};
    transition: transform 0.1s linear;
    cursor: pointer;

    .image-container {
      height: 220px;
      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
    main {
      padding: 1em;
      height: 110px;

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

    button {
      display: block;
      width: 100%;
      height: 40px;
      background-color: ${props.theme.colors.teals.teal700};
      border: none;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-size: 1rem;

      svg {
        fill: ${props.theme.colors.teals.teal400};
        margin-right: 5px;
      }

      &:hover {
        background-color: ${props.theme.colors.teals.teal600};
      }

      &:active {
        background-color: ${props.theme.colors.teals.teal800};
      }
    }

    @media screen and (max-width: 400px) {
      width: 300px;
    }
  `}
`;

type ProductCardProps = {
  product: Product;
  toggleModal: () => void;
  setSelectedProduct: (product: Product) => void;
};

export default function ProductCard({
  product,
  toggleModal,
  setSelectedProduct,
}: ProductCardProps) {
  const [isPaymentModalOpen, setPaymentModalOpen] = useState(false);
  const [clientStripeSecret, setClientStripeSecret] = useState<string | null>(
    null
  );

  const togglePaymentModal = () => {
    setPaymentModalOpen(!isPaymentModalOpen);
  };

  function handleClick() {
    toggleModal();
    setSelectedProduct(product);
  }

  async function createPayment() {
    togglePaymentModal();
    try {
      const response = await axios.post("/payments", { amount: product.price });
      setClientStripeSecret(response.data.client_secret);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <StyledCard>
        <div className="info" onClick={handleClick}>
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
        </div>
        <button onClick={createPayment}>
          <FaShoppingCart />
          Comprar
        </button>
      </StyledCard>
      <Modal isOpen={isPaymentModalOpen} toggleModal={togglePaymentModal}>
        <CheckoutForm
          clientStripeSecret={clientStripeSecret}
          togglePaymentModal={togglePaymentModal}
        />
      </Modal>
    </>
  );
}
