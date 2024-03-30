import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import NotFound from './pages/NotFound'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <div className='w-100vw min-h-screen relative overflow-x-hidden overflow-y-auto flex flex-col'>
      <div>
        <NavBar/>
      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default App
