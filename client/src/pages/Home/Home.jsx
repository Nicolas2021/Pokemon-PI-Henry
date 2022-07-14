import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { getAllPokemons } from "../../redux/actions/pokemonAction";
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
  const pageCount = Math.ceil(pokemons.length / 8);
  //-------------------------------------
  useEffect(() => {
    dispatch(getAllPokemons());
  }, [dispatch]);

  //-------------------------------------
  const pokemonPerPage = 8;
  const pagesVisited = currentPage * pokemonPerPage;
  const filteredPokemons = pokemons.slice(pagesVisited, pagesVisited + pokemonPerPage);
  const changePage = ({selected}) => {
    setCurrentPage(selected);
  }
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
        <Paginado changePage={changePage} pageCount={pageCount} />
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
