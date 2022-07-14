import React from "react";
import { useDispatch } from "react-redux";
import { setearId } from "../../redux/actions/pokemonAction";
import { toUpperCaseNamePokemon, changeColorBorder } from "../domain/pokemons/pokemones";
import "./Modal.css";

export const Modal = ({ closeModal, pokemons }) => {
  /* const { nombre, vida, fuerza, defensa, velocidad, altura, peso, img, tipos } =
    pokemonUnic[0]; */
  const dispatch = useDispatch();
  //-------------------------------------
  function onCloseModal() {
    dispatch(setearId());
    closeModal();
  }

  //-------------------------------------
  if (pokemons.length === 0) {
    return (
      <div className="modal__open">
        <div className="modal_containloader">
          <div className="preloader">Loading...</div>
        </div>
      </div>
    );
  } else {
    console.log(pokemons);
  const colorBorder = changeColorBorder(pokemons[0]?.tipos)
    const name = toUpperCaseNamePokemon(pokemons[0]?.nombre)
    return (
      <div className="modal__open">
        <div className="modal__container">
          <div className="modal__top">
            <div class="close-container" onClick={() => onCloseModal()}>
              <div class="leftright"></div>
              <div class="rightleft"></div>
              <p class="close">close</p>
            </div>
          </div>
          <div className="modal__body">
            <img src={pokemons[0].img} alt="" style={{border: colorBorder.color}}/>
            <div className="modal__info">
              <div className="claro">

              <p>Name: {name} </p>
              <p>Life: {pokemons[0].vida}</p>
              <p>Strong: {pokemons[0].fuerza}</p>
              <p>Defense: {pokemons[0].defensa}</p>
              </div>
              <div className="claro">
              <p>Type: {pokemons[0].tipos.join(", ")}</p>
              <p>Speed: {pokemons[0].velocidad}</p>
              <p>Height: {pokemons[0].altura}</p>
              <p>Weight: {pokemons[0].peso}</p>

              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
};
