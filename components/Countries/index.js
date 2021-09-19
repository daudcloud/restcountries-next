import { useCountries } from "../../context/CountriesContext";
import Country from "../Country";

const Countries = () => {
  const [countries, setCountries] = useCountries();
  return (
    <>
      {countries.map((country) => (
        <Country country={country} />
      ))}
    </>
  );
};

export default Countries;
