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
  fighting: "#FF6A6A",
  rock: "#CD853F",
  ghost: "#778899",
  steel: "#CCCCCC",
  psychic: "#FFB5C5",
  ice: "#ADD8E6",
  dragon: "#AB82FF",
  dark: "#A9A9A9",
  unknown: "#59B388",
  shadow: "#230C2E",
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

export function changeColorBorder(type){
  const colorBorder = {color: typeColors[type[0]]+" 2px solid"};
  return colorBorder
}

export function addZeroToId(id) {
  if (id < 10) {
    id = "00" + id;
    return id;
  } else if (id < 50) {
    id = "0" + id;
    return id;
  } else {
    return id;
  }
}
