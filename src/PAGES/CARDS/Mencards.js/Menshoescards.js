import React, { useState } from 'react'
import Layoutpage from '../../../layout/Layoutpage'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addCart } from '../../../redux/actions/action'
import Productsdb from '../../Data/Allproducts'

function Menshoescards() {

  let dispatch=useDispatch()


  const sendItem = (event) =>{
      dispatch(addCart(event))
  }
  
    const [data, setData] = useState(Productsdb)
    let menShoes = data.filter(me => me.category=="men Shoes")
  return (
     <Layoutpage>
        <>
        
           
   <div style={{marginTop:"80px"}} className='container'>
   <div className='row'>
{menShoes.map((sho)=>{
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
          <Link to={`/${sho.id}`}>
            <img  height={350} width={200} src={sho.image} alt="Product 1" />
            </Link>
          </a>
        </div>
        <div className="caption">
          <div className="name text-center">
            <h6 href="#">{sho.title}</h6>
          </div>
          <div className="price">
            <span>Rs: {sho.price}</span>
          </div>
          <div className="cart">
            <button onClick={()=>sendItem(sho)} type="button" className="btn btn-primary">Add to Cart</button>
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

export default Menshoescards