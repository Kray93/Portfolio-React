import { React } from "react";
import headshot from "../../assets/images/headshot.jpeg"
import "./style.css"

function AboutCard() {
    return (
        <div className="container bg-light">
            <header className="row-4">
                <h1>About Me</h1>
            </header>
            <hr className="line-break"/>
            <section className="row">
                <section className="col-lg-12">
                    <img src={headshot} className="img-fluid" alt="Responsive image"/>
                    <p>
                        I am an aspiring full stack web developer currently enrolled in the Web Development Boot Camp at University of Washington. Combining my background in the manufacturing industry with my newfound skills in JavaScript, jQuery, HTML, and CSS, I want to create innovative and engaging applications that provide a high-quality user experience with lightweight and efficient deployments. I am a highly motivated self-starter with a proven track record in fast paced, team-focused environments. I am constantly seeking to leverage my keen communication abilities to take on new challenges while learning and developing new skill sets.  
                    </p>
                </section>
            </section>
    </div>
    )
}
export default AboutCard;