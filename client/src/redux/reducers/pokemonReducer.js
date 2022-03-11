const initialState = { loading: false, pokemons: [], tipos: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GETALL_POKEMONS":
      return { ...state, loading: false, pokemons: [...action.query] };

    case "GETALL_TYPES":
      return { ...state, tipos: [...action.query] };
    default:
      return state;
  }
};

export default reducer;
