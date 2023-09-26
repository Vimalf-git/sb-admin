import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

function NestedExample() {
  const navigate=useNavigate();
  const [name,setName]=useState(0);

  // This is way to acheive index routing
  // 1.use useEffect
  // 2. menting routing index and respected component

  // useEffect(()=>{
  //   navigate('accounts');
  //   console.log("hi")
  // },[])

  return (
    <>
    <div className='container-fluid'>
      <div>Nested Example</div>
      <div className="container-fluid">
        <ul className='btn-nested-li'>
          <li className={name==0?'active':''} onClick={()=>{navigate('nested-example?=accounts'), setName(0)}}  >Accounts</li>
          <li className={name==1?'active':''} onClick={()=>{navigate('nested-example?=products') ,setName(1)}} >Products</li>
          <li onClick={()=>{navigate('nested-example?=receipt'),setName(2)}} className={(name==2?'active':'')}>Receipt</li>
          <li onClick={()=>{navigate('nested-example?=staff'),setName(3)}} className={(name==3?'active':'')}>Staff</li>
        </ul>
      </div>
      <Outlet/>
      </div>
    </>
  )
}

export default NestedExample