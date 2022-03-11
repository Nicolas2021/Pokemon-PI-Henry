import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { getAllPokemons } from "../../redux/actions/pokemonAction";
import { NavBar } from "../../components/NavBar/NavBar";
import { Buttons } from "../../components/Buttons/Buttons";
import { Paginado } from "../../components/Paginado/Paginado";
import { Card } from "../../components/Cards/Card";
import { Loading } from "../../components/Loading/Loading";

import "./Home.css";
//-------------------------------------
//Handlers

//-------------------------------------
const Home = () => {
  const pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  const [isLoading, setisLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  //-------------------------------------
  useEffect(() => {
    dispatch(getAllPokemons()).then(() => {
      setisLoading(false);
    });
  }, [dispatch]);

  //-------------------------------------
  const filteredPokemons = pokemons.slice(currentPage, currentPage + 8);
  const previous = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 8);
    }
  };
  const next = () => {
    setCurrentPage(currentPage + 8);
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
        <div className="cards__container">
          {isLoading && <Loading />}
          {filteredPokemons.map((pokemon, item) => {
            return (
              <Card
                key={item}
                id={pokemon.id}
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
