const typeColors = {
  grass: "#99FF66",
  poison: "#CC88BB",
  fire: "#FF7F00",
  flying: "#BAAAFF",
  water: "#B0E2FF",
  bug: "#99CC33",
  normal: "#DDCCAA",
  electric: "#FFD700",
  ground: "#DEB887",
  fairy: "#FFB0FF",
};

export function toUpperCaseNamePokemon(name) {
  name = name.charAt(0).toUpperCase() + name.slice(1);
  return name;
}

export function getColorByTypesOfPokemon(types) {
  const colorsByType = types.map((type) => {
    return { type: type, color: typeColors[type] };
  });
  return colorsByType;
}

export function addZeroToId(id) {
  if (id < 10) {
    id = "00" + id;
    return id;
  } else {
    id = "0" + id;
    return id;
  }
}
