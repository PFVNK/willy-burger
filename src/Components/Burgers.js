import React from 'react'

import burger1thmb from '../burger_01-thmb.png'
import burger1 from '../burger_01.png'
import burger2thmb from '../burger_02-thmb.png'
import burger2 from '../burger_02.png'
import burger3thmb from '../burger_03-thmb.png'
import burger3 from '../burger_03.png'
import burger4thmb from '../burger_04-thmb.png'
import burger4 from '../burger_04.png'
import burger5thmb from '../burger_05-thmb.png'
import burger5 from '../burger_05.png'
import burger6thmb from '../burger_06-thmb.png'
import burger6 from '../burger_06.png'
import burger7thmb from '../burger_07-thmb.png'
import burger7 from '../burger_07.png'
import burger8thmb from '../burger_08-thmb.png'
import burger8 from '../burger_08.png'
import burger9thmb from '../burger_09-thmb.png'
import burger9 from '../burger_09.png'
import burger10thmb from '../burger_10-thmb.png'
import burger10 from '../burger_10.png'
import burger11thmb from '../burger_11-thmb.png'
import burger11 from '../burger_11.png'
import burger12thmb from '../burger_12-thmb.png'
import burger12 from '../burger_12.png'

function Burgers() {
  return (
    <div className='burger-container'>
      <h1>BURGERS</h1>
      <div className='burger-gallery'>
        <a href={burger1}>
          <img src={burger1thmb} alt="" />
        </a>
        <a href={burger2}>
          <img src={burger2thmb} alt="" />
        </a>
        <a href={burger3}>
          <img src={burger3thmb} alt="" />
        </a>
        <a href={burger4}>
          <img src={burger4thmb} alt="" />
        </a>
        <a href={burger5}>
          <img src={burger5thmb} alt="" />
        </a>
        <a href={burger6}>
          <img src={burger6thmb} alt="" />
        </a>
        <a href={burger7}>
          <img src={burger7thmb} alt="" />
        </a>
        <a href={burger8}>
          <img src={burger8thmb} alt="" />
        </a>
        <a href={burger9}>
          <img src={burger9thmb} alt="" />
        </a>
        <a href={burger10}>
          <img src={burger10thmb} alt="" />
        </a>
        <a href={burger11}>
          <img src={burger11thmb} alt="" />
        </a>
        <a href={burger12}>
          <img src={burger12thmb} alt="" />
        </a>
      </div>
    </div>
  )
}



export default Burgers