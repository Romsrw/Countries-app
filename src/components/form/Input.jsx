import styled from "styled-components";

export const Input = styled.input.attrs({
  type: "search",
  placeholder: "Search for a country",
})`
  margin-left: 2rem;
  border: none;
  outline: none;
  color: var(--color-text);
  background-color: var(--colors-bg);
`;
