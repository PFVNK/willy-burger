import React from 'react'

import willyburger from '../willyburgerburger.png'
import willyburgerlogo from '../willyburgerlogo.png'
import willyburgeropen from '../WB2KatyOpen.gif'

function Banner() {
  return (
    <div className='banner-container'>
      <div className='banner-banner'>
        <img src={willyburger} alt="" />
        <img src={willyburgeropen} alt="" />
        <img src={willyburgerlogo} alt="" />
      </div>
    </div>
  )
}


export default Banner