import React from "react"
import { Link } from "react-router-dom"

function Header() {
  return (
    <>
      <header role="banner" className="position-absolute">
        <nav className="background-transparent background-transparent-hightlight full-width sticky">
          <div className="s-12 l-2">
            <Link to="/" className="logo">
              usandweee logo here
            </Link>
          </div>
          <div className="top-nav s-12 l-10">
            <p className="nav-text"></p>
            <ul className="right chevron">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/about-us">About Us</Link>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
