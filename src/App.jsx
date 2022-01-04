import { Controls } from "./components/form/Controls";
import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";

const App = () => {
  return (
    <>
      <Header />
      <Main>
        <Controls />
      </Main>
    </>
  );
};

export default App;
