import React from "react";
import "./Projects.css"

const Projects= () => {
    return(
        <section className="Project-main eEjAsd">        
        <div className="Project">
            <h1>Projects</h1>
            <h2 className="big-heading">Brief about some cool projects i have worked on</h2>
            <div className="Project-cards">
                <div className="Project-box-card">
                    <div className="box-left">
                    <h1>Dictionary Word Hunt</h1>
                    <h2>React Web Application</h2>
                    </div>
                    <div className="box-right">
                    <p>A ReactJs based web application which gives meaning and synonyms for words in 12 different languages.Used Dictionary API to get the meanings.</p>
                    </div>
                </div>  
                <div className="Project-box-card">
                    <div className="box-left">
                    <h1>Local Storage DB</h1>
                    <h2>Node Package</h2>
                    </div>
                    <div className="box-right">
                    <p>LSDB is a open source project which i have contributed.It uses local storage to act as a db so we can do CRUD operations using queries.</p>
                    </div>
                </div>  
                <div className="Project-box-card">
                    <div className="box-left">
                    <h1>Smart Irrigation System</h1>
                    <h2>Arduino Project</h2>
                    </div>
                    <div className="box-right">
                    <p>A smart process which analyzes different factors and update the farmer steps to be taken.Been to finals in Texas Instruments hackathon</p>
                    </div>
                </div>  
                <div className="Project-box-card">
                    <div className="box-left">
                    <h1>Dual Axis Solar panel</h1>
                    <h2>Arduino Project</h2>
                    </div>
                    <div className="box-right">
                    <p>A smart panel which moves itself in dual axis to increase the amount of light falling on the panels.Recieved best appreciation in the environmental project challenge.</p>
                    </div>
                </div>  
                <div className="Project-box-card">
                    <div className="box-left">
                    <h1>Miscellaneous</h1>
                    <h2>Small other projects</h2>
                    </div>
                    <div className="box-right">
                    <p>Have been working on some other small projects will update them to this project section in future.Have made some handfull apps in Android but not very big ones.</p>
                    </div>
                </div>  

            </div>
        </div>
        </section>

    )
}

export default Projects;