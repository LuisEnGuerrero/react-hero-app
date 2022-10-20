

import { heroes } from '../data/heroes'

export const getHeroesByPublisher = ( publisher ) => {

  const validPublishers = ['DC Comics', 'Marvel Comics']
  if( !validPublishers.includes( publisher )) {
    throw new Error(`Error! ${publisher}: no es un publisher valido!`)
  }

  return (
    heroes.filter( hero => hero.publisher === publisher )
  )
}
