import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();
const ThemeUpdateContext = createContext();

export const useTheme = () => {
  return [useContext(ThemeContext), useContext(ThemeUpdateContext)];
};

export const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(true);

  return (
    <ThemeContext.Provider value={dark}>
      <ThemeUpdateContext.Provider value={setDark}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
};
