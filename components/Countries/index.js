import { useCountries } from "../../context/CountriesContext";
import Country from "../Country";

const Countries = () => {
  const [countries, setCountries] = useCountries();
  return (
    <>
      {countries.map((country) => (
        <Country key={country.name} country={country} />
      ))}
    </>
  );
};

export default Countries;
