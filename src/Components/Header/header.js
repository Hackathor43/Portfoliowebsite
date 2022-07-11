import React from "react";
import "./header.css"
import {Link} from 'react-router-dom';

const Header= () => {
    return(
        <section className="navbar-main">
            <div className="navbar-head">
                <h3>Hackathor</h3>
                </div>        
        <div className="navbar">
            <div className="navbar-items">
                <Link to="/" className="navbar-a hover-underline-animation">Home</Link>
            </div>
            <div className="navbar-items">
                <Link to="/Experience" className="navbar-a hover-underline-animation">Experience</Link>
            </div>
            <div className="navbar-items">
                <Link to="/Skills" className="navbar-a hover-underline-animation">Skills</Link>
            </div>
            <div className="navbar-items">
                <Link to="/Projects" className="navbar-a hover-underline-animation">Projects</Link>
            </div>
            <div className="navbar-items">
                <Link to="/About" className="navbar-a hover-underline-animation">About</Link>
            </div>
        </div>
        </section>

    )
}

export default Header;