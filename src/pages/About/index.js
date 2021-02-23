import React from "react"
import NavBar from "../../components/NavBar"
import AboutCard from "../../components/AboutCard"
import Footer from "../../components/Footer"
import "./style.css"

function About (){
    return (
        <>
        <NavBar className="active"/>
        <AboutCard/>
        <Footer/>
        </>
    );
};
export default About;