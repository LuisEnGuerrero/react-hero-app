import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard'

export const HeroList = ({ publisher }) => {

    const heroes = useMemo( () => getHeroesByPublisher( publisher ), [ publisher ])
  return (
    <>
        <h2>Lista de Heroes - { publisher }</h2>
        <hr />
        <div className='row row-cols-1 row-cols-md-3 g-3 animate__animated animate__pulse'>
            {
                heroes.map( hero => (
                    <HeroCard key={ hero.id } { ...hero } />
                ))
            }
        </div>
    </>
  )
}
