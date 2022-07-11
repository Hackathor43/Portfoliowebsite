import React from "react";
import "./footer.css"

const Footer= () => {
    return(
        <section className="Footer-main">
            <div className="Footer-social">
                <div>
                    <a href="https://www.linkedin.com/in/ganesh-hemanth-5a78a0138/" target="_blank" rel="noreferrer">
                    <img className="Footer-img" src='./img/linkedin.svg' alt="LinkedIn Logo"></img>
                    </a>
                </div>
                <div>
                <a href="https://github.com/Hackathor43" target="_blank" rel="noreferrer">
                    <img className="Footer-img" src='./img/github.svg' alt="Github Logo"></img>
                    </a>
                </div>
                <div>
                <a href="https://twitter.com/ghemanth43" target="_blank" rel="noreferrer"> 
                    <img className="Footer-img" src='./img/twitter.svg' alt="Twitter Logo"></img>
                    </a>
                </div>
            </div>
            <div className="Footer-resume">
            <a href="/Ganesh_Hemanth_resume.pdf" rel="noopener noreferrer" target="_blank" title="Ganesh Resume"><button class="resume-button">Resume</button></a>
            </div>
        </section>

    )
}

export default Footer;