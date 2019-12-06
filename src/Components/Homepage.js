import React from 'react'

import Navigation from './Navigation'
import Banner from './Banner'

import '../App.css'

function Homepage() {
  return (
    <div className='hompage-container'>
      <Navigation />
      <Banner />
    </div>
  )
}


export default Homepage