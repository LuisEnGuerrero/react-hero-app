import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {

    const imagePath = '/sol_de_los_pastos.png'

  return (
    <footer className='text-white py-4 bg-dark navbar-expand-md mt-3'>
        <div className='container'>
            <nav className='row'>
                <ul className='col-12 col-md-4 list-unstyled'>
                    <hr/>
                    <li className='font-weight-bold h5 mb-2 text-center'>&copy; Copyright 2022 <strong>LuisEnGuerrero.Co</strong></li>
                    <li className='text-center'>Esta Web-App ha sido desarrollada con React y diseñada con Bootstrap</li>
                </ul>
                <Link to='/' className='col-12 col-md-4 d-flex align-items-center justify-content-center' >
                    <img src={ imagePath } alt='logo' className='mx-2 shadow-lg bg-body border border-2 rounded-circle rotate' height='88'/>
                </Link>
                <ul className='col-12 col-md-4 list-unstyled'>
                    <hr/>
                    <li className='font-weight-bold h5 mb-2 text-center'>Sígueme!</li>
                    <li className='d-flex justify-content-between'>
                        <a className='text-reset' href='https://api.whatsapp.com/send?phone=573208172936' target='_blank' rel="noopener noreferrer"><i className="bi h2 bi-whatsapp"/></a>
                        <a className='text-reset' href='mailto:luisguerrero@misena.edu.co' target='_blank' rel="noopener noreferrer"><i className="bi h2 bi-mailbox2"/></a>
                        <a className='text-reset' href='https://www.linkedin.com/in/luisenguerrero/' target='_blank' rel="noopener noreferrer"><i className="bi h2 bi-linkedin"/></a>
                        <a className='text-reset' href='https://github.com/LuisEnGuerrero' target='_blank' rel="noopener noreferrer"><i className="bi h2 bi-github"/></a>
                        <a className='text-reset' href='https://luisenguerrero.netlify.app/' target='_blank' rel="noopener noreferrer"><i className="bi h2 bi-layout-text-sidebar-reverse"/></a>
                    </li>
                </ul>
            </nav>
        </div>
    </footer>
  )
}
