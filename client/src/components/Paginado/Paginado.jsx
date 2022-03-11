import React from "react";
import leftArrow from "./leftarrow.png";
import rightArrow from "./rightarrow.png";
import "./Paginado.css";

export const Paginado = ({ next, previous }) => {
  return (
    <div className="paginado__container">
      <div className="boxes__container"></div>
      <div className="bordeado__container">
        <img onClick={previous} className="arrow" src={leftArrow} alt="" />
        <p>--------------------------------------</p>
        <img onClick={next} className="arrow" src={rightArrow} alt="" />
      </div>
    </div>
  );
};
