import React from 'react'

import Navigation from './Navigation'
import Banner from './Banner'
import Social from './Social'

import '../App.css'

function Homepage() {
  return (
    <div className='hompage-container'>
      <Navigation />
      <Banner />
      <Social />
    </div>
  )
}


export default Homepage