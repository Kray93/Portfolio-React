import React from "react"
import "./style.css"

function Input() {
    return (
        <>
        <section className="form-group">
        <label>Name</label>
        <input type="text" className="form-control" id="name1" aria-describedby="emailHelp"
            placeholder="Name"></input>
    </section>
    <section className="form-group">
        <label>Email</label>
        <input type="email" className="form-control" id="email1" placeholder="Email"></input>
    </section>
    <section className="form-group">
        <label>Message</label>
        <textarea className="form-control" id="message1" placeholder="Message" rows="3"></textarea>
    </section> 
    </>
    )
}
export default Input;