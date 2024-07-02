import React from 'react'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AddRestaurant from './pages/AddRestaurant'
import Error404 from './pages/Error404'
import HomePage from './pages/HomePage'
import HomeRestaurants from './pages/HomeRestaurants'
import DeliverCities from './pages/DeliverCities'
import Collections from './pages/Collections'
import RestaurantDetail from './pages/RestaurantDetail'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/:city/:town' element={<HomeRestaurants />} />
          <Route path='/' element={<Home />} />
          <Route path='/partner-with-us' element={<AddRestaurant />} />
          <Route path='/:city' element={<HomePage />} />
          <Route path='/delivery-cities' element={<DeliverCities />} />
          <Route path='/:city/collections' element={<Collections />} />
          <Route path='/:city/:town/:restaurant' element={<RestaurantDetail />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App