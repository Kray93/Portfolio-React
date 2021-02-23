import React from "react"
import "./style.css"
import { Link } from "react-router-dom"

function NavBar() {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-custom">
        <Link className="navbar-brand" to="/About">Kevin Willig</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon hamburger"><i className="bi bi-border-width"></i></span>
        </button>
        <section className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/About" >About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Portfolio">Portfolio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Contact">Contact</Link>
            </li>
          </ul>
        </section>
      </nav>
      </>
    )
}
export default NavBar;