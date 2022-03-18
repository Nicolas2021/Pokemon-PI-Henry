import React from "react";
import { useDispatch } from "react-redux";
import "./Buttons.css";
import { Link } from "react-router-dom";
import { orderByAlf } from "../../redux/actions/pokemonAction";
import { orderByStr } from "../../redux/actions/pokemonAction";
import { filterByType } from "../../redux/actions/pokemonAction";
import { getPokemonExistentOrCreated } from "../../redux/actions/pokemonAction";

export const Buttons = () => {
  const dispatch = useDispatch();
  //-----------------------------------------------

  function onClickAsc(e) {
    dispatch(orderByAlf(e.target.value));
  }
  function onClickDesc(e) {
    dispatch(orderByAlf(e.target.value));
  }
  //-----------------------------------------------
  function onClickStrMas(e) {
    dispatch(orderByStr(e.target.value));
  }
  function onClickStrMenos(e) {
    dispatch(orderByStr(e.target.value));
  }
  //-----------------------------------------------
  function onClickTipes(e) {
    dispatch(filterByType(e.target.value));
  }
  //-----------------------------------------------

  function onClickExist(e) {
    dispatch(getPokemonExistentOrCreated(e.target.value));
  }

  //-----------------------------------------------
  return (
    <div className="buttons__container">
      <div className="action__buttons">
        <div className="type__container">
          <button className="type">Type</button>
          <div className="types__buttons">
            <button onClick={onClickTipes} value="grass">
              Grass
            </button>
            <button onClick={onClickTipes} value="poison">
              Poison
            </button>
            <button onClick={onClickTipes} value="fire">
              Fire
            </button>
            <button onClick={onClickTipes} value="flying">
              Flying
            </button>
            <button onClick={onClickTipes} value="water">
              Water
            </button>
            <button onClick={onClickTipes} value="bug">
              Bug
            </button>
            <button onClick={onClickTipes} value="normal">
              Normal
            </button>
            <button onClick={onClickTipes} value="electric">
              Electric
            </button>
            <button onClick={onClickTipes} value="ground">
              Ground
            </button>
            <button onClick={onClickTipes} value="fairy">
              Fairy
            </button>
          </div>
        </div>
        <div className="asc__container">
          <button className="asc__desc">Asc / Desc</button>
          <div className="asc__buttons">
            <button onClick={onClickAsc} value="ASCENDENTE">
              Upward A-Z
            </button>
            <button onClick={onClickDesc} value="DESCENDENTE">
              Falling Z-A
            </button>
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
            <button onClick={onClickExist} value="EXISTENTE">
              Existing
            </button>
            <button onClick={onClickExist} value="CREADO">
              Created
            </button>
          </div>
        </div>

        <div className="strong__container">
          <button className="strong">Strong</button>
          <div className="strong__buttons">
            <button onClick={onClickStrMas} value="MORESTRONG">
              Strong +
            </button>
            <button onClick={onClickStrMenos} value="LOWSTRONG">
              Strong -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
