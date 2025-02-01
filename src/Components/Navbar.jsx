import React from 'react';
import NavLink from "./NavLink.jsx";

//Component used for a navigation bar
function Navbar() {
  return (
    <nav className="navbar">
        <h1 className="title">Suivi des candidatures</h1>
        <div className="links">
            <NavLink to="/" content="Accueil" id="homeLink"/>
            <NavLink to="/about" content="À propos" id="aboutLink"/>
        </div>
    </nav>
  )
}

export default Navbar;
