import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getById } from "../../redux/actions/pokemonAction";
import "./Modal.css";

export const Modal = ({ closeModal, numeroId }) => {
  const dispatch = useDispatch();
  var pokemonUnic = useSelector((state) => state.id);
  const { nombre, vida, fuerza, defensa, velocidad, altura, peso, img, tipos } =
    pokemonUnic[0];
  //-------------------------------------
  useEffect(() => {
    dispatch(getById(numeroId));
  }, [dispatch]);

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
          <img src={img} alt="" />
          <div className="modal__info">
            <p>Nombre:{nombre} </p>
            <p>Vida:{vida} </p>
            <p>Fuerza:{fuerza} </p>
            <p>Defensa:{defensa} </p>
            <p>Velocidad:{velocidad} </p>
            <p>Altura:{altura} </p>
            <p>Peso:{peso} </p>
            <p>Tipo:{tipos} </p>
          </div>
        </div>
      </div>
    </div>
  );
};
