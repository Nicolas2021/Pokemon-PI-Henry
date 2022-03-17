const initialState = { loading: false, pokemons: [], tipos: [], id: [] };
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GETALL_POKEMONS":
      return { ...state, loading: false, pokemons: [...action.query] };

    case "GETALL_TYPES":
      return { ...state, tipos: [...action.query] };

    case "GETPOK_ID":
      return { ...state, id: [action.query] };

    default:
      return state;
  }
};

export default reducer;
