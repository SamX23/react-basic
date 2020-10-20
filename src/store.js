import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();
const ThemeUpdateContext = createContext();

// Custom Hook
export function SetTheme() {
  return useContext(ThemeContext);
}

export function UpdateTheme() {
  return useContext(ThemeUpdateContext);
}

export function AppProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme((prevTheme) => !prevTheme);
  }

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}
