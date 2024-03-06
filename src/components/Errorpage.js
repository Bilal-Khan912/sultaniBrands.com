import React from 'react'
import Layoutpage from '../layout/Layoutpage'

const Errorpage = () => {
  return (
    <Layoutpage>
      <h1>Error 404 - Page not found</h1>
      <h3>Something went wrong</h3>
      <button className='btn btn-dark btn-lg'>Go to Home Page</button>
    </Layoutpage>
  )
}

export default Errorpage
