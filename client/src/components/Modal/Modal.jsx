import React from "react";
import { useDispatch } from "react-redux";
import { setearId } from "../../redux/actions/pokemonAction";
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
            <img src={pokemons[0].img} alt="" />
            <div className="modal__info">
              <p>Nombre: {pokemons[0].nombre} </p>
              <p>Vida: {pokemons[0].vida}</p>
              <p>Fuerza: {pokemons[0].fuerza}</p>
              <p>Defensa: {pokemons[0].defensa}</p>
              <p>Velocidad: {pokemons[0].velocidad}</p>
              <p>Altura: {pokemons[0].altura}</p>
              <p>Peso: {pokemons[0].peso}</p>
              <p>Tipo: {pokemons[0].tipos.join(", ")}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
