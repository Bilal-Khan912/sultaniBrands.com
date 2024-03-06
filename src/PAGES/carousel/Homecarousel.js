import React from 'react'
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';

function Homecarousel() {
  return (
    <div style={{marginTop:"80px"}} className='container'>   
    <div className='carousel-home mt-3'>
        <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem itemId={1}>
        <img src='./img/slider 1.jpeg' className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
         
        </MDBCarouselCaption>
      </MDBCarouselItem>
     
      <MDBCarouselItem itemId={2}>
        <img src='./img/slider 2.jpeg' className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
          
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={3}>
        <img src='./img/slider 3.jpeg' className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
         
        </MDBCarouselCaption>
      </MDBCarouselItem>
      <MDBCarouselItem itemId={4}>
        <img src='./img/slider 4.jpeg' className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
          
        </MDBCarouselCaption>
      </MDBCarouselItem>
      <MDBCarouselItem itemId={5}>
        <img src='./img/slider 5.jpeg' className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
        
        </MDBCarouselCaption>
      </MDBCarouselItem>
      <MDBCarouselItem itemId={6}>
        <img src='./img/slider 6.jpeg' className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
       
        </MDBCarouselCaption>
      </MDBCarouselItem>
      <MDBCarouselItem itemId={7}>
        <img src='./img/slider 7.jpeg' className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
         
        </MDBCarouselCaption>
      </MDBCarouselItem>
    </MDBCarousel>
    </div>


    </div>
  )
}

export default Homecarousel