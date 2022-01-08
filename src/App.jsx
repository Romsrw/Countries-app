import { Routes, Route, Navigate } from "react-router-dom";
import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";
import { HomePage } from "./pages/HomePage";
import { Details } from "./pages/Details";
import { NotFound } from "./pages/NotFound";

const App = () => {
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route exact path="/" element={<Navigate to="/Countries-app" />} />
          <Route path="/Countries-app" element={<HomePage />} />
          <Route path="/country/:name" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Main>
    </>
  );
};

export default App;
