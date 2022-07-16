import React from 'react'
import { useNavigate } from 'react-router-dom'
import Zoom from 'react-reveal/Zoom';
import Button from '@mui/material/Button';
import toast, { Toaster } from 'react-hot-toast'
import TextField from '@mui/material/TextField';
import 'react-toastify/dist/ReactToastify.css';
import { Avatar, Card, } from '@mui/material';
import { OceanEffect } from 'react-background-animation'

function Login(props) {
    const navigate = useNavigate();
    const handlesubmit = async (e) => {
        e.preventDefault();
        const username = e.target[0].value;
        const password = e.target[2].value;
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: username, password: password })
        })

        const res = await response.json();
        if (res.authtoken === null) {
            console.log("Pls try again to Login!!");
            // toast("No Such user exists!");
            toast.error("No such user exists! pls try again with correct credentials")
            // navigate("/");

        } else {
            localStorage.setItem("token", res.authtoken);
            localStorage.setItem("user", username);
            toast.success("Logged in Successfully!!")
            props.setislogged(true);

            navigate("/home");
        }

    }
    const height = window.innerHeight;
    return (
        <>
            <OceanEffect />
            <div className="login" style={{ height: height, backgroundColor: 'rgb(234, 237, 237)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>

                <Card style={{ padding: '60px', flex: 0.7, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '0px' }}>
                        <Avatar style={{ height: '120px', width: '120px' }} src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" />
                    </div>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', height: '100%' }}>
                        <form onSubmit={handlesubmit} style={{ display: 'flex', flexDirection: "column", justifyContent: 'space-around' }}>
                            <Toaster />
                            <div className="mail" style={{ width: '100%', display: 'flex' }}>
                                <TextField label="Enter your email" variant="outlined" name='username' type="email" />
                            </div>
                            <div className="password" style={{ width: '100%', display: 'flex' }}>
                                <TextField label="Password" variant="outlined" name="password" type="password" />
                            </div>

                            <div>
                                <Button variant="contained" type='submit'>Login</Button>
                            </div>
                            <div >
                                <p style={{ color: "#393f81" }}>Don't have an account? <a href="#!"
                                    style={{ color: "#393f81", }} onClick={() => navigate("/signup")}>Register here</a></p>
                            </div>
                        </form>
                    </div>

                </Card>

            </div>

        </>

    )
}

export default Login

{/* <section className="vh-90" style={{ backgroundColor: "white" }}>
<div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: "1rem", boxShadow: '1px 20px 60px rgba(16, 16, 16, 0.4)' }}>
                <div className="row g-0">
                    <div className="col-md-6 col-lg-5 d-none d-md-block">
                        <img src="https://thumbs.dreamstime.com/z/business-people-think-stock-market-investment-162014229.jpg"
                            alt="login form" className="img-fluid" style={{ borderRadius: "1rem 0 0 1rem", height: '100%' }} />
                    </div>
                    <div className="col-md-6 col-lg-7 d-flex align-items-center">
                        <div className="card-body p-4 p-lg-5 text-black">

                            <form onSubmit={handlesubmit}>
                                <Toaster />
                                <div className="logo" style={{ display: 'flex', alignItems: 'flex-start', paddingBottom: '10px' }}>
                                    <span className="h1 fw-bold mb-0">Welcome!</span>
                                </div>

                                <h5 className="fw-normal mb-3 pb-3" style={{ paddingTop: '10px' }}>Sign into your account</h5>

                                <div className="form-outline mb-4">
                                    <TextField label="Enter your email" variant="standard" name='username' type="email" />
                                    
                                </div>

                                <div className="form-outline mb-4">
                                    <TextField label="Password" variant="standard" name="password" type="password" />
                                </div>

                                <div className="pt-1 mb-4">
                                    <Button variant="contained" type='submit'>Login</Button>
                                </div>


                                <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>Don't have an account? <a href="#!"
                                    style={{ color: "#393f81" }} onClick={() => navigate("./signup")}>Register here</a></p>

                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</section> */}