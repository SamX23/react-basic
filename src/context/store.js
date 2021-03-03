import React, { createContext, useContext, useReducer, useState } from "react";
import { initialState, reducer } from "./reducer";

export const Store = createContext();
const ThemeUpdateContext = createContext();

// Custom Hook
export function SetContext() {
  return useContext(Store);
}

export function UpdateContext() {
  return useContext(ThemeUpdateContext);
}

export function StoreProvider({ children }) {
  const [themeState, setThemeState] = useState(true);
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    state,
    dispatch,
    themeState,
    toggleTheme: () => {
      setThemeState((prevTheme) => !prevTheme);
    },
  };

  return (
    <Store.Provider value={value}>
      <ThemeUpdateContext.Provider value={value}>
        {children}
      </ThemeUpdateContext.Provider>
    </Store.Provider>
  );
}
