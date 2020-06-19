import React from "react";

import ReactModal from "react-modal";
import styled, { css } from "styled-components";

const StyledModal = styled(ReactModal)`
  ${(props) =>
    css`
      width: 800px;
      height: 600px;
      margin: 1em auto 0 auto;
      padding: 2em;
      background-color: white;
      overflow-y: auto;
      box-shadow: ${props.theme.shadows.modalShadow};
      border-radius: 5px;

      @media screen and (max-width: 900px) {
        width: 90%;
      }

      @media screen and (max-width: 700px) {
        height: 90vh;
      }

      @media screen and (max-width: 540px) {
        height: 600px;
      }

      @media screen and (max-width: 400px) {
        height: 500px;
      }
    `}
`;

StyledModal.setAppElement("#root");

type ModalProps = {
  isOpen: boolean;
  children: React.ReactNode;

  toggleModal: () => void;
};

export default function Modal({ isOpen, children, toggleModal }: ModalProps) {
  return (
    <StyledModal
      isOpen={isOpen}
      onRequestClose={toggleModal}
      closeTimeoutMS={400}
    >
      {children}
    </StyledModal>
  );
}
