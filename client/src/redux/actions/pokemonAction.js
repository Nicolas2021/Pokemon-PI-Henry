import axios from "axios";
import {
  getAllPokemonsFromDbAndApi,
  getAllTypesFromApi,
  getPokemonById,
} from "../../assets/common/configurarRutas";

export function getAllPokemons() {
  return async (dispatch) => {
    try {
      const pokemons = await axios.get(getAllPokemonsFromDbAndApi);
      dispatch({
        type: "GETALL_POKEMONS",
        query: pokemons.data,
      });
    } catch (error) {}
  };
}

export function getAllTypes() {
  return async (dispatch) => {
    try {
      const tipos = await axios.get(getAllTypesFromApi);

      dispatch({
        type: "GETALL_TYPES",
        query: tipos.data,
      });
    } catch (error) {}
  };
}

export function getById(id) {
  return async (dispatch) => {
    try {
      const unicPokemon = await axios.get(`${getPokemonById}/${id}`);

      dispatch({
        type: "GETPOK_ID",
        query: unicPokemon.data,
      });
    } catch (error) {}
  };
}
