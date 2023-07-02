import React from 'react'
import AllCards from '../AllCards/AllCards'
import CarouselContainer from '../CarouselContainer/CarouselContainer'
import AboutUs from '../AboutUs/AboutUs'
import Volunteer from '../Volunteer/Volunteer'

function Home() {
  return (
    <div>
      <CarouselContainer/>
      <AllCards/>
      <Volunteer/>
      <AboutUs/>
    </div>
  )
}

export default Home