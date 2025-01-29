import React from 'react';
import { Link } from "react-router-dom";
import '../css/NotFound404.css';

function NotFound404() {
    return (
        <div className="notFound404">
            <h1>Désolés</h1>
            <p>Cette page n'existe pas.</p>
            <Link to="/">Retourner à l'accueil...</Link>
        </div>
    );
}

export default NotFound404;
