import React from 'react'

const Footer = () => {
  return (
    <>
    
<div className="footer">
  <div className="container">		
    <div className="row text-center">						
      <div className="col-lg-12 col-sm-12 col-xs-12">
        <div className="footer_menu">
          <ul>
            <li><a className='menu' href="#">Home</a></li>
            <li><a className='menu' href="#">About</a></li>
            <li><a className='menu' href="#">Service</a></li>
            <li><a className='menu' href="#">Works</a></li>
            <li><a className='menu' href="#">Contact</a></li>
          </ul>
        </div>						
        <div className="footer_copyright">
          <p>© 2021 Sai. All Rights Reserved.</p>
        </div>	
        <div className="footer_profile">
          <ul>
            <li><a href="#"><i className="fa fa-facebook" /></a></li>
            <li><a href="#"><i className="fa fa-twitter" /></a></li>
            <li><a href="#"><i className="fa fa-instagram" /></a></li>
            <li><a href="#"><i className="fa fa-pinterest" /></a></li>
          </ul>
        </div>						
      </div>{/*- END COL */}							
    </div>{/*- END ROW */}					
  </div>{/*- END CONTAINER */}
</div>


    
    </>
  )
}

export default Footer
