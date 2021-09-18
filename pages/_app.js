import { CountriesProvider } from "../context/CountriesContext";
import { ThemeProvider } from "../context/ThemeContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <CountriesProvider>
        <Component {...pageProps} />
      </CountriesProvider>
    </ThemeProvider>
  );
}

export default MyApp;
