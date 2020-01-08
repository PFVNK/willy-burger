import React from 'react'

import willyburger from '../willyburgerburger.png'
import willyburgerlogo from '../willyburgerlogo.png'
import willyburgeropen from '../WB2KatyOpen.gif'

function Banner() {
  return (
    <div className='banner-container'>
      <div className='banner-banner'>
        <img src={willyburger} alt="willy burger and onion rings" />
        <img src={willyburgeropen} alt="willy burger now open" />
        <img src={willyburgerlogo} alt="willy burger sign" />
      </div>
    </div>
  )
}


export default Banner