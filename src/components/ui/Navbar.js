import React, { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types'

export const Navbar = () => {

  const { user, dispatch } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch({ type: types.logout })
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
                <NavLink className="nav-item nav-link pe-4" to="/marvel">Marvel</NavLink>
                <NavLink className="nav-item nav-link pe-4" to="/dc">Dc</NavLink>
                <NavLink className="nav-item nav-link btn btn-outline-secondary mx-2 px-3" to="/search">Buscar</NavLink>
            </div>
            <div className='navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end'>
              <ul className='navbar-nav ml-auto'>
                <span className='nav-item nav-link text-info'>
                  { user.name }
                </span>
                <button className="nav-link btn btn-outline-primary mx-2 mx-2" onClick={ handleLogout }>Cerrar Sesión</button>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
