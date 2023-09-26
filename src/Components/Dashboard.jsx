import React from 'react'
import Tile from './Tile';
import { Button, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
function Dashboard({data,setData}) {

    const dataDashboard = [
        {
            isProgress: false,
            color: "primary",
            tittle: "Earnings (Monthly)",
            value: "$40,000",
            icon: "fa-calendar"
        }, {
            isProgress: false,
            color: "success",
            tittle: "Earnings (Annual)",
            value: "$215,000",
            icon: "fa-dollar-sign"
        }, {
            isProgress: true,
            color: "info",
            tittle: "Tasks",
            value: "50",
            icon: "fa-clipboard-list"
        }, {
            isProgress: false,
            color: "warning",
            tittle: "Pending Requests",
            value: "18",
            icon: "fa-comments"
        }
    ]
    const handledelete=(index)=>{
        const arrayVal=[...data];
        arrayVal.splice(index,1);
        setData(arrayVal);
    }
    const navigate=useNavigate();
    return (
        <>
            <div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                    <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                        className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
                </div>

                <div className="row">


                    {dataDashboard.map((e, i) => {
                        return <Tile data={e} key={i} />;
                    })}

                </div>

                <div className="">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th> Name</th>
                                <th>UserName</th>
                                <th>Email</th>
                                <th>Mobile</th>
                                <th>batch</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((e, i) => {
                                    return(
                                     <tr key={i}>
                                        <td>{i + 1}</td>
                                        <td>{e.name}</td>
                                        <td>{e.userName}</td>
                                        <td>{e.email}</td>
                                        <td>{e.mobile}</td>
                                        <td>{e.batch}</td>
                                        <td>
                                            <Button className='btn' variant='primary'
                                            onClick={()=>navigate(`/edit/${i}`)}
                                            >Edit</Button>
                                            &nbsp;
                                            &nbsp;
                                            <Button variant='danger' onClick={()=>handledelete(i)}>Delete</Button>
                                        </td>
                                    </tr>)
                                })
                            }
                        </tbody>
                    </Table>
                </div>
            </div>



        </>
    )
}

export default Dashboard


















                    {/* <!-- Earnings (Monthly) Card Example --> */}
                    {/* <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-primary shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                        Earnings (Monthly)</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">$40,000</div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-calendar fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}


                    {/* <!-- Earnings (Monthly) Card Example --> */}

                    {/* <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-success shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                        Earnings (Annual)</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">$215,000</div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

                    {/* <!-- Earnings (Monthly) Card Example --> */}

                    {/* <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-info shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Tasks
                                    </div>
                                    <div className="row no-gutters align-items-center">
                                        <div className="col-auto">
                                            <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">50%</div>
                                        </div>
                                        <div className="col">
                                            <div class="progress progress-sm mr-2">
                                                <div className="progress-bar bg-info" role="progressbar"
                                                    style={{
                                                        width: "50%",
                                                        ariaValueNow: "50",
                                                        ariaValueMin: "0",
                                                        ariaValueMax: "100"
                                                    }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}


                    {/* <!-- Pending Requests Card Example --> */}
                    {/* <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-warning shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                        Pending Requests</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">18</div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-comments fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}