import React from "react"
import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"
import "./style.css"
import ContactInputCard from "../../components/ContactInputCard";

function Contact (){
    return (
        <>
        <NavBar className="active"/>
        <ContactInputCard/>
        <Footer/>
        </>
    );
};
export default Contact;