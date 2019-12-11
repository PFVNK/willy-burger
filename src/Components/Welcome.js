import React from 'react'

import tripadvisorexcellence from '../tripadvisorwhite.png'
import airstream from '../airstream-banner.png'

function Welcome() {
  return (
    <div className='welcome-container'>
      <div className='welcome-message'>
        <p>
          <h1>Welcome!</h1>
          <p>At Willy Burger, we are direct and to the point. We do things differently than the other 99% of “so-called” hamburger joints. Our hamburgers are made from USDA Certified Angus Beef. We grind our meat every-single day in our open-concept kitchen….for all to see, we have NOTHING to hide!! We begin with a 60 pound side of beef, strip it and grind it fresh every morning. Then, we hand-form our fresh patties and cook ‘em on an old-school flat top griddle. We use “pillow soft” buns which are toasted on the grill next to your burger. Amongst many other burger toppings, we fry our fresh, thick-cut bacon and then we grill our onions & jalapenos in the bacon grease…..heck yeah!! Our onion rings are “Cadillac”, the best of the best!!.....hand-dipped and cooked per order directly in front of you!! We have old-fashion soft serve ice cream, malts & shakes…..yummy yummy for yo tummy!!!</p>

          <p>We offer several burger alternatives including fresh grilled tuna, fresh grilled chicken, and grilled Portobello mushroom/veggie burgers. Glutten free buns are also available.</p>
          Willy Burger is an authentic hamburger operation…..complete with bar stools overlooking the kitchen and an amazing vintage neon sign lighting up the outside parking lot.
          <p>Come see us, we the “real deal”…….ummmmhmmm.</p>
          <h5>Peace, Willy</h5>
        </p>
        <img src={airstream} alt="rent the airstream" />
      </div>
      <div className='welcome-social'>
        <img src={tripadvisorexcellence} alt="trip advisor excellence award" />
        <iframe src="//www.facebook.com/plugins/likebox.php?href=https%3A%2F%2Fwww.facebook.com%2Fpages%2FWilly-Burger%2F247444148601519&amp;width=292&amp;height=590&amp;colorscheme=light&amp;show_faces=true&amp;header=true&amp;stream=true&amp;show_border=true" scrolling="no" style={{ overflow: 'hidden' }} allowtransparency="true" frameborder="0"></iframe>
      </div>
    </div>
  )
}



export default Welcome