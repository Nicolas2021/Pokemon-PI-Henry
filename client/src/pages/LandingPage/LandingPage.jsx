import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="background">
      <div className="container__top">
        <h1>Welcome to your Pokedex</h1>
      </div>
      <Link to="/home">
        <div className="control">
          <div className="medios">
            <div className="parteroja"></div>
            <div className="medio"></div>
            <div className="medio2"></div>
          </div>
          <div className="parteblanca"></div>
        </div>
      </Link>
    </div>
  );
};

export default LandingPage;

/*   <Link to="/home">
          <button>press here</button>
        </Link> */
