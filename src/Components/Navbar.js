import React from 'react'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'
import { Card } from '@mui/material'

function Navbar(props) {
    const navigate = useNavigate();
    const Logoutclicked = async () => {
        localStorage.removeItem("token");
        props.setislogged(false);
        navigate("/");
    }
    return (
        <div>
            <Toaster />
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" style={{ color: "white" }} href="#"><b>StockMoney</b></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="d-flex" id="navbarSupportedContent">

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item2 dropdown has-megamenu mx-2" style={{ alignSelf: 'center' }}>

                                <div className="d-flex">

                                    <div className="dropdown dropstart open">
                                        <button type="button" className="btn dropdown-toggle" style={{ color: 'white', boxShadow: 'none' }} data-bs-toggle="dropdown" aria-expanded="false">
                                            <b>News</b>
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuOffset">
                                            <li><a className="dropdown-item" onClick={() => props.setcategory('general')} href="#"><b>General News</b></a></li>
                                            <li><a className="dropdown-item my-3" onClick={() => props.setcategory('crypto')} href="#"><b>Crypto News</b></a></li>
                                            <li><a className="dropdown-item my-3" onClick={() => props.setcategory('business')} href="#"><b>Business news</b></a></li>
                                            <li><a className="dropdown-item my-3" onClick={() => props.setcategory('health')} href="#"><b>Health news</b></a></li>
                                            <li><a className="dropdown-item my-3" onClick={() => props.setcategory('science')} href="#"><b>Science news</b></a></li>
                                            <li><a className="dropdown-item my-3" onClick={() => props.setcategory('sports')} href="#"><b>Sports news</b></a></li>
                                            <li><a className="dropdown-item my-3" onClick={() => props.setcategory('technology')} href="#"><b>Technology news</b></a></li>
                                            <li><a className="dropdown-item" onClick={() => props.setcategory('forex')} href="#"><b>Forex News</b></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item me-1 my-1" style={{ alignSelf: 'center' }}>
                                <Link className="nav-link active" style={{ color: "white" }} aria-current="page" to='/'>Home</Link>
                            </li>
                            <li className="nav-item3 dropdown has-megamenu mx-1" style={{ alignSelf: 'center' }}>

                                <div className="d-flex">

                                    <div className="dropdown dropstart open">
                                        <button type="button" className="btn dropdown-toggle" style={{ color: 'white', boxShadow: 'none' }} data-bs-toggle="dropdown" aria-expanded="false">
                                            <b>Market</b>
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuOffset">
                                            <li><button className="dropdown-item" onClick={() => navigate("./companydata")} href="#"><b>Company Stocks</b></button></li>
                                            <li><button className="dropdown-item my-3" onClick={() => navigate("./cryptodata")}><b>Crypto Data</b></button></li>
                                            <li><button className="dropdown-item my-3" onClick={() => navigate("/topgainers")} href="#"><b>Top Gainers</b></button></li>
                                            <li><button className="dropdown-item my-3" onClick={() => navigate('./toplosers')} href="#"><b>Top Losers</b></button></li>
                                            <li><button className="dropdown-item my-3" onClick={() => navigate('./mostactive')} href="#"><b>Most Active</b></button></li>

                                        </ul>
                                    </div>
                                </div>
                            </li>

                            <li className="nav-item me-2 my-1" style={{ alignSelf: 'center' }}>
                                <a className="nav-link" style={{ color: "white" }} onClick={() => navigate('./aboutus')} href="#">About Us</a>
                            </li>
                            <div className="d-flex" style={{ alignSelf: 'center' }}>
                                {props.islogged && <div className="dropdown dropstart open">
                                    <button type="button" className="btn dropdown-toggle" style={{ color: 'white', boxShadow: 'none', marginTop: '0px' }} data-bs-toggle="dropdown" aria-expanded="false">
                                        <b><img src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" width={35} style={{ borderRadius: "25px", marginRight: '7px' }} /></b>
                                        <b>Me</b>
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuOffset">
                                        <li><a className="dropdown-item" onClick={() => navigate("./wishlist")} href="#"><b>Watch List</b></a></li>
                                        <li><a className="dropdown-item" onClick={Logoutclicked} href="#"><b>Logout</b></a></li>
                                    </ul>
                                </div>}

                                {!props.islogged && <div onClick={()=>navigate("./login")} style = {{color:"white", cursor:"pointer"}}>Login/Signup</div>}
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar