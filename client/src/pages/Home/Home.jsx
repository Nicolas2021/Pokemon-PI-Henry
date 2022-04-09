import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { getAllPokemons, getById } from "../../redux/actions/pokemonAction";
import { NavBar } from "../../components/NavBar/NavBar";
import { Buttons } from "../../components/Buttons/Buttons";
import { Paginado } from "../../components/Paginado/Paginado";
import { Card } from "../../components/Cards/Card";
import { Loading } from "../../components/Loading/Loading";
import { Modal } from "../../components/Modal/Modal";

import "./Home.css";
//-------------------------------------
//Handlers

//-------------------------------------
const Home = () => {
  const pokemons = useSelector((state) => state.pokemons);
  const loading = useSelector((state) => state.loading);
  const pokemonUnic = useSelector((state) => state.id);
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  //-------------------------------------
  useEffect(() => {
    dispatch(getAllPokemons());
  }, [dispatch]);

  //-------------------------------------
  const filteredPokemons = pokemons.slice(currentPage, currentPage + 8);
  const previous = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 8);
    }
  };
  const next = () => {
    if (pokemons.length > currentPage + 8) {
      setCurrentPage(currentPage + 8);
    }
  };
  //-------------------------------------

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  //-------------------------------------

  return (
    <div className="background__container">
      <header>
        <NavBar />
        <Buttons />
      </header>

      <main>
        <Paginado next={next} previous={previous} />
        {isOpen && <Modal closeModal={closeModal} pokemons={pokemonUnic} />}
        <div className="cards__container">
          {loading && <Loading />}
          {filteredPokemons.map((pokemon, item) => {
            return (
              <Card
                openModal={openModal}
                key={item}
                id={pokemon.id}
                fuerza={pokemon.fuerza}
                nombre={pokemon.nombre}
                img={pokemon.img}
                tipos={pokemon.tipos}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Home;
