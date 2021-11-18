import React from "react";
import skill from "../images/skills.svg"
import "./skills.css"

export default function Skills (){
    return(
        <div className="skills">
            <div className="skillsImage">
                <img src={skill} className="dragonskills"></img>
            </div>
            <div className="skillsBar">

            </div>
            
        </div>
    );
}