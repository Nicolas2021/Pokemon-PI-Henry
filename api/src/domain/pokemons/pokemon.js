function createMyPokemonsResponseFromApi(pokemonsArr) {
  //nombre img tipo
  const miInfoDePokemonsDeseada = pokemonsArr.map((pokemonInfoFromApi) => {
    return {
      id: pokemonInfoFromApi.data.id,
      nombre: pokemonInfoFromApi.data.name,
      img: pokemonInfoFromApi.data.sprites.front_default,
      tipos: pokemonInfoFromApi.data.types.map((type) => type.type.name),
    };
  });

  return miInfoDePokemonsDeseada;
}

function pokemonsFromBD(pokemonsData) {
  const pokemonsInfo = pokemonsData.map((el) => {
    return {
      id: el.dataValues.id.slice(0, 3),
      nombre: el.dataValues.nombre,
      vida: el.dataValues.vida,
      fuerza: el.dataValues.fuerza,
      defensa: el.dataValues.defensa,
      velocidad: el.dataValues.velocidad,
      altura: el.dataValues.altura,
      peso: el.dataValues.peso,
      img: el.dataValues.img,
      tipos: el.dataValues.tipos.map((el) => el.nombre),
    };
  });
  return pokemonsInfo;
}

function pokemonsId(pokemonsDataId) {
  const pokemonsObtainsById = {
    id: pokemonsDataId.data.id,
    nombre: pokemonsDataId.data.name,
    img: pokemonsDataId.data.sprites.front_default,
    tipos: pokemonsDataId.data.types.map((el) => el.type.name),
    vida: pokemonsDataId.data.stats[0].base_stat,
    fuerza: pokemonsDataId.data.stats[1].base_stat,
    defensa: pokemonsDataId.data.stats[2].base_stat,
    velocidad: pokemonsDataId.data.stats[5].base_stat,
    altura: pokemonsDataId.data.height,
    peso: pokemonsDataId.data.weight,
  };
  return pokemonsObtainsById;
}

function pokemonFromDbId(pokemonId) {
  const searchPokemon = {
    id: pokemonId.id,
    nombre: pokemonId.nombre,
    img: pokemonId.img,
    tipos: pokemonId.tipos.map((el) => el.nombre),
    vida: pokemonId.vida,
    fuerza: pokemonId.fuerza,
    defensa: pokemonId.defensa,
    velocidad: pokemonId.velocidad,
    altura: pokemonId.altura,
    peso: pokemonId.peso,
  };
  return searchPokemon;
}

module.exports = {
  createMyPokemonsResponseFromApi,
  pokemonsFromBD,
  pokemonsId,
  pokemonFromDbId,
};
