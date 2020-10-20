import React, { createContext } from "react";

const AppContext = createContext();
const CounterContext = createContext(0);
const ThemeContext = createContext();


export function AppProvider({ children }) {
    const []
    function toggleTheme() {
        
    }
  return (
    <ThemeContext.Provider value={darkTheme}>
      <AppContext.Provider value={CounterContext}>
        {childen}
      </AppContext.Provider>
    </ThemeContext.Provider>
  );
}
