import React from 'react'

import facebook from '../facebook.png'
import tripadvisor from '../tripadvisor.png'
import foursquare from '../foursquare.png'
import yelp from '../yelp.png'

function Social() {
  return (
    <div className='social-container'>
      <div className='social-locations-container'>
        <div className='social-locations'>
          <h1>Willy-Burger #1 - Beaumont (409) 892-3400</h1>
          <h1>Willy-Burger #2 - Katy (832) 437-4566</h1>
        </div>
        <div className='social-icons'>
          <img src={facebook} alt="facebook" />
          <img src={tripadvisor} alt="tripadvisor" />
          <img src={foursquare} alt="foursquare" />
          <img src={yelp} alt="yelp" />
        </div>
      </div>
    </div>
  )
}


export default Social