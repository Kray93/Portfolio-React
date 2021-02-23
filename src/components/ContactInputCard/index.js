import React from "react"
import Buttons from "./Buttons"
import Input from "./Input";
import "./style.css"

function ContactInputCard() {
    return (
         <main className="container bg-light">
        <header className="row">
            <h1>Contact</h1>
        </header>
        <hr className="line-break"/>
        <section className="row main">
            <section className="col-lg-4">
                <form>
                    <Input/>
                    <Buttons/>
                </form>
            </section>
        </section>
    </main>
    );
};
export default ContactInputCard;