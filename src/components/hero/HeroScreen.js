import React, { useMemo } from 'react'
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById'
import { heroImages } from '../../data/heroImages'


export const HeroScreen = () => {

  const { id } = useParams()
  const hero = useMemo( ()=> getHeroById( id ), [ id ])
  const navigate = useNavigate()



  const handleReturn = () => navigate(-1)
  
  if(!hero) {
    return <Navigate to='/' />
  }

  const { superhero, publisher, alter_ego, first_appearance, characters} = hero
  
  return (
    <div className='row mt-5'>
      <div className='col-md-4'>
        <img 
          src={ heroImages(`./${ id }.jpg`) }
          alt={ superhero }
          className='img-thumbnail animate__animated animate__pulse'
        />
      </div>
      <div className='col-md-8 animate__animated animate__pulse'>
        <h2>{ superhero }</h2>        
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'><b>Alter ego:</b> { alter_ego }</li>
          <li className='list-group-item'><b>Publicación:</b> { publisher }</li>
          <li className='list-group-item'><b>Primera Aparición:</b> { first_appearance }</li>
        </ul>
        <h4 className='mt-5'>Personajes:</h4>
        <p>{ characters }</p>

        <button className='btn btn-outline-info p-3 px-4' onClick={handleReturn} >
          Regresar
        </button>
      </div>
    </div>
  )
}
