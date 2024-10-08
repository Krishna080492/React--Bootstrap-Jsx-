import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <>
      {/* Start Header/Navigation */}
      <nav className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark" arial-label="Furni navigation bar">
        <div className="container">
          <Link className="navbar-brand" href="index.html">Furni<span>.</span></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarsFurni">
            <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
              <li className="nav-item active">
                <NavLink className="nav-link" href="index.html">Home</NavLink>
              </li>
              <li><NavLink className="nav-link" href="shop.html">Shop</NavLink> </li>
              <li><NavLink className="nav-link" href="about.html">About us</NavLink> </li>
              <li><NavLink className="nav-link" href="services.html">Services</NavLink> </li>
              <li><NavLink className="nav-link" href="blog.html">Blog</NavLink> </li>
              <li><NavLink className="nav-link" href="contact.html">Contact us</NavLink> </li>
            </ul>
            <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
              <li><NavLink className="nav-link" href="#"><img src="images/user.svg" /></NavLink> </li>
              <li><NavLink className="nav-link" href="cart.html"><img src="images/cart.svg" /></NavLink> </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* End Header/Navigation */}
    </>
  )
}

export default Header