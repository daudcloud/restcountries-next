import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Layout from "../../components/Layout";

export default function Details() {
  const router = useRouter();
  const { country } = router.query;
  const [countries, setCountries] = useState([]);
  const [detailed, setDetailed] = useState({});

  useEffect(async () => {
    const res = await fetch("https://restcountries.com/v3/all");
    const data = await res.json();
    setCountries(data);
  }, []);

  useEffect(() => {
    const temp = countries.find(
      (c) => c.name.toLowerCase() === country.replace("-", " ")
    );
    setDetailed({ ...temp });
  }, [countries]);

  return (
    <Layout>
      <p>{detailed.name}</p>
    </Layout>
  );
}
