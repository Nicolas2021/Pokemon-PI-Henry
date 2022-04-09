import React from "react";
import { useDispatch } from "react-redux";
import "./Card.css";
import { getById } from "../../redux/actions/pokemonAction";
import {
  toUpperCaseNamePokemon,
  getColorByTypesOfPokemon,
  addZeroToId,
} from "../domain/pokemons/pokemones.js";
//-------------------------------------

export const Card = ({ id, nombre, img, tipos, openModal }) => {
  const dispatch = useDispatch();

  var name = toUpperCaseNamePokemon(nombre);
  const colorTypes = getColorByTypesOfPokemon(tipos);
  const newId = addZeroToId(id);
  //-------------------------------------

  function OnClickPokemon(pokemonId) {
    dispatch(getById(pokemonId));
    openModal();
  }
  //-------------------------------------

  return (
    <div className="components">
      <div className="cards" onClick={() => OnClickPokemon(id)}>
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
