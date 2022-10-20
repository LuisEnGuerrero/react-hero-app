import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Navbar } from '../components/ui/Navbar'
import { DcScreen } from '../components/dc/DcScreen'
import { LoginScreen } from '../components/login/LoginScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { SearchScreen } from '../components/search/SearchScreen'
import { HeroScreen } from '../components/hero/HeroScreen'

export const DashboardRouter = () => {
  return (
    <>
        <Navbar />
        <div className='container mt-4'>
          <Routes>
              <Route path='/' element={<MarvelScreen />} />
              <Route path='/marvel' element={<MarvelScreen />} />
              <Route path='/dc' element={<DcScreen />} />
              <Route path='/hero/:id' element={<HeroScreen />} />
              <Route path='/search' element={<SearchScreen />} />
              <Route path='/login' element={<LoginScreen />} />
          </Routes>
        </div>
    </>

  )
}
