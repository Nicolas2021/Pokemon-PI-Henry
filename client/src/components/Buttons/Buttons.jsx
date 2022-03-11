import React from "react";
import "./Buttons.css";
import { Link } from "react-router-dom";

export const Buttons = () => {
  return (
    <div className="buttons__container">
      <div className="action__buttons">
        <div className="type__container">
          <button className="type">Type</button>
          <div className="types__buttons">
            <button>Grass</button>
            <button>Poison</button>
            <button>Fire</button>
            <button>Flying</button>
            <button>Water</button>
            <button>Bug</button>
            <button>Normal</button>
            <button>Electric</button>
            <button>Ground</button>
            <button>Fairy</button>
          </div>
        </div>
        <div className="asc__container">
          <button className="asc__desc">Asc / Desc</button>
          <div className="asc__buttons">
            <button>Upward A-Z</button>
            <button>Falling Z-A</button>
          </div>
        </div>
        <div className="create__button">
          <Link to="/CreatePokemon">
            <button>Create your pokemon</button>
          </Link>
        </div>
        <div className="existent__container">
          <button className="existent">Existent or Created</button>
          <div className="existent__buttons">
            <button>Existing</button>
            <button>Created</button>
          </div>
        </div>

        <div className="strong__container">
          <button className="strong">Strong</button>
          <div className="strong__buttons">
            <button>Strong +</button>
            <button>Strong -</button>
          </div>
        </div>
      </div>
    </div>
  );
};
