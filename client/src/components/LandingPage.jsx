import React from "react";
import '../styles/LandingPage.css'
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return(
        <div className="Background">
            <div className="ContainerInfo">
                <h1>Bienvenidos</h1>
                <Link to='/home'>
                    <button>press here</button>
                </Link>
            </div>
        </div>
        )
}

export default LandingPage;