import React from "react";

import ReactModal from "react-modal";
import styled, { css } from "styled-components";

type StyledModalProps = {
  height: string;
  width: string;
};

const StyledModal = styled(ReactModal)<StyledModalProps>`
  ${(props) =>
    css`
      width: ${props.width};
      margin: 1em auto 0 auto;
      padding: 2em;
      height: ${props.height};
      background-color: white;
      overflow-y: auto;
      box-shadow: ${props.theme.shadows.modalShadow};
      border-radius: 5px;
    `}
`;

StyledModal.setAppElement("#root");

type ModalProps = {
  isOpen: boolean;
  children: React.ReactNode;

  height?: string;
  width?: string;

  toggleModal: () => void;
};

export default function Modal({
  isOpen,
  children,
  height = "95vh",
  width = "900px",
  toggleModal,
}: ModalProps) {
  return (
    <StyledModal
      isOpen={isOpen}
      onRequestClose={toggleModal}
      height={height}
      width={width}
    >
      {children}
    </StyledModal>
  );
}
