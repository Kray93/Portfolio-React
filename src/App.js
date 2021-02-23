import React from "react"
import Portfolio from "./pages/Portfolio"
import About from "./pages/About"
import Contact from "./pages/Contact"
import { HashRouter as Router, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <div>
      <Route exact path="/" component={About}/>
      <Route exact path="/About" component={About}/>
      <Route path="/Portfolio" component={Portfolio}/>
      <Route exact path="/Contact" component={Contact}/>
      </div>
    </Router>
  )
}

export default App;