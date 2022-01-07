import { useNavigate } from "react-router-dom";
import axios from "axios";
import { InfoImage } from "./InfoImage";
import { InfoWrapper } from "./InfoWrapper";
import { InfoTitle } from "./InfoTitle";
import { InfoListGroup } from "./InfoListGroup";
import { InfoList } from "./InfoList";
import { InfoListItem } from "./InfoListItem";
import { useEffect, useState } from "react";
import { filterByCode } from "../../api/config";
import { InfoMeta } from "./InfoMeta";
import { InfoTagGroupe } from "./InfoTagGroup";
import { InfoTag } from "./InfoTag";

export const Info = (props) => {
  const {
    name,
    nativeName,
    flag,
    capital,
    population,
    region,
    subregion,
    topLevelDomain,
    currencies = [],
    languages = [],
    borders = [],
  } = props;

  const [neighbors, setNeighbors] = useState([]);
  const navigate = useNavigate();
  console.log(neighbors);
  useEffect(() => {
    if (borders.length)
      axios
        .get(filterByCode(borders))
        .then(({ data }) => setNeighbors(data.map((c) => c.name)));
  }, [borders]);

  return (
    <InfoWrapper>
      <InfoImage src={flag} alt={name} />
      <div>
        <InfoTitle>{name}</InfoTitle>
        <InfoListGroup>
          <InfoList>
            <InfoListItem>
              <b>Native Name: </b> {nativeName}
            </InfoListItem>
            <InfoListItem>
              <b>Population: </b> {population}
            </InfoListItem>
            <InfoListItem>
              <b>Region: </b> {region}
            </InfoListItem>
            <InfoListItem>
              <b>Sub Region:</b> {subregion}
            </InfoListItem>
            <InfoListItem>
              <b>Capital:</b> {capital}
            </InfoListItem>
          </InfoList>
          <InfoList>
            <InfoListItem>
              <b>Currency</b>{" "}
              {currencies.map((c) => (
                <span key={c.code}>{c.name} </span>
              ))}
            </InfoListItem>
            <InfoListItem>
              <b>Top Level Domain</b>{" "}
              {languages.map((l) => (
                <span key={l.name}>{l.name}</span>
              ))}
            </InfoListItem>
          </InfoList>
        </InfoListGroup>
        <InfoMeta>
          <b>Border Countries</b>
          {!borders.length ? (
            <span>There is no border countries</span>
          ) : (
            <InfoTagGroupe>
              {neighbors.map((b) => (
                <InfoTag key={b} onClick={() => navigate(`/country/${b}`)}>
                  {b}
                </InfoTag>
              ))}
            </InfoTagGroupe>
          )}
        </InfoMeta>
      </div>
    </InfoWrapper>
  );
};
