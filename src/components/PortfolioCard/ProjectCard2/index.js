import React from "react"
import "./style.css"
import image from "../../../assets/images/PokeBatEx.png"

function ProjectCard2() {
    return (
        <>
         <div className="card">
                    <img src={image} className="card-img-top" alt="PokeBatEx"/>
                    <div className="card-body">
                      <h5 className="card-title">PokeBattleEx</h5>
                      <p className="card-text">This app demonstrates the battle function of Pokemon. you will learn Pokemon names as well as typing!</p>
                      <a href="https://github.com/Tyrannofloresrex/PokeBatEx/blob/development/README.md"  target="_blank" className="btn btn-secondary">More Info</a>
                    </div>
                  </div>
                  <hr className="line-break"/>
        </>
    );
};
export default ProjectCard2;