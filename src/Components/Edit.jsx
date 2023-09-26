import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom'
import * as Yup from 'yup';
import { Formik } from 'formik';

function Edit({ data, setData }) {
  const params = useParams();
  console.log(params.id);

  let navigate = useNavigate();
  const schema = Yup.object().shape({
    name: Yup.string().required("*please enter your name"),
    userName: Yup.string().required("*please enter your u-name").min(3, '* User Name should be atlest 3 characters'),
    email: Yup.string().required("*please enter your mail"),
    mobile: Yup.string().required().matches(/^\d{10}$/, '* Invalid Mobile Number'),
    batch: String()
  })


  // const getData = (index) => {
    // var val=[{
    //   name: data[params.id].name,
    //   userName: data[params.id].userName,
    //   email: data[params.id].email,
    //   mobile: data[params.id].mobile,
    //   batch: data[params.id].batch
    // }]
    // return val;
    // setName(data[0].name);
    // setUserName(data[index].userName);
    // setEmail(data[index].email);
    // setMobile(data[index].mobile);
    // setBatch(data[index].batch);
  // }

  useEffect(() => {
    if (Number(params.id) < data.length) {
      // getData(params.id);
      // var setName=data[params.id].userName;

    } else {
      navigate('/dashboard');
    }
  }, [])
  return (
    <>
      <div className='container-fluid'>
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Edit</h1>
        </div>

        <div className='row'>
          <Formik
            initialValues={{
              name: data[params.id].name,
              userName: data[params.id].userName,
              email: data[params.id].email,
              mobile: data[params.id].mobile,
              batch: data[params.id].batch

            }}

            onSubmit={(value) => {

              let arrayValAdd = [...data];
              arrayValAdd.splice(Number(params.id), 1, value);
              setData(arrayValAdd);
              navigate('/dashboard');
            }}

            validationSchema={schema}
          >
            {({ handleSubmit, handleChange, handleBlur, errors, touched, values }) => (
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control value={values.name} name='name' onBlur={handleBlur} onChange={handleChange} type="text" placeholder="Enter your name" />
                  {errors.name && touched.name ? <div style={{ color: "red" }}>{errors.name}</div> : null}
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>UserName</Form.Label>
                  <Form.Control value={values.userName} name='userName' onBlur={handleBlur} onChange={handleChange} type="text" placeholder="Enter your username" />
                  {errors.userName && touched.userName ? <div style={{ color: "red" }}>{errors.userName}</div> : null}
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control value={values.email} name='email' onBlur={handleBlur} onChange={handleChange} type="email" placeholder="Enter your Email" />
                  {errors.email && touched.email ? <div style={{ color: "red" }}>{errors.email}</div> : null}
                </Form.Group>
                <Form.Group className="mb-3" >
                  <Form.Label>mobile</Form.Label>
                  <Form.Control value={values.mobile} name='mobile' onBlur={handleBlur} onChange={handleChange} type="text" placeholder="Enter your mobile" />
                  {errors.mobile && touched.mobile ? <div style={{ color: "red" }}>{errors.mobile}</div> : null}
                </Form.Group>
                <Form.Group className="mb-3" >
                  <Form.Label>Batch</Form.Label>
                  <Form.Control value={values.batch} name='batch' onBlur={handleBlur} onChange={handleChange} type="text" placeholder="Enter your Batch" />
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

export default Edit