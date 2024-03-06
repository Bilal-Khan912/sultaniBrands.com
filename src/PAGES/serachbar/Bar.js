import React from 'react'
import { IoSearchCircleSharp } from "react-icons/io5";



import "../serachbar/search.css"
function Bar() {

  // const searchbaronclick = ()=>{
  //     alert("on click")
  // }

  return (
    <>
<div>
  <div className="search-box">
    <button  className="btn-search"><IoSearchCircleSharp/></button>
    <input  type="text" className="input-search" placeholder="Type to Search..." />
  </div>
 
 
</div>

    </>
  )
}

export default Bar