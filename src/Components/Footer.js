import React from 'react'

import facebook from '../facebook.png'
import tripadvisor from '../tripadvisor.png'
import foursquare from '../foursquare.png'
import yelp from '../yelp.png'


function Footer() {
  return (
    <div className='footer-container'>
      <footer>
        <div className="footer-legal">
          <p>Willy Burger, Inc. Copyright 2013. <a href="#">Privacy Policy</a>&nbsp;&nbsp;We have welcomed <script language="Javascript" src="http://www.willy-burger.com/counter.php?page=site"></script>195988 visitors since 03/17/2014.</p>
        </div>
        <div className="footer-social">
          <a href="https://www.facebook.com/pages/Willy-Burger/247444148601519" target="_blank">
            <img src={facebook} alt="facebook" />
          </a>
          <a href="http://www.tripadvisor.com/Restaurant_Review-g60737-d2279092-Reviews-Willy_Burger-Beaumont_Texas.html" target="_blank">
            <img src={tripadvisor} alt="tripadvisor" />
          </a>
          <a href="http://www.yelp.com/biz/willy-burger-beaumont" target="_blank">
            <img src={yelp} alt="yelp" />
          </a>
          <a href="https://foursquare.com/v/willy-burger/4e2c8301c65bcaf4003a29ee" target="_blank">
            <img src={foursquare} alt="foursquare" />
          </a>
        </div>
      </footer>
    </div>
  )
}


export default Footer