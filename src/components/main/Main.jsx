import { MainWrapper } from "./MainWrapper";
import { Container } from "../container/Container";

export const Main = ({ children }) => {
  return (
    <MainWrapper>
      <Container>{children}</Container>
    </MainWrapper>
  );
};
