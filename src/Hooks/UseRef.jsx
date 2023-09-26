import React, { useEffect, useRef, useState } from 'react'

function UseRef() {
   // const [name,setname]=useState();
  const ref1 =useRef('');
  const ref2 =useRef('');
  const ref3 =useRef('');
  const ref4 =useRef('');

  useEffect(
    ()=>{
      // count.current +=1;
      ref1.current.focus();
    }
  )
  return (
    <>
    {/* <div> */}
      <p>useRef</p>
      {/* <input onChange={(e)=>setname(e.target.value)}/>  
      <p>{name}</p>
      <p>UseRef Count:-{count.current}</p>
        </div> */}
        <div className='container-fluid mx-10px'>
          <input ref={ref1} type="text" maxLength={1} onChange={()=>{{ref1.current.value.length==1?ref2.current.focus():ref1.current.focus()}
    }}/>
          <input ref={ref2} type="text" maxLength={1} onChange={()=>{ref2.current.value.length==1?ref3.current.focus():ref1.current.focus()}}/>
          <input ref={ref3} type="text" maxLength={1}  onChange={()=>{ref3.current.value.length==1?ref4.current.focus():ref2.current.focus()}}/>
         
          <input ref={ref4} maxLength={1} onChange={()=>{ref4.current.value.length==1?"":ref3.current.focus()}} type="text" />
        </div>
    </>
  )
}

export default UseRef