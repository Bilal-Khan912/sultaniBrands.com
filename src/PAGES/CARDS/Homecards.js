import React, { useState } from 'react'
import Productsdb from '../Data/Allproducts'
import { Link } from 'react-router-dom'
import { FaOptinMonster, FaStar } from "react-icons/fa";
import { GoHeart } from "react-icons/go";
import { Ripple, initMDB } from "mdb-ui-kit";
import {useDispatch} from 'react-redux';
import { addCart } from '../../redux/actions/action';
import '../CARDS/homecards.css'
initMDB({ Ripple });
function Homecards() {

  const dispatch = useDispatch()


  const sendItem = (e) =>{
    dispatch(addCart(e))
  }

 
    const [data, setData] = useState(Productsdb)

  return (
    <>
   
   <div className='hr'><hr/></div>
  <div className='category'>
  Shop By Category
  </div>
    
    <div className=''>
    <button type="button" class="btn-img " data-mdb-ripple-init>
    <img  src='https://www.limelight.pk/cdn/shop/files/LL-_main_Women_bubble_icon_17-Feb_300x.png?v=1708165571'/> 
        <pre className='pretext'>WOMEN</pre>
    </button>
  <button type="button" class="btn-img " data-mdb-ripple-init>
    <img src='https://www.limelight.pk/cdn/shop/files/LL-_main_Girls_bubble_icon_17_-Feb_300x.png?v=1708165592'/> 
        <pre className='pretext'>GIRLS</pre>
    </button>
  <button type="button" class="btn-img" data-mdb-ripple-init>
    <img src='https://www.limelight.pk/cdn/shop/files/LL_main_Winter_western_icon_17-Feb_300x.png?v=1708165644'/> 
        <pre className='pretext'>WINTER<br/>Western</pre>
    </button>
  <button type="button" class="btn-img" data-mdb-ripple-init>
    <img src='https://www.limelight.pk/cdn/shop/files/LL-main_Accessories_bubble_icon_17-_Feb_300x.png?v=1708165661'/> 
        <pre className='pretext'>ACCESSORIES</pre>
    </button>
 
    </div>
     
   <div className='hr'>
   <hr/>
   </div>

   <button type="button" class="btn-price" data-mdb-ripple-init><span className='special-bestsale'>Special Price</span></button>
   <Link style={{background:"none", border:"none"}} to={'/sale'}  data-mdb-ripple-init>
<button style={{background:"none"}} type='button'class="btn-price" data-mdb-ripple-init>
    <span  className='onsale'>New On Sale</span>
    </button>
    </Link>
   <button type="button" class="btn-price" data-mdb-ripple-init><span className='special-bestsale'>Best Seller</span></button>
     
<div className='hr2'>
  <hr/>
</div>
    

    <div className='category'>
    New Arrivals
    </div>


    <div className='container mt-5'>
   <div className='row'>
{data.map((x)=>{
      return(
            <>
            <div className='col-lg-3 col-md-6 col-sm-12'>
         <div className="container bootdey">
  <div className="row">
    {/* Product Item */}
    <div className="product-grid col-xs-12 col-sm-6 col-md-3">
      <div className="product-item">

        <div className="image">
         
          <a href="#">
          <Link to={`/${x.id}`}>
            <img height={350} src={x.image} alt="Product 1" />
          </Link>
          
          </a>
        
        </div>
        <div className="caption">
          <div className="name text-center">
            <h5 href="#">{x.title.slice(0,10)}...</h5>
          </div>
          <div className="price">
            <span>$866.00</span>
          </div>
          <div className="cart">
            <button onClick={()=>sendItem(x)} type="button" className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
        <button type="button" className="btn btn-default wishlist" data-toggle="tooltip" data-placement="right" title="Wishlist"><i className="fa fa-heart" /></button>
        <button type="button" className="btn btn-default compare" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fa fa-circle-o" /></button>
      </div>
    </div>

</div>
</div>
</div>

            </>
            
      )
    })
  }

</div>
        </div>
     
    
    </>
  )
}

export default Homecards