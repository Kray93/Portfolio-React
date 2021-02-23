import React from "react"
import NavBar from "../../components/NavBar"
import PortfolioCard from "../../components/PortfolioCard"
import Footer from "../../components/Footer"
// import "./style.css"

function Portfolio (){
    return (
        <>
        <NavBar className="active"/>
        <PortfolioCard/>
        <Footer/>
        </>
    );
};
export default Portfolio;