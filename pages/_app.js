import { CountriesProvider } from "../context/CountriesContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <CountriesProvider>
      <Component {...pageProps} />
    </CountriesProvider>
  );
}

export default MyApp;
