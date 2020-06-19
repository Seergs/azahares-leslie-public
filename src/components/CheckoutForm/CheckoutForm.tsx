import React, { FormEvent, useState } from "react";
import styled, { css } from "styled-components";

import { FaInfoCircle, FaExclamationCircle } from "react-icons/fa";

import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

import toast from "toasted-notes";
import "toasted-notes/src/styles.css";

import CardSection from "../CardSection/CardSection";

const StyledForm = styled.div`
  ${(props) => css`
    h1 {
      color: ${props.theme.colors.grays.gray800};
      margin-bottom: 0.5em;
      font-weight: normal;
    }

    .info {
      display: flex;
      align-items: center;
      margin-bottom: 2em;

      h3 {
        color: ${props.theme.colors.grays.gray900};
        font-weight: normal;

        @media screen and (max-width: 700px) {
          font-size: 1rem;
        }
      }

      svg {
        margin-right: 8px;
        fill: ${props.theme.colors.indigos.indigo600};
      }
    }

    .container {
      display: flex;
      justify-content: space-between;
      margin-bottom: 1em;

      @media screen and (max-width: 700px) {
        flex-direction: column;
      }
    }

    .name,
    .email {
      display: flex;
      flex-direction: column;
      width: 45%;

      @media screen and (max-width: 700px) {
        width: 100%;
      }
    }
    input,
    .StripeElement {
      height: 40px;
      width: 100%;
      padding: 10px 12px;
      font-size: 1rem;

      color: #32325d;
      background-color: ${props.theme.colors.grays.gray100};
      border: 1px solid ${props.theme.colors.grays.gray300};
      border-radius: 4px;

      transition: box-shadow 150ms ease;

      &::placeholder {
        color: ${props.theme.colors.grays.gray500};
      }
    }

    input:focus,
    .StripeElement--focus {
      box-shadow: 0 1px 3px 0 #cfd7df;
    }

    .StripeElement--invalid {
      border-color: #fa755a;
    }

    .StripeElement--webkit-autofill {
      background-color: #fefde5 !important;
    }

    label {
      margin-bottom: 3px;
    }

    button {
      display: block;
      margin: 2em auto 0 auto;
      background-color: ${props.theme.colors.indigos.indigo600};
      color: white;
      border: none;
      height: 45px;
      width: 180px;
      font-size: 1rem;
      border-radius: 5px;
      cursor: pointer;

      &:hover {
        background-color: ${props.theme.colors.indigos.indigo500};
      }

      &:active {
        background-color: ${props.theme.colors.indigos.indigo700};
      }

      &:disabled {
        cursor: not-allowed;
        background-color: ${props.theme.colors.indigos.indigo400};
      }
    }

    small {
      margin-top: 0.5em;
      display: block;
      width: 100%;
      text-align: center;
      color: ${props.theme.colors.reds.red700};
      font-weight: bold;
    }

    p {
      margin-top: 1em;
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${props.theme.colors.grays.gray500};
      font-size: 0.8rem;

      svg {
        margin-right: 5px;
        fill: ${props.theme.colors.grays.gray400};
      }
    }
  `}
`;

type CheckoutFormProps = {
  clientStripeSecret: string | null;
  togglePaymentModal: () => void;
};

export default function CheckoutForm({
  clientStripeSecret,
  togglePaymentModal,
}: CheckoutFormProps) {
  const stripe = useStripe();
  const elements = useElements();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements || !clientStripeSecret) return;

    setLoading(true);

    const result = await stripe.confirmCardPayment(clientStripeSecret, {
      payment_method: {
        card: elements.getElement(CardElement)!,
        billing_details: {
          name,
          email,
        },
      },
    });

    if (result.error) {
      setError(result.error.message!);
    } else {
      if (result.paymentIntent?.status === "succeeded") {
        setError("");
        toast.notify(
          "Pago realizado exitosamente, nos pondremos en contacto contigo en breve",
          {
            type: "success",
            position: "top-right",
          }
        );
        togglePaymentModal();
      }
    }

    setLoading(false);
  };

  return (
    <StyledForm>
      <h1>Genial!</h1>
      <div className="info">
        <FaInfoCircle />
        <h3>Ingresa los siguientes datos para realizar la compra</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="name">
            <label htmlFor="name">NOMBRE</label>
            <input
              type="text"
              placeholder="Jane Doe"
              name="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="email">
            <label htmlFor="email">CORREO</label>
            <input
              type="email"
              placeholder="email@example.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <CardSection />
        <small>{error.trim().length ? error : null}</small>
        <button disabled={!stripe || loading}>Confirmar</button>
      </form>
      <p>
        <FaExclamationCircle />
        Al hacer click en confirmar estás aceptando el pago a Azahares Leslie
      </p>
    </StyledForm>
  );
}
