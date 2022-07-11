import React from "react";
import "./Skills.css"

const Skills= () => {
    return(
        <section className="Skills-main eEjAsd">        
        <div className="Skills">
            <h1>Expertise</h1>
            <h2 className="big-heading">Technologies i have worked and have an experience with</h2>
        <div className="Skills-card">
            <div className="box-card">
            <h1>Frontend</h1>
            <p>HTML</p>
            <p>CSS</p>
            <p>Java Script</p>
            <p>ReactJs</p>
            </div>
            <div className="box-card">
            <h1>Backend</h1>
            <p>NodeJs</p>
            <p>PHP</p>
            <p>Java</p>
            </div>
            <div className="box-card">
            <h1>Database</h1>
            <p>MySQL</p>
            <p>MongoDb</p>
            <p>NoSQL</p>
            </div>
            <div className="box-card">
            <h1>Cloud</h1>
            <p>AWS</p>
            <h1>Other Tech</h1>
            <p>Kubernetes</p>
            <p>Docker</p>
            </div>
        </div>
        </div>
        </section>

    )
}

export default Skills;