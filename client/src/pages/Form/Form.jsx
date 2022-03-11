import React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getAllTypes } from "../../redux/actions/pokemonAction";
import axios from "axios";
import { posteoPokemons } from "../../assets/common/configurarRutas";

import "./Form.css";

const Forms = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTypes());
  }, [dispatch]);
  //States----

  const tipo = useSelector((state) => state.tipos);
  const [tipos, setTipos] = useState([]);
  const [error, setError] = useState({
    nombre: "",
    vida: "",
    ataque: "",
  });
  const [pokemon, setPokemon] = useState({
    nombre: "",
    vida: "",
    ataque: "",
    defensa: "",
    velocidad: "",
    altura: "",
    peso: "",
    imagen: "",
    tipo: tipos,
  });

  //Functions-----
  function validate(el) {
    if (pokemon[el] === "") {
      setError({ ...error, [el]: `El campo ${el} no puede estar vacio` });
    } else {
      setError({ ...error, [el]: "" });
    }
  }

  function onInputChange(e) {
    setPokemon((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value.toLowerCase() };
    });
  }

  function onInputTypes({ target }) {
    setTipos(pokemon.tipo.push(target.value));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await axios.post(posteoPokemons, pokemon);
    alert(`Atrapaste un ${pokemon.nombre}!!!`);
  }
  //----------
  return (
    <section>
      <form className="form__Pokemon" onSubmit={handleSubmit}>
        <h1>Carga tu Pokemon</h1>

        <label htmlFor="inputnombre">Nombre:</label>
        <input
          className={error.nombre ? "danger" : "input-Form"}
          type="text"
          name="nombre"
          id="inputnombre"
          value={pokemon.nombre}
          onBlur={(e) => validate(e.target.name)}
          onChange={onInputChange}
        />
        {!error.nombre ? null : (
          <span className="spanAlert">{error.nombre}</span>
        )}

        <label htmlFor="">Vida:</label>
        <input
          className={error.vida ? "danger" : "input-Form"}
          type="number"
          name="vida"
          value={pokemon.vida}
          onBlur={(e) => validate(e.target.name)}
          onChange={onInputChange}
        />
        {!error.vida ? null : <span className="spanAlert">{error.vida}</span>}

        <label htmlFor="">Ataque</label>
        <input
          className={error.ataque ? "danger" : "input-Form"}
          type="number"
          name="ataque"
          value={pokemon.ataque}
          onBlur={(e) => validate(e.target.name)}
          onChange={onInputChange}
        />
        {!error.ataque ? null : (
          <span className="spanAlert">{error.ataque}</span>
        )}

        <label htmlFor="">Defensa:</label>
        <input
          type="number"
          name="defensa"
          value={pokemon.defensa}
          onChange={onInputChange}
        />

        <label htmlFor="">Velocidad:</label>
        <input
          type="number"
          name="velocidad"
          value={pokemon.velocidad}
          onChange={onInputChange}
        />

        <label htmlFor="">Altura:</label>
        <input
          type="number"
          name="altura"
          value={pokemon.altura}
          onChange={onInputChange}
        />

        <label htmlFor="">Peso:</label>
        <input
          type="number"
          name="peso"
          value={pokemon.peso}
          onChange={onInputChange}
        />

        <label htmlFor="">Imagen:</label>
        <input
          type="file"
          name="imagen"
          value={pokemon.imagen}
          onChange={onInputChange}
        />

        <label htmlFor="">Tipos:</label>
        <select name="tipo" id="" onChange={onInputTypes}>
          {tipo.map((el) => {
            return <option value={el.name}>{el.name} </option>;
          })}
        </select>

        <input type="submit" onClick={(e) => validate(e.target.name)} />
      </form>
    </section>
  );
};

export default Forms;
