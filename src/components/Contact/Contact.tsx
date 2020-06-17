import React from "react";

import styled, { css } from "styled-components";
import { FaPhone } from "react-icons/fa";

const StyledContact = styled.section`
  ${(props) => css`
    max-width: 900px;
    margin: 5em auto 0 auto;

    h3,
    p {
      text-align: center;
    }

    h3 {
      color: ${props.theme.colors.teals.teal800};

      border-bottom: 1px solid ${props.theme.colors.teals.teal500};
      line-height: 0.1em;

      margin-bottom: 2em;

      span {
        background-color: white;
        padding: 0 10px;
      }
    }

    p {
      margin: 0 auto;
      max-width: 600px;
      line-height: 30px;

      color: ${props.theme.colors.teals.teal800};

      svg {
        margin-right: 5px;
        fill: ${props.theme.colors.teals.teal500};
        transform: rotate(90deg);
      }
    }
  `}
`;

export default function Contact() {
  return (
    <StyledContact>
      <h3>
        <span>Contáctanos</span>
      </h3>
      <p>Estamos ubicados en Argentina 171, Chilchota, Michoacán, México</p>
      <p>
        <FaPhone />
        355-511-5455
      </p>
    </StyledContact>
  );
}
