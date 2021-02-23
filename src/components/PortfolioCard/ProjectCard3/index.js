import React from "react"
import "./style.css"
import image from "../../../assets/images/planner.png"

function ProjectCard3() {
    return (
        <>
         <div className="card">
                    <img src={image} className="card-img-top" alt="Day Planner"/>
                    <div className="card-body">
                      <h5 className="card-title">Day Planner</h5>
                      <p className="card-text">Keep your day organized with this planner!</p>
                      <a href="https://github.com/Kray93/hmwk05/blob/main/README.md"  target="_blank" className="btn btn-secondary">More Info</a>
                    </div>
                  </div>
                  <hr className="line-break"/>
        </>
    );
};
export default ProjectCard3;