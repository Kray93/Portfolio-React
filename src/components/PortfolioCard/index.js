import React from "react"
import ProjectCard1 from "./ProjectCard1"
import ProjectCard2 from "./ProjectCard2"
import ProjectCard3 from "./ProjectCard3"
import "./style.css"

function PortfolioCard (){
    return (
        <>
        <section className="container bg-light">
        <header className="row">
            <h1>Portfolio</h1>
        </header>
        <ProjectCard1/>
        <ProjectCard2/>
        <ProjectCard3/>
        </section>
        </>
    );
};
export default PortfolioCard;