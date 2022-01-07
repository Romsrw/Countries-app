import styled from "styled-components";

export const Loader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -25px;
  margin-top: -25px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 3px dashed var(--colors-text);
  animation: rotate 1s infinite linear;

  @keyframes rotate {
    from {
      transform: rotate(0deg) scale(1);
    }
    to {
      transform: rotate(360deg) scale(1.5);
    }
  }
`;
