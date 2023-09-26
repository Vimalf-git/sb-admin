import { Formik } from 'formik';
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

function Create({ data, setData }) {
  let navigate = useNavigate();

  const schema = Yup.object().shape({
    name: Yup.string().required("*please enter your name"),
    userName: Yup.string().required("*please enter your u-name").min(3, '* User Name should be atlest 3 characters'),
    email: Yup.string().required("*please enter your mail"),
    mobile: Yup.string().required().matches(/^\d{10}$/, '* Invalid Mobile Number'),
    batch: String()
  })
  return (
    <>
      <div className='container-fluid'>
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Create</h1>
        </div>

        <div className='row'>
          <Formik
            initialValues={{
              name: '',
              userName: '',
              email: '',
              mobile: '',
              batch: ''
            }}

            onSubmit={(value) => {
              console.log(value);
              let arrayValAdd = [...data];
              arrayValAdd.push(value);
              setData(arrayValAdd);
              navigate('/dashboard');
            }}

            validationSchema={schema}
          >
            {({ handleSubmit, handleChange, handleBlur, errors, touched }) => (
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control name='name' onBlur={handleBlur} onChange={handleChange} type="text" placeholder="Enter your name" />
                  {errors.name && touched.name ? <div style={{ color: "red" }}>{errors.name}</div> : null}
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>UserName</Form.Label>
                  <Form.Control name='userName' onBlur={handleBlur} onChange={handleChange} type="text" placeholder="Enter your username" />
                  {errors.userName && touched.userName ? <div style={{ color: "red" }}>{errors.userName}</div> : null}
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control name='email' onBlur={handleBlur} onChange={handleChange} type="email" placeholder="Enter your Email" />
                  {errors.email && touched.email ? <div style={{ color: "red" }}>{errors.email}</div> : null}
                </Form.Group>
                <Form.Group className="mb-3" >
                  <Form.Label>mobile</Form.Label>
                  <Form.Control name='mobile' onBlur={handleBlur} onChange={handleChange} type="text" placeholder="Enter your mobile" />
                  {errors.mobile && touched.mobile ? <div style={{ color: "red" }}>{errors.mobile}</div> : null}
                </Form.Group>
                <Form.Group className="mb-3" >
                  <Form.Label>Batch</Form.Label>
                  <Form.Control name='batch' onBlur={handleBlur} onChange={handleChange} type="text" placeholder="Enter your Batch" />
                  {errors.batch && touched.batch ? <div style={{ color: "red" }}>{errors.batch}</div> : null}
                </Form.Group>
                <Button type='submit'>submit</Button>
              </Form>
            )}

          </Formik>

        </div>
      </div>
    </>
  )
}

export default Create