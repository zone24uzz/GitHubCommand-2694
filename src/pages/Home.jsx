import React from 'react'
import HomeHero from '../components/HomeHero'
import HomeInfo from '../components/HomeInfo'
import HomeSlider from '../components/HomeSlider'
import HomeCards from '../components/HomeCards'
import Services from '../components/Services'
import Categories from '../components/Categories'
import Footer from '../components/Footer'



const Home = () => {
  return (
    <div>
      <HomeHero />
      <HomeInfo />
      <HomeSlider />
      <HomeCards />
      <Services />
      <Categories />
      <Footer />
    </div>
  )
}

export default Home