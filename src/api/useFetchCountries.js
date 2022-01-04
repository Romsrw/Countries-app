import axios from "axios";
import { useState, useEffect } from "react";
import { ALL_COUNTRIES } from "./config";

export const useFetchCountries = () => {
  const [countries, setCountries] = useState([]);

  const getCountries = async () => {
    try {
      const response = await axios.get(ALL_COUNTRIES);
      const result = await response.data;
      setCountries(result);
    } catch (error) {
      console.warn(error);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);
  
  return {
    countries,
  };
};
