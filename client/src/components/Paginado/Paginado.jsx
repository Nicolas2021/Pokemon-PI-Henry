import React from "react";
import { useDispatch } from "react-redux";
import ReactPaginate from "react-paginate";
import "./Paginado.css";
import {
  getAllPokemons,
  setearEstado,
  setearPokemons,
} from "../../redux/actions/pokemonAction";

export const Paginado = ({ changePage, pageCount }) => {
  const dispatch = useDispatch();

  function onClickHandle() {
    dispatch(setearPokemons());
    dispatch(setearEstado(true));
    dispatch(getAllPokemons());
  }

  return (
    <div className="paginado__container">
      <div className="boxes__container">
        <ReactPaginate
          previousLabel={"Prev"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"pagination_btn"}
          previousLinkClassName={"previous_btn"}
          nextLinkClassName={"next_btn"}
          disabledClassName={"pagination_disabled"}
          activeClassName={"pagination_active"}
        />
      </div>

      <div className="bordeado__container">
        <button onClick={onClickHandle} className="boton">
          Reload
        </button>
        {/* <img onClick={previous} className="arrow" src={leftArrow} alt="" />
        <p>--------------------------------------</p>
        <img onClick={next} className="arrow" src={rightArrow} alt="" /> */}
      </div>
    </div>
  );
};
