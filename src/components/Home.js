import React from 'react'
import Layoutpage from '../layout/Layoutpage'
import Homecarousel from '../PAGES/carousel/Homecarousel'
import Homecards from '../PAGES/CARDS/Homecards'

const Home = () => {
  return (
    <Layoutpage>
        <Homecarousel/>
        <Homecards/>
    </Layoutpage>
  )
}

export default Home
