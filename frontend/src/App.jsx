import React from 'react'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import AddRestaurant from './components/AddRestaurant'
import Error404 from './components/Error404'
import HomePage from './components/HomePage'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/partner-with-us' element={<AddRestaurant />} />
          <Route path='/:city' element={<HomePage />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App