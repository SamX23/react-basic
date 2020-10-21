import React, { createContext } from "react";

export const initialState = {
  episodes: [],
  favourites: [],
};

export function reducer(state, action) {
  switch (action.type) {
    case "FETCH_DATA":
      return { ...state, episodes: action.payload };
    default:
      return state;
  }
}
