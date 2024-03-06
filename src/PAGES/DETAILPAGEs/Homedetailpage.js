import React,{useState} from 'react'
import { FaStar } from "react-icons/fa";
import { useParams } from 'react-router-dom'
import Productsdb from '../Data/Allproducts';
import '../DETAILPAGEs/detailpage.css'
import Layoutpage from '../../layout/Layoutpage';

function Homedetailpage() {

    const [qty, setQty]= useState (0)
  
    const increment = () => {
      setQty (qty+1)
    }
    
  
    const decrement = () => {
      if (qty>1){
        setQty (qty-1)
      }
    }
  
  
  
    let {id} = useParams()
    
     let filterdata =  Productsdb.find(x=> x.id == id)

    return (
       <Layoutpage>

<div style={{marginTop:"80px"}} className="container ">
  <div className="card">
    <div className="card-body">
      <h3 className="card-title">{filterdata.title}</h3>
      <h6 className="card-subtitle">{filterdata.category}</h6>
      <div className="row">
        <div className="col-lg-5 col-md-5 col-sm-6">
          <div className="white-box text-center"><img  src={filterdata.image} className="img-responsive" /></div>
        </div>
        <div className="col-lg-7 col-md-7 col-sm-6">
          <h4 className="box-title mt-5">{filterdata.description}</h4>
          <h2 className="mt-5">
           Rs:{filterdata.price}<small className="text-success">(36%off)</small>
          </h2>
          <button className="btn btn-dark btn-rounded me-1" data-toggle="tooltip" title data-original-title="Add to cart">
            <i className="fa fa-shopping-cart" />
          </button>
          <button className="btn btn-primary btn-rounded">Buy Now</button>
          <h3 className="box-title mt-5">Key Highlights</h3>
          <ul className="list-unstyled">
            <li><i className="fa fa-check text-success" />Sturdy structure</li>
            <li><i className="fa fa-check text-success" />Designed to foster easy portability</li>
            <li><i className="fa fa-check text-success" />Perfect furniture to flaunt your wonderful collectibles</li>
          </ul>
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12">
          <h3 className="category mt-5">General Info</h3>
          <div className="table-responsive">

<div className='hr'>
   <hr/>
</div>

    
    <div className='main-div'>   
    <div className="card-detail me-5" style={{width: '18rem'}}>
  <img height={340} width={30} src={filterdata.image} className="card-img-top" alt="..." />
  <div className="card-body">
    <p className="card-text">{filterdata.title}</p>
  </div>
</div>
     <div className="card-detail me-5" style={{width: '18rem'}}>
  <img height={340} width={30} src={filterdata.image} className="card-img-top" alt="..." />
  <div className="card-body">
    <p className="card-text">{filterdata.title}</p>
  </div>
</div>
     <div className="card-detail" style={{width: '18rem'}}>
  <img height={340} width={30} src={filterdata.image} className="card-img-top" alt="..." />
  <div className="card-body">
    <p className="card-text">{filterdata.title}</p>
  </div>
</div>
    

    </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</div>

       </Layoutpage>
      )
}

export default Homedetailpage