export const initialState = {
  episodes: [],
  favourites: [],
  visited: [],
  user: {
    login: false,
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    address: {
      address: "",
      additionalAddress: "",
      state: "",
      country: "",
      zip: 0,
    },
  },
};

export function reducer(state, action) {
  switch (action.type) {
    case "USER_LOGIN":
      return { ...state, user: action.item };

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
