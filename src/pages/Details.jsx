import { useNavigate, useParams } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { useEffect, useState } from "react";
import axios from "axios";
import { searchByCountry } from "../api/config";
import { Button } from "../components/button/Button";
import { Info } from "../components/info/Info";

export const Details = () => {
  const { name } = useParams();
  const [country, setCountry] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(searchByCountry(name)).then(({ data }) => setCountry(data[0]));
  }, [name]);

  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>
      {country && <Info {...country} />}
    </div>
  );
};
