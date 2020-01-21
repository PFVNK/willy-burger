import React from 'react'

import gettous from '../find_us_min.png'
import contact from '../contact.png'


function GetToUs() {
  return (
    <div className='gettous-container'>
      <div className='gettous-header'><img src={contact} alt="get to us" /></div>
      <div className='gettous-card'>
        <div className='gettous-map'>
          <h1>Willy Burger #1 - Beaumont</h1>
          <iframe scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Willy+Burger,+Calder+Avenue,+Beaumont,+TX&amp;aq=0&amp;oq=willy&amp;sll=43.084993,-89.40642&amp;sspn=0.405201,0.74295&amp;ie=UTF8&amp;hq=Willy+Burger,&amp;hnear=Calder+Ave,+Beaumont,+Texas&amp;t=m&amp;ll=30.083169,-94.155021&amp;spn=0.012997,0.026608&amp;z=15&amp;iwloc=A&amp;output=embed" width="620" height="350" frameborder="0"></iframe>
        </div>
        <div className='gettous-info'>
          <h2>Get To Us</h2>
          <p>You can visit us at our location at the following address.</p>
          <h3>5535 Calder Ave
            Beaumont, TX ‎</h3>
          <p>Order ahead of time or reach us by phone:</p>
          <h3>(409) 892-3400</h3>
          <div className='gettous-facebook'>
            <a href="https://www.facebook.com/willyburger1beaumont/">Willy Burger #1 - Beaumont</a>
            <a href="https://www.facebook.com/willyburger1beaumont/">{"\n"}<img src={gettous}></img></a>
          </div>
        </div>
      </div>
      <div className='gettous-card'>
        <div className='gettous-map'>
          <h1>Willy Burger #2 - Katy</h1>
          <iframe scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d865.6824795962012!2d-95.83040057076157!3d29.7854501628072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8641243a29fea215%3A0x5ab8c235d4020db3!2s6191+Hwy+Blvd%2C+101%2C+Katy%2C+TX+77494!5e0!3m2!1sen!2sus!4v1469569485167&amp;z=17&amp;iwloc=A&amp;output=embed" width="620" height="350" frameborder="0"></iframe>
        </div>
        <div className='gettous-info'>
          <h2>"Now Open"</h2>
          <p>You can visit us at our location at the following address.</p>
          <h3>6191 Hwy Blvd., #101
              Katy, TX</h3>
          <p>Order ahead of time or reach us by phone:</p>
          <h3>(832) 437-4566</h3>
          <div className='gettous-facebook'>
            <a href="https://www.facebook.com/willyburger1beaumont/">Willy Burger #2 - Katy</a>
            <a href="https://www.facebook.com/willyburger1beaumont/"><img src={gettous}></img></a>
          </div>
        </div>
      </div>
    </div>
  )
}



export default GetToUs