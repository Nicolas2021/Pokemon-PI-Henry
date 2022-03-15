const { default: axios } = require("axios");
const { urlApi } = require("../domain/common/constantes");
const {
  createMyPokemonsResponseFromApi,
  pokemonsFromBD,
  pokemonsId,
  pokemonFromDbId,
} = require("../domain/pokemons/pokemon");
const { Pokemon, Tipo } = require("../db.js");
const { v4: uuidv4 } = require("uuid");

//----------------------------------------------------------//

async function getAllPokemons(req, res) {
  try {
    const dbPokemons = await Pokemon.findAll({ include: { model: Tipo } });
    const pokemonsResultsFromDB = pokemonsFromBD(dbPokemons);

    const pokemonsUrls = await axios.get(`${urlApi}/pokemon`);
    const nextPokemonsUrls = await axios.get(`${pokemonsUrls.data.next}`);
    const pokemons = pokemonsUrls.data.results.map((pokemon) =>
      axios.get(pokemon.url)
    );
    const nextPokemons = nextPokemonsUrls.data.results.map((pokemon) =>
      axios.get(pokemon.url)
    );
    const results = await Promise.all(pokemons);
    const resultsNext = await Promise.all(nextPokemons);

    const response = createMyPokemonsResponseFromApi(results);
    const responseNext = createMyPokemonsResponseFromApi(resultsNext);
    //concat pokemons from api and db
    const allPokemons = response
      .concat(responseNext)
      .concat(pokemonsResultsFromDB);

    res.status(200).send(allPokemons);
  } catch (error) {
    res.status(500).send({ error });
  }
}

//----------------------------------------------------------//

async function getAllTypes(req, res) {
  try {
    const callTypes = await axios.get(`${urlApi}/type`);
    callTypes.data.results.forEach((e) => {
      Tipo.findOrCreate({
        where: { nombre: e.name },
        defaults: {
          nombre: e.name,
        },
      });
    });
    res.status(200).send(callTypes.data.results);
  } catch (error) {
    res.status(500).send({ error });
  }
}

//----------------------------------------------------------//

async function getById(req, res) {
  let { id } = req.body;
  if (id.length > 3) {
    try {
      const pokemonGetByDbId = await Pokemon.findByPk(id, { include: [Tipo] });
      const resultPokemonDb = pokemonFromDbId(pokemonGetByDbId);
      res.send(resultPokemonDb);
    } catch (error) {
      res.send(error);
    }
  } else {
    try {
      const pokemonsGetById = await axios.get(`${urlApi}/pokemon/${id}`);
      const pokemonGet = pokemonsId(pokemonsGetById);
      res.send(pokemonGet);
    } catch (error) {
      res.send(error);
    }
  }
}

//----------------------------------------------------------//

async function createPokemon(req, res) {
  let { nombre, vida, fuerza, defensa, velocidad, altura, peso, img, tipo } =
    req.body;

  try {
    const pokemonCreated = await Pokemon.create({
      id: uuidv4(),
      nombre: nombre,
      vida: vida,
      fuerza: fuerza,
      defensa: defensa,
      velocidad: velocidad,
      altura: altura,
      peso: peso,
      img:
        img ||
        "https://gogeticons.com/frontend/web/icons/data/2/7/2/9/2/superball_512.png",
    });
    console.log(pokemonCreated);
    tipo.map(async (t) => {
      const [postTypes, succes] = await Tipo.findOrCreate({
        where: {
          nombre: t,
        },
        defaults: { nombre: t },
      });
      await pokemonCreated.addTipo(postTypes);
    });
    return res.status(200).send(pokemonCreated);
  } catch (error) {
    res.status(404).send("No se puede cargar el Pokemon");
  }
}

module.exports = {
  getAllPokemons,
  createPokemon,
  getAllTypes,
  getById,
};
