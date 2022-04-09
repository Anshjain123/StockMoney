import React from 'react'
import logo from './images/MoneyHood.svg'
// import photo from './images/photo.png'
import userphoto from './images/profile.jpg'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom'
function Navbar(props) {
    const navigate = useNavigate(); 
    // console.log(props.userdata.photoURL)
    // const photourl = 
    // console.log()
    const handlesignout=()=>{
        props.setuserdata([]);
        props.setisLogged(false);
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" style={{ color: "white" }} href="#"><b>StockMoney</b> <img src={logo} width={25} /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="d-flex" id="navbarSupportedContent">
                        {/* <form className="d-flex" style={{ height: '40px' }}>
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item2 dropdown has-megamenu mx-2">
                                {/* <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    News
                                </a> */}
                                <div className="d-flex">

                                    <div className="dropdown dropstart open">
                                        <button type="button" className="btn dropdown-toggle" style={{ color: 'white', boxShadow: 'none' }} data-bs-toggle="dropdown" aria-expanded="false">
                                            <b>News</b>
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuOffset">
                                            <li><a className="dropdown-item" onClick={()=>props.setcategory('general')} href="#"><b>General News</b></a></li>
                                            <li><a className="dropdown-item my-4" onClick={()=>props.setcategory('crypto')}  href="#"><b>Crypto News</b></a></li>
                                            <li><a className="dropdown-item my-4" onClick={()=>props.setcategory('business')} href="#"><b>Business news</b></a></li>
                                            <li><a className="dropdown-item my-4" onClick={()=>props.setcategory('health')} href="#"><b>Health news</b></a></li>
                                            <li><a className="dropdown-item my-4" onClick={()=>props.setcategory('science')} href="#"><b>Science news</b></a></li>
                                            <li><a className="dropdown-item my-4"onClick={()=>props.setcategory('sports')} href="#"><b>Sports news</b></a></li>
                                            <li><a className="dropdown-item my-4" onClick={()=>props.setcategory('technology')} href="#"><b>Technology news</b></a></li>
                                            <li><a className="dropdown-item" onClick={()=>props.setcategory('forex')} href="#"><b>Forex News</b></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item me-1 my-1">
                                <Link className="nav-link active" style={{ color: "white" }} aria-current="page" to='/'><b>Home</b></Link>
                            </li>
                            <li className="nav-item3 dropdown has-megamenu mx-1">
                                {/* <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    News
                                </a> */}
                                <div className="d-flex">

                                    <div className="dropdown dropstart open">
                                        <button type="button" className="btn dropdown-toggle" style={{ color: 'white', boxShadow: 'none' }} data-bs-toggle="dropdown" aria-expanded="false">
                                            <b>Market</b>
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuOffset">
                                            <li><button className="dropdown-item" onClick={()=>navigate("/companydata")} href="#"><b>Company Stocks</b></button></li>
                                            <li><button className="dropdown-item my-4" onClick={()=>navigate("./cryptodata")}><b>Crypto Data</b></button></li>
                                            <li><button className="dropdown-item my-4" onClick={()=>navigate("/topgainers")} href="#"><b>Top Gainers</b></button></li>
                                            <li><button className="dropdown-item my-4" onClick={()=>navigate('./toplosers')} href="#"><b>Top Losers</b></button></li>
                                            <li><button className="dropdown-item my-4" onClick={()=> navigate('./mostactive')} href="#"><b>Most Active</b></button></li>
                                            {/*<li><button className="dropdown-item my-4" href="#"><b>Sports news</b></button></li>
                                            <li><button className="dropdown-item my-4"  href="#"><b>Technology news</b></button></li>
                                            <li><button className="dropdown-item" href="#"><b>Forex News</b></button></li> */}
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            {/* <li className="nav-item me-2">
                                <Link className="nav-link active" style={{ color: "white" }}  to='/Market'><b>Market</b></Link>
                            </li> */}
                            <li className="nav-item me-2 my-1">
                                <a className="nav-link" style={{ color: "white" }} onClick = {()=>navigate('./aboutus')} href="#"><b>About Us</b></a>
                            </li>
                            <div className="d-flex">
                                
                                <div className="dropdown dropstart open">
                                    <button type="button" className="btn dropdown-toggle" style={{ color: 'white', boxShadow: 'none' }} data-bs-toggle="dropdown" aria-expanded="false">
                                        <b><img src={props.userdata != undefined ? props.userdata.photoURL : userphoto} width={35} style={{ borderRadius: "25px", marginRight: '7px' }} /></b>
                                        <b>Me</b>
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuOffset">
                                        <li><a className="dropdown-item" href="#"><b>Account</b></a></li>
                                        <li><a className="dropdown-item my-4" href="#"><b>Settings</b></a></li>
                                        <li><a className="dropdown-item" onClick={handlesignout} href="#"><b>Logout</b></a></li>
                                    </ul>
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar