import React from 'react'
import HomeHero from '../components/HomeHero'
import HomeInfo from '../components/HomeInfo'
import HomeSlider from '../components/HomeSlider'
import HomeCards from '../components/HomeCards'



const Home = () => {
  return (
    <div>
      <HomeHero />
      <HomeInfo />
      <HomeSlider />
      <HomeCards />
    </div>
  )
}

export default Home