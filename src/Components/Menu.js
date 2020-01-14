import React from 'react'

import willymenu1 from '../willymenu1.png'
import willymenu2 from '../willymenu2.png'
import willymenu10 from '../willymenu1 copy-0-0.png'
import willymenu11 from '../willymenu1 copy-1-0.png'
import willymenu12 from '../willymenu1 copy-2-0.png'
import willymenu20 from '../willymenu2 copy-0-0.png'
import willymenu21 from '../willymenu2 copy-1-0.png'
import willymenu22 from '../willymenu2 copy-2-0.png'

function Menu() {
  return (
    <div className='menu-container'>
      <div className='menu-menu'>
        <img className='menu-item' src={willymenu10} alt="willy burger menu first page" />
        <img className='menu-item' src={willymenu11} alt="willy burger menu first page" />
        <img className='menu-item' src={willymenu12} alt="willy burger menu first page" />
        <img className='menu-item' src={willymenu20} alt="willy burger menu second page" />
        <img className='menu-item' src={willymenu21} alt="willy burger menu second page" />
        <img className='menu-item' src={willymenu22} alt="willy burger menu second page" />
      </div>
    </div>
  )
}


export default Menu