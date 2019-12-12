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
          <a href="https://www.facebook.com/pages/Willy-Burger/247444148601519" target="_blank">
            <img src={facebook} alt="facebook" />
          </a>
          <a href="http://www.tripadvisor.com/Restaurant_Review-g60737-d2279092-Reviews-Willy_Burger-Beaumont_Texas.html" target="_blank">
            <img src={tripadvisor} alt="tripadvisor" />
          </a>
          <a href="http://www.yelp.com/biz/willy-burger-beaumont" target="_blank">
            <img src={foursquare} alt="foursquare" />
          </a>
          <a href="https://foursquare.com/v/willy-burger/4e2c8301c65bcaf4003a29ee" target="_blank">
            <img src={yelp} alt="yelp" />
          </a>
        </div>
      </div>
    </div>
  )
}


export default Social