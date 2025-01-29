import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
        <h1 className="title">Suivi des candidatures</h1>
        <div className="links">
            <Link className="homeLink" to="/">Accueil</Link>
            <Link className="aboutLink" to="/about">À propos</Link>
        </div>
    </nav>
  )
}

export default Navbar;
