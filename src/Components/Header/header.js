import React from "react";
import "./header.css"

const Header= () => {
    return(
        <section className="navbar-main">
            <div className="navbar-head">
                <h3>Hackathor</h3>
                </div>        
        <div className="navbar">
            <div className="navbar-items">
                <a href="/" className="navbar-a hover-underline-animation">Home</a>
            </div>
            <div className="navbar-items">
                <a href="/Experience" className="navbar-a hover-underline-animation">Experience</a>
            </div>
            <div className="navbar-items">
                <a href="/Skills" className="navbar-a hover-underline-animation">Skills</a>
            </div>
            <div className="navbar-items">
                <a href="/Projects" className="navbar-a hover-underline-animation">Projects</a>
            </div>
            <div className="navbar-items">
                <a href="/About" className="navbar-a hover-underline-animation">About</a>
            </div>
        </div>
        </section>

    )
}

export default Header;