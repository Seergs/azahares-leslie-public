import React from "react";

import ReactModal from "react-modal";
import styled, { css } from "styled-components";

const StyledModal = styled(ReactModal)`
  ${(props) =>
    css`
      width: 900px;
      margin: 1em auto 0 auto;
      padding: 2em;
      height: 95vh;
      background-color: white;
      overflow-y: auto;
      box-shadow: ${props.theme.shadows.modalShadow};
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
    <StyledModal isOpen={isOpen} onRequestClose={toggleModal}>
      {children}
    </StyledModal>
  );
}
