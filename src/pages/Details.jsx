import { useNavigate, useParams } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { useEffect, useState } from "react";
import axios from "axios";
import { searchByCountry } from "../api/config";

export const Details = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState(null);
  console.log(country);

  useEffect(() => {
    axios.get(searchByCountry(name)).then(({ data }) => setCountry(data[0]));
  }, [name]);

  return (
    <div>
      <button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </button>
      Details {name}
    </div>
  );
};
