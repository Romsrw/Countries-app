import axios from "axios";
import { useState } from "react";
import { ALL_COUNTRIES } from "./config";

export const useFetchAllCountries = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [countries, setCountries] = useState([]);

  const getAllCountries = async () => {
    if (countries.length) return;
    try {
      setIsLoading(true);
      const response = await axios.get(ALL_COUNTRIES);
      const result = await response.data;
      setCountries(result);
    } catch (error) {
      console.warn(error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    countries,
    getAllCountries,
  };
};
