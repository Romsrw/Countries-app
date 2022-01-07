import { Routes, Route } from "react-router-dom";
import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";
import { HomePage } from "./pages/HomePage";
import { Details } from "./pages/Details";
import { NotFound } from "./pages/NotFound";
import { useFetchAllCountries } from './api/useFetchCountries';

const App = () => {
  const { countries } = useFetchAllCountries();
  console.log(countries);
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <HomePage countries={countries} />
            }
          />
          <Route path="/country/:name" element={<Details />} />
          <Route element={<NotFound />} />
        </Routes>
      </Main>
    </>
  );
};

export default App;
