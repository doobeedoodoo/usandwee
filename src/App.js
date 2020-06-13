import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"

import Header from "./components/Header"
import Home from "./components/Home"
import Services from "./components/Services"
import About from "./components/About"
import Gallery from "./components/Gallery"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/services" exact>
            <Services />
          </Route>
          <Route path="/about-us" exact>
            <About />
          </Route>
          <Route path="/gallery" exact>
            <Gallery />
          </Route>
          <Route path="/contact-us" exact>
            <Contact />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
