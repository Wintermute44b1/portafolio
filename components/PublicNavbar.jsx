import React from 'react'
import { NavLink } from 'react-router-dom'

const PublicNavbar = () => {
  return (
<nav className="navbar is-transparent">
  <div className="navbar-brand">
    <a className="navbar-item" NavLink to="/Principal">
      <img src="https://res.cloudinary.com/dsmkpezps/image/upload/v1691896213/portfolio/omar_title_small_hphgm8.png" alt="Hola soy omar!" width={100} height={80} />
    </a>
    <div className="navbar-burger" data-target="navbarExampleTransparentExample">
      <span />
      <span />
      <span />
    </div>
  </div>
  <div id="navbarExampleTransparentExample" className="navbar-menu">
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
    
    <div className="navbar-end">
    </div>
  </div>
</nav>

  )
}

export default PublicNavbar