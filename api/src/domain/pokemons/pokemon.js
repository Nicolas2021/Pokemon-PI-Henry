function createMyPokemonsResponseFromApi(pokemonsArr) {
  //nombre img tipo
  const miInfoDePokemonsDeseada = pokemonsArr.map((pokemonInfoFromApi) => {
    return {
      id: pokemonInfoFromApi.data.id,
      nombre: pokemonInfoFromApi.data.name,
      img: pokemonInfoFromApi.data.sprites.front_default,
      tipos: pokemonInfoFromApi.data.types.map((type) => type.type.name),
      fuerza: pokemonInfoFromApi.data.stats[1].base_stat,
    };
  });

  return miInfoDePokemonsDeseada;
}

function pokemonsFromBD(pokemonsData) {
  const pokemonsInfo = pokemonsData.map((el) => {
    return {
      id: el.dataValues.id,
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

function allPokemonsFromDB(infoCreated) {
  const pokemonFromDbCreated = infoCreated.map((el) => {
    return {
      id: el.dataValues.id,
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
  console.log(pokemonFromDbCreated);
  return pokemonFromDbCreated;
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

function pokemonInfoByName(pokemon) {
  const dataPokemon = {
    id: pokemon.dataValues.id,
    nombre: pokemon.dataValues.nombre,
    vida: pokemon.dataValues.vida,
    fuerza: pokemon.dataValues.fuerza,
    defensa: pokemon.dataValues.defensa,
    velocidad: pokemon.dataValues.velocidad,
    altura: pokemon.dataValues.altura,
    peso: pokemon.dataValues.peso,
    img: pokemon.dataValues.img,
    tipos: pokemon.dataValues.tipos.map((el) => el.nombre),
  };
  return dataPokemon;
}

function pokemonNameApi(pokemonName) {
  const pokemonsObtainsByName = {
    id: pokemonName.data.id,
    nombre: pokemonName.data.name,
    img: pokemonName.data.sprites.front_default,
    tipos: pokemonName.data.types.map((el) => el.type.name),
    vida: pokemonName.data.stats[0].base_stat,
    fuerza: pokemonName.data.stats[1].base_stat,
    defensa: pokemonName.data.stats[2].base_stat,
    velocidad: pokemonName.data.stats[5].base_stat,
    altura: pokemonName.data.height,
    peso: pokemonName.data.weight,
  };
  return pokemonsObtainsByName;
}
//---------------------------------------------
function getAllTypesFromDb(dataBD) {
  const pokeTipes = dataBD.map((e) => {
    return {
      nombre: e.dataValues.nombre,
    };
  });
  return pokeTipes;
}

module.exports = {
  getAllTypesFromDb,
  allPokemonsFromDB,
  createMyPokemonsResponseFromApi,
  pokemonsFromBD,
  pokemonsId,
  pokemonFromDbId,
  pokemonInfoByName,
  pokemonNameApi,
};
