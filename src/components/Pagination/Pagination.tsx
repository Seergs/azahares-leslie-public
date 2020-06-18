import React from "react";
import styled, { css } from "styled-components";

const StyledPagination = styled.div`
  ${(props) => css`
    display: flex;
    justify-content: flex-end;
    margin-right: 4.5em;
    margin-top: 3em;

    button {
      display: inline-block;
      width: 120px;
      height: 40px;
      border-radius: 5px;
      font-weight: bold;
      border: none;
      font-size: 1rem;
      cursor: pointer;
    }

    .previous {
      margin-right: 1em;
      background-color: white;
      box-shadow: ${props.theme.shadows.shadow2};
      color: ${props.theme.colors.teals.teal600};

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
          Anterior
        </button>
      )}
      {nextPageExists && (
        <button className="next" onClick={nextPage}>
          Siguiente
        </button>
      )}
    </StyledPagination>
  );
}
