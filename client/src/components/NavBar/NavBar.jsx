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
    dispatch(getName(search));
  }

  function onAbortChange() {
    dispatch(getAllPokemons());
  }

  return (
    <div className="navContainer">
      <h1>Pokemon-PI/Henry</h1>
      <div className="search__button">
        <input
          type="search"
          placeholder="...Search Pokemon"
          onChange={onHandleChange}
          onAbort={onAbortChange}
        />
        <button type="submit" onClick={onClickHandle}></button>
      </div>
    </div>
  );
};
