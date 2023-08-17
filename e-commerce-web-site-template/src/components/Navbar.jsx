import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { SiteContext } from '../context/SiteContext'
import ThemeIcons from './ThemeIcons'

const Navbar = () => {
  const {user, handleLogout} = useContext(SiteContext)

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary mb-3">
        <div className="container">
          <Link className="navbar-brand" to={'/'}>R-Store</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to={"/"} > Home </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/products"} > Products </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/about"} > About </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={'/contact'} > Contact </NavLink>
              </li>
              {
                user ? 
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={'/fav'} > Favorites </NavLink>
                  </li> 
                  <li>
                    <button className="nav-link" onClick={handleLogout} > {`Logout (${user.name})`} </button>
                  </li>
                </>
                :
                <li className="nav-item">
                  <NavLink className="nav-link" to={'/login'} > Login </NavLink>
                </li>
              }
              <li className="nav-item ms-auto">
                <ThemeIcons />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar