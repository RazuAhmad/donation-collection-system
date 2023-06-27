import React from 'react'
import AllCards from '../AllCards/AllCards'
import CarouselContainer from '../CarouselContainer/CarouselContainer'
import AboutUs from '../AboutUs/AboutUs'

function Home() {
  return (
    <div>
      <CarouselContainer/>
      <AllCards/>
      <AboutUs/>
    </div>
  )
}

export default Home