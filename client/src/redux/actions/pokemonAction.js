import axios from "axios";
import {
  getAllPokemonsFromDbAndApi,
  getAllTypesFromApi,
  getPokemonById,
  getPokemonByName,
  getExistentOrCreated,
} from "../../assets/common/configurarRutas";

function getAllPokemons() {
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

function getPokemonExistentOrCreated(param) {
  return async (dispatch) => {
    try {
      const resolve = await axios.get(`${getExistentOrCreated}?param=${param}`);
      dispatch({
        type: "CREATED_EXIS",
        query: resolve.data,
      });
    } catch (error) {}
  };
}

function getAllTypes() {
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

function getById(id) {
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

function getName(nombre) {
  return async (dispatch) => {
    try {
      const pokemonNombre = await axios.get(
        `${getPokemonByName}?name=${nombre}`
      );

      dispatch({
        type: "GETPOK_NAME",
        query: pokemonNombre.data,
      });
    } catch (error) {}
  };
}

function orderByAlf(order) {
  return {
    type: "POKEMONBY_ALF",
    query: order,
  };
}

function orderByStr(order) {
  return {
    type: "POKEMONBY_STR",
    query: order,
  };
}

function filterByType(filter) {
  return {
    type: "POKEMON_FILTER",
    query: filter,
  };
}

function setearEstado(state) {
  return {
    type: "SET_STATE",
    query: state,
  };
}

function setearPokemons(state) {
  return {
    type: "SET_POK",
    query: state,
  };
}

function setearId() {
  return {
    type: "SET_ID",
  };
}

export {
  getPokemonExistentOrCreated,
  getAllPokemons,
  getAllTypes,
  getById,
  getName,
  orderByAlf,
  orderByStr,
  filterByType,
  setearEstado,
  setearPokemons,
  setearId,
};
