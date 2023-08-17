import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import ThemeIcons from './ThemeIcons'

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <Link to={'/'} className="navbar-brand" href="#">Context API</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <NavLink to={'/'} className="nav-link" aria-current="page" href="#">Home</NavLink>
            <NavLink to={'/about'} className="nav-link" href="#">About</NavLink>
            <NavLink to={'/contact'} className="nav-link" href="#">Pricing</NavLink>
            <ThemeIcons />
          </div>
        </div>
      </div>
    </nav>
  )
}
