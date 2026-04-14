import React from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Brand from './pages/Brand'
import Club from './pages/Club'
import Contact from './pages/Contact'
import Prem from './pages/Prem'

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/brand" element={<Brand />} />
        <Route path="/club" element={<Club />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/prem" element={<Prem />} />
      </Routes>
    </div>
  )
}

export default App