import React from "react";
import "./Experience.css"

const Experience= () => {
    return(
        <section className="Experience-main eEjAsd">        
        <div className="Experience">
            <h1>Professional Experience</h1>
            <h2 className="big-heading">Companies i have worked with</h2>
           <div className="Experience-cards">
           <hr></hr>
            <div className="left">
                <h1>Humantic AI</h1>
                <h2>Full Stack Developer</h2>
                <p>Worked on backend monitoring system,company website, chrome extension and sales dashboard.Working on backend revamp to scale up the website for millions of users</p>
            </div>
            
           </div>
           <div className="Experience-cards">
           <div className="right">
                <h1>Oracle</h1>
                <h2>Applications Engineer</h2>
                <p>Researched and developed new solutions to increase productivity of Digital Sales Saas Application.<br></br>Written automated testscripts to check the production issues and reduced error rate by 60%</p>
            </div>
            <hr></hr>
        </div>
        <div className="Experience-cards">
           <hr></hr>
            <div className="left">
                <h1>Samsung</h1>
                <h2>Modem Software Developer</h2>
                <p>Worked on NS3 software to create multi sim environment which is used by 3GPP to record radiation values.<br></br>Awarded "Best Intern Software" for exceptional performance.</p>
            </div>
            
           </div>
        </div>
        </section>

    )
}

export default Experience;