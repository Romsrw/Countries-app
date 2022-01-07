import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../components/card/Card";
import { Controls } from "../components/form/Controls";
import { List } from "../components/list/List";

export const HomePage = ({ countries, setCountries }) => {
  const [filtredCountries, setFiltredCountries] = useState(countries);
  const navigate = useNavigate();

  const handlerSearch = (search, region) => {
    let data = [...countries];
    if (region) {
      data = data.filter((c) => c.region.includes(region));
    }
    if (search) {
      data = data.filter((c) =>
        c.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    setFiltredCountries(data);
  };

  return (
    <>
      <Controls onSearch={handlerSearch} />
      <List>
        {filtredCountries.map((country) => {
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
          return (
            <Card
              key={country.name}
              countryInfo={countryInfo}
              onClick={() => navigate(`/country/${country.name}`)}
            />
          );
        })}
      </List>
    </>
  );
};
