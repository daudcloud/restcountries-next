import { useCountries } from "../../context/CountriesContext";
import Country from "../Country";
import StyledCountries from "./styles";
import StyledCoountries from "./styles";

const Countries = () => {
  const [countries, setCountries] = useCountries();
  return (
    <StyledCountries>
      {countries.map((country) => (
        <Country key={country.name} country={country} />
      ))}
    </StyledCountries>
  );
};

export default Countries;
