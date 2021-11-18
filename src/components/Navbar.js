import myself from "../images/insta.jpg"
import "./Navbar.css";

export default function Navbar (){
    return(
        <div className="Navbar">
            <div className="thumbnail">
                <div className="myselfdiv">
            <text className="name">Hackathor</text>
            </div>
            </div>
            <div className="listofpages">
            <ul className="ullist">
                <div className="nav">Skills</div>
                <div className="nav">Projects</div>
                <div className="nav">Contact Me</div>
            </ul>
            </div>
            
        </div>
    );
}