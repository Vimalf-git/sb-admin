import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

function Create({data,setData}) {
  let navigate = useNavigate();
  let[name,setName]=useState("");
  let[userName,setUserName]=useState("");
  let[email,setEmail]=useState("");
  let[mobile,setMobile]=useState("");
  let[batch,setBatch]=useState("");

  let handleClick=()=>{
    console.log("enter")
    let arrayValAdd=[...data];
    arrayValAdd.push({
      name,userName,email,mobile,batch
    });
    setData(arrayValAdd);
    navigate('/dashboard');
  }
  return (
    <>
      <div className='container-fluid'>
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Create</h1>
        </div>

        <div className='row'>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" onChange={(e)=>setName(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>UserName</Form.Label>
              <Form.Control type="text" placeholder="Enter your username" onChange={(e)=>setUserName(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your Email" onChange={(e)=>setEmail(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>mobile</Form.Label>
              <Form.Control type="text" placeholder="Enter your mobile" onChange={(e)=>setMobile(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Batch</Form.Label>
              <Form.Control type="text" placeholder="Enter your Batch" onChange={(e)=>setBatch(e.target.value)}/>
            </Form.Group>
            <Button onClick={()=>handleClick()}>submit</Button>
          </Form>
        </div>
      </div>
    </>
  )
}

export default Create