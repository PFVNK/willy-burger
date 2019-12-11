import React from 'react'

import pow from '../POW.png'

export default function Promotion() {
  return (
    <div className='promotion-container'>
      <div className='promotion-image'>
        <img src={pow} alt="willy burger award image" />
      </div>
      <div className='promotion-blurb'>
        <h1>...as seen on "The Texas Bucket List"</h1>
      </div>
      <div className='promotion-video'>
        <div>
          <video className="promotion-video-one" preload="auto" poster="http://www.willy-burger.com/media/TTBL_Episode24.png" controls>
            <source src="http://www.willy-burger.com/media/TTBL_Episode24.mp4" type="video/mp4" />
            <source src="http://www.willy-burger.com/media/TTBL_Episode24.flv" type="video/flv" />
          </video>
          <div className='promotion-video-text'>
            <big>NEW!</big>
            <h4>The Texas Bucket List - Willy Burger</h4>
            <a href="http://thetexasbucketlist.com">The Texas Bucket List</a>
          </div>
        </div>
        <div>
          <video className="promotion-video-two" preload="auto" poster="http://www.willy-burger.com/media/TTBL_Final.png" controls>
            <source src="http://www.willy-burger.com/media/TTBL_Final.mp4" type="video/mp4" />
            <source src="http://www.willy-burger.com/media/TTBL_Final.flv" type="video/flv" />
          </video>
          <div className='promotion-video-text'>
            <big>NEW!</big>
            <h4>The Texas Bucket List - Burger of The Season</h4>
            <a href="http://thetexasbucketlist.com">The Texas Bucket List</a>
          </div>
        </div>

      </div>
    </div>
  )
}
