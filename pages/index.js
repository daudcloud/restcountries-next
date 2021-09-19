import { useEffect, useState } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import { useAllCountries, useCountries } from "../context/CountriesContext";
import Input from "../components/Input";
import Region from "../components/Region";
import Countries from "../components/Countries";
import Container from "./styles";

export default function Home() {
  const [countries, setCountries] = useCountries();
  const [all, setAll] = useAllCountries();
  const [region, setRegion] = useState("");

  useEffect(() => {
    if (region === "") {
      setCountries(all);
    } else {
      const tempCountries = all.filter(
        (c) => c.region.toLowerCase() === region
      );
      setCountries(tempCountries);
    }
  }, [region]);

  return (
    <div>
      <Head>
        <title>Rest Countries App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Head>
      <Container>
        <Layout>
          <Input region={region} />
          <Region setRegion={setRegion} />
          <Countries />
        </Layout>
      </Container>
    </div>
  );
}
