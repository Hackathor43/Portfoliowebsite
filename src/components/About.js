import React from "react";
import "./About.css"
import dragon from "../images/myself.svg"

export default function About (){
    return(
           <div className="About">
               <div className="aboutImage">
                <img src={dragon} className="dragonWarrior"></img>
               </div>
               <div className="aboutText">
                   <div className="intro">
                       <text className="heading">Hello There !</text>
                       <text className="subheading">Welcome to my Portfolio</text>
               
                </div>
               </div>
           </div>
    );
}