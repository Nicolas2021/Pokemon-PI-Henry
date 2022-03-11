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

module.exports = { createMyPokemonsResponseFromApi, pokemonsFromBD };
