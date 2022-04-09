import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getAllPokemons, getName } from "../../redux/actions/pokemonAction";
import "./NavBar.css";

export const NavBar = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  function onHandleChange(e) {
    setSearch(e.target.value);
  }

  function onClickHandle() {
    if (search.length === 0) {
      return alert("No puedes buscar un pokemon si el input esta vacio");
    }
    dispatch(getName(search));
  }

  function cambiadora() {
    console.log("hola");
  }

  return (
    <div className="navContainer">
      <h1>Pokemon-PI/Henry</h1>
      <div className="search__button">
        <input
          type="search"
          placeholder="...Search Pokemon"
          onChange={onHandleChange}
        />
        <button type="submit" onClick={onClickHandle}></button>
      </div>
    </div>
  );
};
