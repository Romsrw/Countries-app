import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFetchAllCountries } from "../api/useFetchCountries";
import { Card } from "../components/card/Card";
import { Controls } from "../components/form/Controls";
import { List } from "../components/list/List";
import { Loader } from "../components/loader/Loader";

export const HomePage = () => {
  const { countries, getAllCountries, isLoading } = useFetchAllCountries();

  const [filters, setFilters] = useState({ search: "", region: null });

  const navigate = useNavigate();

  const filteredCountries = useMemo(
    () =>
      countries
        .filter((country) =>
          country.region.includes(filters.region?.value || "")
        )
        .filter((country) =>
          country.name.toLowerCase().includes(filters.search.toLowerCase())
        ),
    [filters, countries]
  );

  useEffect(() => {
    getAllCountries();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Controls onSearch={setFilters} filters={filters} />
          <List>
            {filteredCountries.map((country) => {
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
      )}
    </>
  );
};
