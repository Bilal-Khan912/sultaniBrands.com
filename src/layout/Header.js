import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegUser } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi2";
import '../CSS/navbar.css'
import Bar from '../PAGES/serachbar/Bar';
import { useSelector } from 'react-redux';
import { Badge } from '@mui/material';

const Header = () => {


   let data = useSelector((state)=>state.cartReducer.carts)
      console.log("data in header",data)
  
  return (


 





    <div>

<nav className="navbar fixed-top navbar-expand-lg ">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">
    <img src='./img/Shoplogo.png'/>
    </Link>
    <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span  style={{color:"red"}} className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
     
        <li className="nav-item">
          <Link className="nav-link" to="/cont">CONTACT</Link>
        </li>

       
{/* dropdown button */}


<div class="dropdown">
  <button
    class="btn  dropdown-toggle"
    type="button"
    id="dropdownMenuButton"
    data-mdb-toggle="dropdown"
    aria-expanded="false"
  >
     WOMAN
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <li><Link class="dropdown-item" to="/women">Clothes</Link></li>
    <li><Link class="dropdown-item" to="/womenshoes">Shoes</Link></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  
  </ul>
</div>
  <div class="dropdown">
  <button
    class="btn  dropdown-toggle"
    type="button"
    id="dropdownMenuButton"
    data-mdb-toggle="dropdown"
    aria-expanded="false"
  >
    MEN
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <li><Link class="dropdown-item" to="/men">Clothes</Link></li>
    <li><Link class="dropdown-item" to="/menshoes">Shoes</Link></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>

           

      </ul>
      <form className="d-flex">
         
        <Link  type="submit"><Bar/></Link>
        <Link to="/login" className="btn-icon" type="submit">Login<FaRegUser/></Link>

     <Link className='btn-icon' to={'/addcart'}>
     <Badge  badgeContent ={data.length}  type="submit"><HiShoppingCart/></Badge>

     </Link>
     
       
      </form>
    </div>
  </div>
</nav>












{/* navbar 2 ************************************************************************************************/}




    </div>
  )
}

export default Header
