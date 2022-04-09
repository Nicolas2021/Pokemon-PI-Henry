const initialState = {
  loading: true,
  pokemons: [],
  pokemonesfijos: [],
  tipos: [],
  id: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GETALL_POKEMONS":
      return {
        ...state,
        loading: false,
        pokemons: [...action.query],
        pokemonesfijos: [...action.query],
      };

    case "SET_ID":
      return {
        ...state,
        id: [],
      };

    case "SET_STATE":
      return {
        ...state,
        loading: true,
      };

    case "SET_POK":
      return {
        ...state,
        pokemons: [],
      };

    case "GETALL_TYPES":
      return { ...state, tipos: [...action.query] };

    case "GETPOK_ID":
      return { ...state, id: [action.query] };

    case "GETPOK_NAME":
      return { ...state, pokemons: [action.query] };

    case "CREATED_EXIS":
      return { ...state, pokemons: [...action.query] };

    case "POKEMON_FILTER":
      const dataPokemon = state.pokemonesfijos;
      const pokemonsFiltered = dataPokemon.filter((e) => {
        return e.tipos.includes(action.query);
      });
      return { ...state, pokemons: [...pokemonsFiltered] };

    case "POKEMONBY_ALF":
      const pokemonsAll = state.pokemons;
      const filterAlfPokemons =
        action.query === "ASCENDENTE"
          ? pokemonsAll.sort((a, b) => {
              if (a.nombre > b.nombre) {
                return 1;
              }
              if (a.nombre < b.nombre) {
                return -1;
              }
              return 0;
            })
          : pokemonsAll.sort((a, b) => {
              if (a.nombre > b.nombre) {
                return -1;
              }
              if (a.nombre < b.nombre) {
                return 1;
              }
              return 0;
            });
      return { ...state, pokemons: [...filterAlfPokemons] };

    case "POKEMONBY_STR":
      const pokemonsGetAll = state.pokemons;
      console.log(pokemonsGetAll);
      const filterStrPokemons =
        action.query === "LOWSTRONG"
          ? pokemonsGetAll.sort((a, b) => {
              if (a.fuerza > b.fuerza) {
                return 1;
              }
              if (a.fuerza < b.fuerza) {
                return -1;
              }
              return 0;
            })
          : pokemonsGetAll.sort((a, b) => {
              if (a.fuerza > b.fuerza) {
                return -1;
              }
              if (a.fuerza < b.fuerza) {
                return 1;
              }
              return 0;
            });
      return { ...state, pokemons: [...filterStrPokemons] };

    default:
      return state;
  }
};

export default reducer;
