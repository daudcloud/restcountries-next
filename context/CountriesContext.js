import { createContext, useState, useEffect, useContext } from "react";

const CountriesContext = createContext();
const CountriesUpdateContext = createContext();

export const useCountires = () => {
  return [useContext(CountriesContext), useContext(CountriesUpdateContext)];
};

export const CountriesProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <CountriesContext.Provider value={countries}>
      <CountriesUpdateContext.Provider value={setCountries}>
        {children}
      </CountriesUpdateContext.Provider>
    </CountriesContext.Provider>
  );
};
