const { arrOfPokemonsOfBd } = require("../common/constantes")

function createMyPokemonsResponseFromApi(pokemonsArr) {
    //nombre img tipo
    const miInfoDePokemonsDeseada = pokemonsArr.map(pokemonInfoFromApi => {
         return {
            id:pokemonInfoFromApi.data.id,
            nombre: pokemonInfoFromApi.data.name,
            img: pokemonInfoFromApi.data.sprites.front_default,
            tipos: pokemonInfoFromApi.data.types.map(type => type.type.name),
        }
    })

    return miInfoDePokemonsDeseada
}
function createMyPokemonsResponseFromBd(pokemonsArr) {
    //nombre img tipo
    const miInfoDePokemonsDeseada = pokemonsArr.map(pokemonInfoFromApi => {
         return {
            id:pokemonInfoFromApi.id,
            nombre: pokemonInfoFromApi.nombre,
            img: pokemonInfoFromApi.img,
            tipos: pokemonInfoFromApi.tipos.map(type => type.type.name)
        }
    })

    return miInfoDePokemonsDeseada
}
function getPokemonsByBd() {
    return arrOfPokemonsOfBd;
}

module.exports = {createMyPokemonsResponseFromApi,getPokemonsByBd,createMyPokemonsResponseFromBd}