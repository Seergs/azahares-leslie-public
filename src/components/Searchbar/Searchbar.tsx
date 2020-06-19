import React, { useState, FormEvent } from "react";

import styled, { css } from "styled-components";

import { FaSearch } from "react-icons/fa";

const StyledSearchbar = styled.div`
  ${(props) => css`
    margin-left: 4em;
    margin-top: 5em;
    width: 40%;
    display: flex;
    height: 45px;
    align-items: center;

    background-color: ${props.theme.colors.grays.gray100};
    border: 1px solid ${props.theme.colors.grays.gray300};
    border-radius: 5px;

    form {
      width: 100%;
      height: 100%;
    }

    input {
      width: 100%;
      height: 100%;
      background-color: transparent;
      border: none;
      font-size: 1rem;

      &::placeholder {
        color: ${props.theme.colors.grays.gray500};
      }
    }

    svg {
      margin: 0 1em;
      fill: ${props.theme.colors.grays.gray500};
    }

    &:focus-within {
      border: 1px solid ${props.theme.colors.teals.teal500};
    }

    @media screen and (max-width: 950px) {
      width: 60%;
    }

    @media screen and (max-width: 620px) {
      width: 80%;
      margin: 5em auto 0 auto;
    }

    @media screen and (max-width: 400px) {
      width: 90%;
    }
  `}
`;

type SearchbarProps = {
  updateQuery: (query: string) => void;
};

export default function Searchbar({ updateQuery }: SearchbarProps) {
  const [search, setSearch] = useState("");

  function submit(e: FormEvent) {
    e.preventDefault();
    updateQuery(search);
  }
  return (
    <StyledSearchbar>
      <FaSearch />
      <form onSubmit={submit}>
        <input
          type="text"
          placeholder="Busca un producto"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </StyledSearchbar>
  );
}
