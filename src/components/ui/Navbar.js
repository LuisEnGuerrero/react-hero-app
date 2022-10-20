import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

export const Navbar = () => {

  const navigate = useNavigate()

  const handleLogout = () => {
    navigate('/login', { replace: true })
  }
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-darknavbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Heroes App!</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <NavLink className="nav-link" to="/marvel">Marvel</NavLink>
                <NavLink className="nav-link" to="/dc">Dc</NavLink>
                <NavLink className="nav-link" to="/hero">Hero</NavLink>
                <NavLink className="nav-link" to="/search">Buscar</NavLink>
                <button className="nav-link btn" onClick={ handleLogout }>Iniciar Sesión</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}