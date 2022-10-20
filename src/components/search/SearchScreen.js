import React, { useMemo } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
//import { queryString } from 'query-string'

import { useForm } from '../../hooks/useForm'
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { HeroCard } from '../hero/HeroCard';

export const SearchScreen = () => {

  const navigate = useNavigate()
  const location = useLocation()

  const queryString = require('query-string')

  const { q = '' } = queryString.parse(location.search)

  const [ formValues, handleInputChange ] = useForm({
    searchText: q,
  })

  const { searchText } = formValues;

  const heroesFileted = useMemo( () => getHeroesByName(q), [q])

  const handleSearch = (e) => {
    e.preventDefault()
    navigate(`?q=${ searchText }`)
  }

  return (
    <>
        <h1>Búqueda por: { searchText }</h1>
        <hr />

        <div className='row'>
          <div className='col-md-5'>
            <h4>Buscar</h4>
            <hr />
            <form onSubmit={ handleSearch }>
              <input 
                type="text"
                placeholder="Buscar un héroe"
                className='form-control form-label'
                name='searchText'
                autoComplete='off'
                value={ searchText }
                onChange={ handleInputChange }
              />
              <button type='submit' className='btn btn-success p-3 px-3 mt-1'>
                Buscar...
              </button>
            </form>
          </div>

          <div className='col-md-7'>
            <h4><b>{ searchText }</b> encontrado:</h4>
            <hr/>

            {
              (q === '')
                ? <div className='alert alert-info'> Escribe algo para: Buscar un héroe!</div>
                : ( heroesFileted.length === 0 )
                  && <div className='alert alert-danger'>No hay resultados para: { q }</div>
            }
            {
              heroesFileted.map(hero => (
                <HeroCard 
                  key={ hero.id }
                  { ...hero }
                />
              ))
            }

          </div>

        </div>
    </>
  )
}
