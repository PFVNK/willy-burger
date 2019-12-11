import React from 'react'

import willymenu1 from '../willymenu1.png'
import willymenu2 from '../willymenu2.png'

function Menu() {
  return (
    <div className='menu-container'>
      <div className='menu-menu1'>
        <img src={willymenu1} alt="willy burger menu first page" />
      </div>
      <div className='menu-menu2'>
        <img src={willymenu2} alt="willy burger menu second page" />
      </div>
    </div>
  )
}


export default Menu