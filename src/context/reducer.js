export const initialState = {
  episodes: [],
  favourites: [],
  visited: [],
};

export function reducer(state, action) {
  switch (action.type) {
    case "FETCH_DATA":
      return { ...state, episodes: action.item };

    case "ADD_FAV":
      return { ...state, favourites: [...state.favourites, action.item] };

    case "REMOVE_FAV":
      return {
        ...state,
        favourites: action.item,
      };
    case "VISITING":
      return {
        ...state,
        visited: [...state.visited, action.item],
      };
    default:
      return state;
  }
}
