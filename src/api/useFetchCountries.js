import axios from "axios";
import { useState, useEffect } from "react";
import { ALL_COUNTRIES } from "./config";

export const useFetchAllCountries = () => {
  const [countries, setCountries] = useState([]);

  const getAllCountries = async () => {
    try {
      const response = await axios.get(ALL_COUNTRIES);
      const result = await response.data;
      setCountries(result);
    } catch (error) {
      console.warn(error);
    }
  };

  useEffect(() => {
    if (!countries.length) {
      getAllCountries();
    }
  }, []);

  return {
    countries,
  };
};
