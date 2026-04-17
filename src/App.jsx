import React from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Brand from './pages/Brand'
import Club from './pages/Club'
import Contact from './pages/Contact'
import Prem from './pages/Prem'
import BrandMain from './components/BrandMain'
import BrandSection from './components/BrandSection'
import BrandFooter from './components/BrandFooter'

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

      <BrandMain/>
      <BrandSection/>
      <BrandFooter/>
    </div>
  )
}

export default App