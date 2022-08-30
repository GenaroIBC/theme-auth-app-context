import React, { createContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const handleChangeTheme = () => {
    if (theme === "dark") setTheme("ligth");
    else setTheme("dark");
  };

  const value = {
    theme,
    handleChangeTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContext;
