import React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getAllTypes } from "../../redux/actions/pokemonAction";
import axios from "axios";
import { Link } from "react-router-dom";
import { posteoPokemons } from "../../assets/common/configurarRutas";

import "./Form.css";

const Forms = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTypes());
  }, [dispatch]);
  //States----

  const types = useSelector((state) => state.tipos);
  const [botonActivo, setBotonActivo] = useState(false);
  const [error, setError] = useState({
    nombre: "",
    vida: "",
    fuerza: "",
  });
  const [pokemon, setPokemon] = useState({
    nombre: "",
    vida: "",
    fuerza: "",
    defensa: "",
    velocidad: "",
    altura: "",
    peso: "",
    tipo: [],
  });

  //Functions-----

  function validate(el) {
    if (pokemon[el] === "") {
      setError({ ...error, [el]: `El campo ${el} no puede estar vacio` });
      setBotonActivo(false);
    } else {
      setError({ ...error, [el]: "" });
      setBotonActivo(true);
    }
  }

  function onInputChange(e) {
    setPokemon((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value.toLowerCase() };
    });
  }

  function handleSelect(event) {
    setPokemon({
      ...pokemon,
      tipo: [...pokemon.tipo, event.target.value],
    });
  }

  function handleDelete(option) {
    setPokemon({
      ...pokemon,
      tipo: pokemon.tipo.filter((type) => type !== option),
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await axios.post(posteoPokemons, pokemon);
    alert(`Atrapaste un ${pokemon.nombre}!!!`);
    setPokemon({
      nombre: "",
      vida: "",
      fuerza: "",
      defensa: "",
      velocidad: "",
      altura: "",
      peso: "",
      tipo: [],
    });
  }
  //----------
  return (
    <section>
      <form className="form__Pokemon" onSubmit={handleSubmit}>
        <div className="container__form">
          <div className="side__top">
            <h1>Create your Pokemon</h1>
          </div>
          <div className="continainer__sides">
            <div className="side__left">
              <label htmlFor="inputnombre">Nombre:</label>
              <input
                className={error.nombre ? "danger" : "input-Form"}
                type="text"
                name="nombre"
                id="inputnombre"
                value={pokemon.nombre}
                onBlur={(e) => validate(e.target.name)}
                onChange={onInputChange}
                autoFocus
              />
              {!error.nombre ? null : (
                <span className="spanAlert">{error.nombre}</span>
              )}
              <br />
              <label htmlFor="">Vida:</label>
              <input
                className={error.vida ? "danger" : "input-Form"}
                type="number"
                name="vida"
                value={pokemon.vida}
                onBlur={(e) => validate(e.target.name)}
                onChange={onInputChange}
              />
              {!error.vida ? null : (
                <span className="spanAlert">{error.vida}</span>
              )}
              <br />
              <label htmlFor="">Ataque</label>
              <input
                className={error.fuerza ? "danger" : "input-Form"}
                type="number"
                name="fuerza"
                value={pokemon.fuerza}
                onBlur={(e) => validate(e.target.name)}
                onChange={onInputChange}
              />
              {!error.fuerza ? null : (
                <span className="spanAlert">{error.fuerza}</span>
              )}
              <br />
              <label htmlFor="">Defensa:</label>
              <input
                type="number"
                name="defensa"
                value={pokemon.defensa}
                onChange={onInputChange}
              />
            </div>
            <div className="side__right">
              <label htmlFor="">Velocidad:</label>
              <input
                type="number"
                name="velocidad"
                value={pokemon.velocidad}
                onChange={onInputChange}
              />
              <br />

              <label htmlFor="">Altura:</label>
              <input
                type="number"
                name="altura"
                value={pokemon.altura}
                onChange={onInputChange}
              />
              <br />

              <label htmlFor="">Peso:</label>
              <input
                type="number"
                name="peso"
                value={pokemon.peso}
                onChange={onInputChange}
              />
              <br />
              <label htmlFor="">Tipos:</label>
              <select
                className="mapeo"
                name="tipo"
                id=""
                onChange={handleSelect}
                form="carform"
              >
                {types.map((el, item) => {
                  return (
                    <option className="opciones" key={item} value={el.name}>
                      {el.name}{" "}
                    </option>
                  );
                })}
              </select>
              <div className="div">
                {pokemon.tipo.map((el) => {
                  return (
                    <div className="div_types" key={el}>
                      <h4 className="h4">{el}</h4>
                      <button
                        className="x_button"
                        onClick={() => {
                          handleDelete(el);
                        }}
                      >
                        x
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="side__bottom">
            <br />
            <div className="bottom__buttons">
              <Link to="/home">
                <button className="back__button">Volver</button>
              </Link>
              <input
                className="submit__button"
                type="submit"
                onClick={(e) => validate(e.target.name)}
                disabled={!botonActivo}
              />
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Forms;
