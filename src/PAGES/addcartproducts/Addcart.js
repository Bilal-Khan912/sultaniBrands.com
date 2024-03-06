import React, { useState } from 'react'
import Layoutpage from '../../layout/Layoutpage'
import { useDispatch, useSelector } from 'react-redux'
import '../addcartproducts/addcart.css'
import { Link } from 'react-router-dom'
import { FaStar } from "react-icons/fa";
import { addCart, delCart, removeSingle } from '../../redux/actions/action'
import { Badge } from '@mui/material'


function Addcart() {


  


  

  




let dispatch=  useDispatch()


const incByOne = (item) =>{
   dispatch(addCart(item))
}
const decByOne = (item) =>{
  dispatch(removeSingle(item))
  // alert("buton clicked")
}


    let data = useSelector((state)=>state.cartReducer.carts)

 


  const delItem = (id)=>{
    dispatch(delCart(id))
  }

    



  return (
    <Layoutpage>

{
    data.map((x)=>{
        return(
            <>
           
     <div style={{marginTop:"80px"}} className="container padding-bottom-3x mb-1 ">
  
  <div className="table-responsive shopping-cart">
    <table className="table">
      <thead>
        <tr>
          <th>Product Name</th>
          <th className="text-center">Quantity</th>
          <th className="text-center">price</th>
          <th className="text-center">Total Amount:</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div className="product-item">
              <a className="product-thumb" href="#"><img style={{borderRadius:"20px", boxShadow:"3px 4px 2px gray"}} src={x.image} alt="Product" /></a>
              <div className="product-info">
                <h4 className="product-title">{x.title.slice(0,20)}...</h4>
              </div>
            </div>
          </td>
         
       <div>
       <button onClick={()=>incByOne(x)} className='btn btn-dark btn-sm mt-5'>+</button>
         {x.qnty}
      <button onClick={()=>decByOne(x)} className='btn btn-dark btn-sm mt-5'>-</button>
       </div>


          <td className="text-center text-lg text-medium">Rs:{x.price}</td>
          <td className="text-center text-lg text-medium"> Rs:{x.price * x.qnty}</td>
          <td className="text-center"><a onClick={()=>delItem(x.id)} className="remove-from-cart" href="#" data-toggle="tooltip" title data-original-title="Remove item"><i className="fa fa-trash" /></a></td>
        </tr>
      
      </tbody>
    </table>
  </div>
  
  
</div>



            </>
        )
        
    })
  
}




<div className="shopping-cart-footer">
    <div className="column"><a className="btn btn-primary" href="#" data-toast data-toast-type="success" data-toast-position="topRight" data-toast-icon="icon-circle-check" data-toast-title="Your cart" data-toast-message="is updated successfully!">Update Cart</a><a className="btn btn-success" href="#">Checkout</a></div>
  </div>

<div className="column mb-5"><Link  className="btn btn-outline-secondary" to="/"><i className="icon-arrow-left" />&nbsp;Back to Shopping</Link></div>


    </Layoutpage>
  )
}


export default Addcart

















{/* <div className='mt-5'>
<a onClick={increment} className='btn btn-dark btn-sm me-2'>+</a>
      {qty}
<a onClick={decrement} className='btn btn-dark btn-sm ms-2'>-</a>
<br/>
<br/>
<div className='star'> <span style={{color:'red'}}>Star :</span>
<FaStar/> <FaStar/> <FaStar/> <FaStar/> <FaStar/>
</div>
 </div> */}