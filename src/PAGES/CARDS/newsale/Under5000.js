import React, { useState } from 'react'
import Layoutpage from '../../../layout/Layoutpage'
import "../newsale/sale.css"
import Newsale from '../../Data/Newonsale'
import { Link } from 'react-router-dom'
import Salecarousel from '../../carousel/Salecarousel'
import { useDispatch } from 'react-redux'
import { addCart } from '../../../redux/actions/action'

function Under5000() {

   let dispatch= useDispatch();
   const sendItem = (e)=>{
       dispatch(addCart(e))
   }

    const [data, setData] = useState(Newsale)
    let filprice = data.filter(x => x.price > 4000 && x.price <5000)
   

  return (
   <Layoutpage>
     <>
     <Salecarousel/>

     <div className='category'>
 
NEW ON SALE...
  </div>
  <button type="button" class="btn-imgsale " data-mdb-ripple-init>
    <img src='https://www.limelight.pk/cdn/shop/files/menu_sale_new-on-sale_unstitched_141x139.png?v=17496511600345928413'/> 
        <pre className='pretext-sale'>UNSTITCHED</pre>
    </button>
  <button type="button" class="btn-imgsale " data-mdb-ripple-init>
    <img src='https://www.limelight.pk/cdn/shop/files/menu_sale_new-on-sale_pret_141x139.png?v=13439734017735495063'/> 
        <pre className='pretext-sale'>PRET</pre>
    </button>
  <button type="button" class="btn-imgsale" data-mdb-ripple-init>
    <img src='https://www.limelight.pk/cdn/shop/files/menu_sale_new-on-sale_winter_141x139.png?v=12846897323034849086'/> 
        <pre className='pretext-sale'>WINTER</pre>
    </button>
  <button type="button" class="btn-imgsale" data-mdb-ripple-init>
    <img src='https://www.limelight.pk/cdn/shop/files/menu_sale_new-on-sale_western_141x139.png?v=4141473909889712434'/> 
        <pre className='pretext-sale'>WESTERN</pre>
    </button>
  <button type="button" class="btn-imgsale" data-mdb-ripple-init>
    <img src='https://www.limelight.pk/cdn/shop/files/menu_sale_new-on-sale_bottoms_141x139.png?v=13604464958934873509'/> 
        <pre className='pretext-sale'>BOOTTOMS</pre>
    </button>
    <br/>
  <button type="button" class="btn-imgsale" data-mdb-ripple-init>
    <img src='https://www.limelight.pk/cdn/shop/files/menu_sale_new-on-sale_cosmetics_141x139.png?v=8458050293776717226'/> 
        <pre className='pretext-sale'>COSMETICS</pre>
    </button>
  <button type="button" class="btn-imgsale" data-mdb-ripple-init>
    <img src='https://www.limelight.pk/cdn/shop/files/menu_sale_new-on-sale_accessories_141x139.png?v=1164935448439141957'/> 
        <pre className='pretext-sale'>ACCESSORIES</pre>
    </button>
  <button type="button" class="btn-imgsale" data-mdb-ripple-init>
    <img src='https://www.limelight.pk/cdn/shop/files/menu_sale_new-on-sale_footwear_141x139.png?v=8479007098356068687'/> 
        <pre className='pretext-sale'>FOOTWEAR</pre>
    </button>
  <button type="button" class="btn-imgsale" data-mdb-ripple-init>
    <img src='https://www.limelight.pk/cdn/shop/files/menu_sale_new-on-sale_girl_141x139.png?v=15915706236421064643'/> 
        <pre className='pretext-sale'>GIRLS</pre>
    </button>
  <button type="button" class="btn-imgsale" data-mdb-ripple-init>
    <img src='https://www.limelight.pk/cdn/shop/files/menu_sale_new-on-sale_men_141x139.png?v=485079155154132628'/> 
        <pre className='pretext-sale'>MEN</pre>
    </button>
    <div className='hr'><hr/></div>
     
    <div className="container mt-5">
  <div className="row">
    <div className="col-sm-4 col-md-3">
      <form>
        <div className="well">
          <div className="row">
            <div className="col-sm-12">
              
            </div>
          </div>
        </div>
      </form>
      {/* Filter */}
      <form className="shop__filter">
        {/* Price */}
        <h3 className="headline">
          <span className='pri'>Price</span>
        </h3>
        <div className="radio">
          <Link style={{color:"#000", textDecoration:"none"}} to={'/under6000'} htmlFor="shop-filter-price_1"><span className='spn'>5000 t 6000</span></Link>
        </div>
        <div className="radio">
          <Link  style={{color:"#000", textDecoration:"none"}} to={'/under5000'} htmlFor="shop-filter-price_2"> <span className='spn'> 4000 to 5000 </span></Link>
        </div>
        <div className="radio">
          <Link style={{color:"#000", textDecoration:"none"}} to={'/under4000'} htmlFor="shop-filter-price_3"><span className='spn'>3000 to 4000</span></Link>
        </div>
        <div className="radio">
        <input type="radio" name="shop-filter__radio" id="shop-filter-radio_1" defaultValue defaultChecked />
          <Link style={{color:"#000", textDecoration:"none"}} to={'/under3000'} htmlFor="shop-filter-price_4"><span className='spn'>2000 to 3000</span></Link>
        </div>
        <div className="radio">

          <Link style={{color:"#000", textDecoration:"none"}} to={'/Otherlowprice'} htmlFor="shop-filter-price_4"><span className='spn'>Other(Low Price)</span></Link>
        </div>
      
        {/* Checkboxes */}
      
       
       
      
      
        {/* Radios */}
        <h3 className="headline mt-3">
          <span className='pri'>Material</span>
        </h3>
        <div className="radio">
          <input type="radio" name="shop-filter__radio" id="shop-filter-radio_1" defaultValue defaultChecked />
          <label htmlFor="shop-filter-radio_1">100% Cotton</label>
        </div>
        <div className="radio">
          <input type="radio" name="shop-filter__radio" id="shop-filter-radio_2" defaultValue />
          <label htmlFor="shop-filter-radio_2">Bamboo</label>
        </div>
        <div className="radio">
          <input type="radio" name="shop-filter__radio" id="shop-filter-radio_3" defaultValue />
          <label htmlFor="shop-filter-radio_3">Leather</label>
        </div>
        <div className="radio">
          <input type="radio" name="shop-filter__radio" id="shop-filter-radio_4" defaultValue />
          <label htmlFor="shop-filter-radio_4">Polyester</label>
        </div>
        <div className="radio">
          <input type="radio" name="shop-filter__radio" id="shop-filter-radio_5" defaultValue />
          <label htmlFor="shop-filter-radio_5">Not specified</label>
        </div>
        {/* Colors */}
        <h3 className="headline">
          <span>Colors</span>
        </h3>
        <div className="shop-filter__color">
          <input type="text" id="shop-filter-color_1" defaultValue data-input-color="black" />
          <label htmlFor="shop-filter-color_1" style={{backgroundColor: 'black'}} />
        </div>
        <div className="shop-filter__color">
          <input type="text" id="shop-filter-color_2" defaultValue data-input-color="gray" />
          <label htmlFor="shop-filter-color_2" style={{backgroundColor: 'gray'}} />
        </div>
        <div className="shop-filter__color">
          <input type="text" id="shop-filter-color_3" defaultValue data-input-color="brown" />
          <label htmlFor="shop-filter-color_3" style={{backgroundColor: 'brown'}} />
        </div>
        <div className="shop-filter__color">
          <input type="text" id="shop-filter-color_4" defaultValue data-input-color="beige" />
          <label htmlFor="shop-filter-color_4" style={{backgroundColor: 'beige'}} />
        </div>
       
      </form>
    </div>
 
    {filprice.map((x)=>{
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
            <span>{x.price}</span>
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
   </Layoutpage>
  )
}

export default Under5000