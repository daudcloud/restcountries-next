import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Details() {
  const router = useRouter();
  const { country } = router.query;
  const [countries, setCountries] = useState([]);
  const [detailed, setDetailed] = useState({});

  useEffect(async () => {
    const res = await fetch("https://restcountries.eu/rest/v2/all");
    const data = await res.json();
    setCountries(data);
  }, []);

  useEffect(() => {
    const temp = countries.find(
      (c) => c.name.toLowerCase() === country.replace("-", " ")
    );
    setDetailed({ ...temp });
  }, [countries]);

  return <p>{detailed.name}</p>;
}
