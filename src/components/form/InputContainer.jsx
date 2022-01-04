import styled from "styled-components";

export const InputContainer = styled.label`
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  background-color: var(--colors-ui-base);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  width: 100%;
  margin-bottom: 1.5rem;

  @media (min-width: 767px) {
    margin-bottom: 0;
    width: 280px;
  }
`;
