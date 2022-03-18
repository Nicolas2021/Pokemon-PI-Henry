import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getById } from "../../redux/actions/pokemonAction";
import "./Modal.css";

export const Modal = ({ closeModal, numeroId }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getById(numeroId));
  }, [dispatch]);
  //-------------------------------------
  var pokemonUnic = useSelector((state) => state.id);

  /*  const { nombre, vida, fuerza, defensa, velocidad, altura, peso, img, tipos } =
    pokemonUnic[0]; */
  //-------------------------------------
  function onCloseModal() {
    pokemonUnic[0] = [];
    closeModal();
  }

  //-------------------------------------

  return (
    <div className="modal__open">
      <div className="modal__container">
        <div className="modal__top">
          <button onClick={() => onCloseModal()}>X</button>
        </div>
        <div className="modal__body">
          <img src={pokemonUnic[0]?.img} alt="" />
          <div className="modal__info">
            <p>Nombre:{pokemonUnic[0]?.nombre} </p>
            <p>Vida:{pokemonUnic[0]?.vida} </p>
            <p>Fuerza:{pokemonUnic[0]?.fuerza} </p>
            <p>Defensa:{pokemonUnic[0]?.defensa} </p>
            <p>Velocidad:{pokemonUnic[0]?.velocidad} </p>
            <p>Altura:{pokemonUnic[0]?.altura} </p>
            <p>Peso:{pokemonUnic[0]?.peso} </p>
            <p>Tipo:{pokemonUnic[0]?.tipos} </p>
          </div>
        </div>
      </div>
    </div>
  );
};
