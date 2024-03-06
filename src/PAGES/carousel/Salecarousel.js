import React from 'react'
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';

function Salecarousel() {
  return (
  <div style={{marginTop:"80px"}} className='container'>
  
  
  <div className='carousel-home mt-3'>
        <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem itemId={1}>
        <img src='https://www.limelight.pk/cdn/shop/collections/Sale-banners.jpg?v=1692615044' className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
         
        </MDBCarouselCaption>
      </MDBCarouselItem>
     
    </MDBCarousel>
    </div>
  <div className='hr'>
      <hr/>
  </div>
  </div>
  )
}

export default Salecarousel