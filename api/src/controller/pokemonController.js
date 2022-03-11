const { default: axios } = require("axios");
const { urlApi } = require("../domain/common/constantes");
const {
  createMyPokemonsResponseFromApi,
  pokemonsFromBD,
} = require("../domain/pokemons/pokemon");
const { Pokemon, Tipo } = require("../db.js");
const { v4: uuidv4 } = require("uuid");

//----------------------------------------------------------//

async function getAllPokemons(req, res) {
  try {
    const dbPokemons = await Pokemon.findAll({ include: { model: Tipo } });
    const pokemonsResultsFromDB = pokemonsFromBD(dbPokemons);

    const pokemonsUrls = await axios.get(`${urlApi}/pokemon?limit=40`);

    const pokemons = pokemonsUrls.data.results.map((pokemon) =>
      axios.get(pokemon.url)
    ); // Passing the whole { url : "..." , name : "Source2" } as "config". This syntax is equivalent to sources.map(source => axios.get(sources))
    const results = await Promise.all(pokemons);
    const response = createMyPokemonsResponseFromApi(results);
    //concat pokemons from api and db
    const allPokemons = response.concat(pokemonsResultsFromDB);
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
};
