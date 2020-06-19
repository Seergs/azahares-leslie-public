import React from "react";
import styled, { css } from "styled-components";

import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const StyledPagination = styled.div`
  ${(props) => css`
    display: flex;
    justify-content: center;
    margin-top: 3em;

    button {
      display: flex;
      width: 120px;
      height: 45px;
      border-radius: 5px;
      font-weight: bold;
      border: none;
      font-size: 1rem;
      cursor: pointer;
      align-items: center;
      justify-content: center;

      svg {
        height: 15px;
        width: 15px;
      }
    }

    .previous {
      margin-right: 1em;
      background-color: white;
      box-shadow: ${props.theme.shadows.shadow2};
      color: ${props.theme.colors.teals.teal600};

      svg {
        margin-right: 5px;
      }

      &:hover {
        background-color: ${props.theme.colors.grays.gray100};
      }

      &:active {
        background-color: ${props.theme.colors.grays.gray200};
      }
    }

    .next {
      background-color: ${props.theme.colors.teals.teal500};
      color: white;

      svg {
        margin-left: 5px;
      }

      &:hover {
        background-color: ${props.theme.colors.teals.teal400};
      }

      &:active {
        background-color: ${props.theme.colors.teals.teal600};
      }
    }
  `}
`;

type PaginationProps = {
  nextPageExists: boolean;
  previousPageExists: boolean;
  nextPage: () => void;
  previousPage: () => void;
};

export default function Pagination({
  nextPage,
  previousPage,
  nextPageExists,
  previousPageExists,
}: PaginationProps) {
  return (
    <StyledPagination>
      {previousPageExists && (
        <button className="previous" onClick={previousPage}>
          <FaChevronLeft />
          Anterior
        </button>
      )}
      {nextPageExists && (
        <button className="next" onClick={nextPage}>
          Siguiente
          <FaChevronRight />
        </button>
      )}
    </StyledPagination>
  );
}
