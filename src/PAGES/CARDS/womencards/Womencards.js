import React, { useState } from 'react'
import Layoutpage from '../../../layout/Layoutpage'
// import Womendata from '../../Data/Womenproducts'
import Womencarousel from '../../carousel/Womencarousel'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addCart } from '../../../redux/actions/action'
import Productsdb from '../../Data/Allproducts'

function Womencards() {
    const [data, setData] = useState (Productsdb)
      data.filter(wo => wo.category=="")
    let womenClothes = data.filter(wo => wo.category=="girl's clothing")

  let dispatch = useDispatch()

  const sendItem = (event)=>{
    dispatch(addCart(event))
  }


  return (
    <>
    <Layoutpage>
    <Womencarousel/>
              
    <div className='container mt-5'>
    <div className='row'>
        
    {
        womenClothes.map((Wo)=>{
              return(
                
                <>
                
              <div className='col-lg-3 col-md-6 col-sm-12'>
         <div className="container bootdey">
  <div className="row">
    {/* Product Item */}
    <div className="product-grid col-xs-12 col-sm-6 col-md-3">
      <div className="product-item">
        <div className="image">
        
           <Link to={`/${Wo.id}`}>
            <img  height={350} width={200} src={Wo.image} alt="Product 1" />
            </Link>
  
        </div>
        <div className="caption">
          <div className="name text-center">
            <h6>{Wo.title}</h6>
          </div>
          <div className="price">
            <span>Rs:{Wo.price}</span>
          </div>
          <div className="cart">
            <button onClick={()=>sendItem(Wo)} type="button" className="btn btn-primary">Add to Cart</button>
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


    </Layoutpage>
    </>
  )
}

export default Womencards