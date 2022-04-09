import React from "react";
import { useDispatch } from "react-redux";
import leftArrow from "./leftarrow.png";
import rightArrow from "./rightarrow.png";
import "./Paginado.css";
import {
  getAllPokemons,
  setearEstado,
  setearPokemons,
} from "../../redux/actions/pokemonAction";

export const Paginado = ({ next, previous }) => {
  const dispatch = useDispatch();
  function onClickHandle() {
    dispatch(setearPokemons());
    dispatch(setearEstado(true));
    dispatch(getAllPokemons());
  }

  return (
    <div className="paginado__container">
      <div className="boxes__container">
        <button onClick={onClickHandle} className="boton">
          Reload
        </button>
      </div>
      <div className="bordeado__container">
        <img onClick={previous} className="arrow" src={leftArrow} alt="" />
        <p>--------------------------------------</p>
        <img onClick={next} className="arrow" src={rightArrow} alt="" />
      </div>
    </div>
  );
};
