export const initialState = {
  episodes: [],
  favourites: [],
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
    default:
      return state;
  }
}
