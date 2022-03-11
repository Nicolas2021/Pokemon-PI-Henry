import axios from "axios";
import {
  getAllPokemonsFromDbAndApi,
  getAllTypesFromApi,
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
