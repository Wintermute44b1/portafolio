import React from 'react'
import { NavLink } from 'react-router-dom'

const PublicNavbar = () => {
  return (
<nav className="navbar is-transparent">
  <div className="navbar-brand">
    <a className="navbar-item"  NavLink to="/Principal">
      <img src="src/assets/images/omar_title.png" alt="Bulma: a modern CSS framework based on Flexbox" width={112} height={28} />
    </a>
    <div className="navbar-burger" data-target="navbarExampleTransparentExample">
      <span />
      <span />
      <span />
    </div>
  </div>
  <div id="navbarExampleTransparentExample" className="navbar-menu">
    <div className="navbar-start">
      <a className="navbar-item" NavLink to="/Me">
        Home
      </a>
      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link" href="https://bulma.io/documentation/overview/start/">
          Docs
        </a>
        <div className="navbar-dropdown is-boxed">
          <a className="navbar-item" href="https://bulma.io/documentation/overview/start/">
            Overview
          </a>
          <a className="navbar-item" href="https://bulma.io/documentation/overview/modifiers/">
            Modifiers
          </a>
          <a className="navbar-item" href="https://bulma.io/documentation/columns/basics/">
            Columns
          </a>
          <a className="navbar-item" href="https://bulma.io/documentation/layout/container/">
            Layout
          </a>
          <a className="navbar-item" href="https://bulma.io/documentation/form/general/">
            Form
          </a>
          <hr className="navbar-divider" />
          <a className="navbar-item" href="https://bulma.io/documentation/elements/box/">
            Elements
          </a>
          <a className="navbar-item is-active" href="https://bulma.io/documentation/components/breadcrumb/">
            Components
          </a>
        </div>
      </div>
    </div>
    <div className="navbar-end">
    </div>
  </div>
</nav>

  )
}

export default PublicNavbar