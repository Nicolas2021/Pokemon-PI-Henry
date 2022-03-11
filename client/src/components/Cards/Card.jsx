import React from "react";
import "./Card.css";
import {
  toUpperCaseNamePokemon,
  getColorByTypesOfPokemon,
  addZeroToId,
} from "../domain/pokemons/pokemones.js";

export const Card = ({ id, nombre, img, tipos }) => {
  var name = toUpperCaseNamePokemon(nombre);
  const colorTypes = getColorByTypesOfPokemon(tipos);
  const newId = addZeroToId(id);
  return (
    <div className="components">
      <div className="cards">
        <div className="card__img">
          <img src={img} alt="" />
        </div>
        <div className="card__info">
          <p>N.º{newId}</p>
          <h3>{name}</h3>
          <div className="types">
            {colorTypes.map((type) => {
              return (
                <div className="types__info" style={{ background: type.color }}>
                  {type.type}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
