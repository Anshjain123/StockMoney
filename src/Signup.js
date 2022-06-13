import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Zoom } from 'react-reveal';
import toast, { Toaster } from 'react-hot-toast';

function Signup({ setislogged }) {
    const navigate = useNavigate();
    const handlesubmit = async (e) => {
        console.log("aaya")
        e.preventDefault();
        const username = e.target[0].value;
        const password = e.target[1].value;
        const response = await fetch("http://localhost:5000/api/auth/register", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: username, password: password })
        })
        const res = await response.json();
        if (res.authtoken === null) {
            toast.error("Pls try again to register!")
            navigate("/signup");
        } else {
            toast.success("Successfully Registered!")

            localStorage.setItem("token", res.authtoken);
            localStorage.setItem("user", username);
            console.log(localStorage.getItem("token"));

            setislogged(true);

            navigate("/home");
        }


    }
    return (
        <div>
            <Zoom>
                <Toaster />
                <section className="vh-90" style={{ backgroundColor: "white" }}>
                    <div className="container py-5 h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col col-xl-10">
                                <div className="card" style={{ borderRadius: "1rem", boxShadow: "1px 1px 1px #919191, 1px 2px 1px #919191,1px 3px 1px #919191, 1px 4px 1px #919191,1px 5px 1px #919191,1px 6px 1px #919191,1px 7px 1px #919191,1px 8px 1px #919191,1px 9px 1px #919191,1px 10px 1px #919191,1px 18px 6px rgba(16, 16, 16, 0.4),1px 22px 10px rgba(16,16,16,0.2),1px 25px 35px rgba(16,16,16,0.2),1px 30px 60px rgba(16,16,16,0.4)" }}>
                                    <div className="row g-0">
                                        <div className="col-md-6 col-lg-5 d-none d-md-block">
                                            <img src="https://thumbs.dreamstime.com/z/business-people-think-stock-market-investment-162014229.jpg"
                                                alt="login form" className="img-fluid" style={{ borderRadius: "1rem 0 0 1rem", height: '100%' }} />
                                        </div>
                                        <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                            <div className="card-body p-4 p-lg-5 text-black">

                                                <form onSubmit={handlesubmit}>
                                                    <Toaster/>
                                                    <div className="logo" style={{ display: 'flex', alignItems: 'flex-start', paddingBottom: '10px' }}>
                                                        <span className="h1 fw-bold mb-0">Register Here!</span>
                                                    </div>

                                                    <h5 className="fw-normal mb-3 pb-3" style={{ paddingTop: '10px' }}>Sign Up your account it's free</h5>

                                                    <div className="form-outline mb-4">
                                                        <input type="email" id="form2Example17" className="form-control form-control-lg" name='username' />
                                                        <label className="form-label" htmlFor="form2Example17">Email address</label>
                                                    </div>

                                                    <div className="form-outline mb-4">
                                                        <input type="password" id="form2Example27" className="form-control form-control-lg" name='password' />
                                                        <label className="form-label" htmlFor="form2Example27">Password</label>
                                                    </div>

                                                    <div className="pt-1 mb-4">
                                                        <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
                                                    </div>


                                                    <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>Already have an account? <a href="#!"
                                                        style={{ color: "#393f81" }} onClick={() => navigate("/")}>Login</a></p>

                                                </form>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Zoom>
        </div>
    )
}

export default Signup