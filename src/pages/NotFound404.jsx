import React from 'react';
import { Link } from "react-router-dom";
import '../css/NotFound404.css';
import NavLink from "../Components/NavLink.jsx";

// Page used for each non repertoried pages
function NotFound404() {
    return (
        <div className="notFound404">
            <h1>Désolés</h1>
            <p>Cette page n'existe pas.</p>
            <NavLink to="/" content="Retourner à l'accueil..." id="notFound404Link"/>
        </div>
    );
}

export default NotFound404;
