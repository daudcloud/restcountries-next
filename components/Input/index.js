import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useAllCountries, useCountries } from "../../context/CountriesContext";

export default function Input({ region }) {
  const [inputValue, setInputValue] = useState("");
  const [countries, setCountries] = useCountries();
  const [all, setAll] = useAllCountries();
  const [current, setCurrent] = useState([]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    let temp;
    if (region === "") {
      setCurrent(all);
    } else {
      const temp = all.filter((c) => c.region.toLowerCase() === region);
      setCurrent(temp);
    }
  }, [region]);

  useEffect(() => {
    const regx = new RegExp(`\^${inputValue}`, "gi");
    const tempCountries = current.filter((country) => country.name.match(regx));
    setCountries(tempCountries);
  }, [inputValue]);

  return (
    <form>
      <input type="text" value={inputValue} onChange={handleChange} />
    </form>
  );
}
