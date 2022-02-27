const { default: axios } = require("axios");
const { urlApi, arrOfPokemonsOfBd } = require("../domain/common/constantes");
const { createMyPokemonsResponseFromApi, getPokemonsByBd, createMyPokemonsResponseFromBd } = require("../domain/pokemons/pokemon");

var pokemonsFromApi;
var pokemonsFromBd;

async function getAllPokemons(req,res) {
    try {
        const pokemonsUrls = await axios.get(`${urlApi}/pokemon`);
    
        const pokemons = pokemonsUrls.data.results.map(pokemon=>axios.get(pokemon.url)); // Passing the whole { url : "..." , name : "Source2" } as "config". This syntax is equivalent to sources.map(source => axios.get(sources))
        const results = await Promise.all(pokemons);
        const response = createMyPokemonsResponseFromApi(results);

        pokemonsFromBd = getPokemonsByBd();
        pokemonsFromBd = createMyPokemonsResponseFromBd(pokemonsFromBd);
        pokemonsFromApi = response;
    
        const pokemonsFromBDandApi = [...pokemonsFromBd,...pokemonsFromApi];
        res.status(200).send(pokemonsFromBDandApi);
    } catch (error) {
        res.status(404).send({error});
    }
}

function getById(req,res) {
    const id = req.params.id;
    
    const pokemonsFromBDandApi = [...pokemonsFromBd,...pokemonsFromApi];

    const result = pokemonsFromBDandApi.find(pokemon => pokemon.id == id);

    res.status(200).send(result)
}

function createPokemon(req,res){
    const pokemon = {
        id: "bd9dc32aasdsad",
        nombre: "hehe",
        vida: 30,
        fuerza: 15,
        defensa: 20,
        velocidad: 30,
        altura: 50,
        peso: 40,
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        tipos: [{type:{name:"pito"}},{type:{name:"chico"}}],
    };

    arrOfPokemonsOfBd.push(pokemon);
    pokemonsFromBd = getPokemonsByBd();
    res.status(200).send(pokemonsFromBd)
}

module.exports = {
    getAllPokemons,
    getById,
    createPokemon
}