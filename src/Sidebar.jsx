import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
    return (
        <>
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                <a className="sidebar-brand d-flex align-items-center justify-content-center " href="javascript(void)">
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="fas fa-laugh-wink"></i>
                    </div>
                    <div className="sidebar-brand-text  mx-3">SB Admin <sup>2</sup></div>
                </a>

                <hr className="sidebar-divider my-0" />

                <li className="nav-item active">
                    <a className="nav-link" href="javascript(void)">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span></a>
                </li>

                <hr className="sidebar-divider" />

                <div className="sidebar-heading">
                    Interface
                </div>

                <li className="nav-item ">
                    <div className="nav-link">
                        <Link to={'/create'} style={{textDecoration: 'none'}}>
                            <i className="fas fa-fw fa-cog"></i>
                            <span style={{ color: 'white' }}>Add user</span>
                        </Link>
                    </div>
                </li>

                <li className="nav-item">
                    <div className="nav-link">
                        <Link to={'/dashboard'} style={{textDecoration: 'none'}}>
                            <i className="fas fa-fw fa-wrench"></i>
                            <span style={{ color: 'white' }}>View User</span>
                        </Link>
                    </div>
                </li>
            </ul>
        </>
    )
}

export default Sidebar