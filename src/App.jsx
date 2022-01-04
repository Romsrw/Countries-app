import { useFetchCountries } from "./api/useFetchCountries";
import { Controls } from "./components/form/Controls";
import { Header } from "./components/header/Header";
import { List } from "./components/list/List";
import { Main } from "./components/main/Main";
import { Card } from "./components/card/Card";

const App = () => {
  const { countries } = useFetchCountries();
  console.log(countries);
  return (
    <>
      <Header />
      <Main>
        <Controls />
        <List>
          {countries.map((country) => {
            const countryInfo = {
              img: country.flags.png,
              name: country.name,
              info: [
                {
                  title: "Population",
                  description: country.population.toString(),
                },
                {
                  title: "Region",
                  description: country.region,
                },
                {
                  title: "Capital",
                  description: country.capital,
                },
              ],
            };
            return <Card key={country.name} countryInfo={countryInfo} />;
          })}
        </List>
      </Main>
    </>
  );
};

export default App;
