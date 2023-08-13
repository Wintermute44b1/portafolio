import React from 'react'
import { NavLink } from 'react-router-dom'

const PublicNavbar = () => {
  return (
<nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <a className="navbar-item">
    <img src="https://res.cloudinary.com/dsmkpezps/image/upload/v1691896213/portfolio/omar_title_small_hphgm8.png" alt="Hola soy omar!" width={100} height={80} />
    </a>
    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </a>
  </div>
  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
    <NavLink to="/Me"  className= "navbar-item"activeClassName="is-active">
        Me
      </NavLink>
      <NavLink to="/Projects" className= "navbar-item" activeClassName="is-active">
        Projects
      </NavLink>
      <NavLink to="/About"  className= "navbar-item" activeClassName="is-active">
        About
      </NavLink>
      <NavLink to="/Contact" className= "navbar-item" activeClassName="is-active">
        Contact
      </NavLink>
    </div>
  </div>
</nav>

  )
}

export default PublicNavbar