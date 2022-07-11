import React from "react";
import "./intro.css";


const Intro= () => {
    return(
        <section className="Intro-main eEjAsd"> 
        <div className="Intro-img">
            <img src="/img/Ganesh_Hemanth_sq.jpg" alt="Ganesh Hemanth Image" className="My-image"></img>
            </div> 
        <div>      
        <div className="Intro">
            <h1>Hi, my name is</h1>
            <h2 className="big-heading">Ganesh Hemanth</h2>
            <h3 className="big-heading">I build things for the web.</h3>
            <p>I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Humantic AI.</p></div>
        </div>
        </section>

    )
}

export default Intro;