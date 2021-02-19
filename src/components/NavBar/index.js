import React from "react"
import Portfolio from "../../pages/Portfolio"
import About from "../../pages/About"
import Contact from "../../pages/Contact"

function NavBar() {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-custom">
        <a className="navbar-brand" href={<About/>}>Kevin Willig</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon hamburger"><i className="bi bi-border-width"></i></span>
        </button>
        <section className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href={<About/>}>About</a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href={<Portfolio/>}>Portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={<Contact/>}>Contact</a>
            </li> */}
          </ul>
        </section>
      </nav>
      </>
    )
}
export default NavBar;