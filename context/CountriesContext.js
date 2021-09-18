import { createContext, useState, useEffect, useContext } from "react";

const CountriesContext = createContext();
const CountriesUpdateContext = createContext();
const AllContext = createContext();
const AllUpdateContext = createContext();

export const useCountries = () => {
  return [useContext(CountriesContext), useContext(CountriesUpdateContext)];
};

export const useAllCountries = () => {
  return [useContext(AllContext), useContext(AllUpdateContext)];
};

export const CountriesProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [all, setAll] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
        setAll(data);
      });
  }, []);
  return (
    <AllContext.Provider value={all}>
      <AllUpdateContext.Provider value={setAll}>
        <CountriesContext.Provider value={countries}>
          <CountriesUpdateContext.Provider value={setCountries}>
            {children}
          </CountriesUpdateContext.Provider>
        </CountriesContext.Provider>
      </AllUpdateContext.Provider>
    </AllContext.Provider>
  );
};
