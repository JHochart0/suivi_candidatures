import React from 'react'
import { Link } from "react-router-dom";

function NavLink(props) {
    const to=props.to;
    const content=props.content;
    const id=props.id;
    return (
        <Link className="navLink" id={id} to={to}>{content}</Link>
    );
}

export default NavLink;
