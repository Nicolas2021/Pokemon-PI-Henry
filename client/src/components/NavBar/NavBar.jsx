import React from "react";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <div className="navContainer">
      <h1>Pokemon-PI/Henry</h1>
      <div className="search__button">
        <input type="search" placeholder="...Search Pokemon" />
        <button></button>
      </div>
    </div>
  );
};
