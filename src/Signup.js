import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Zoom } from 'react-reveal';
import toast, { Toaster } from 'react-hot-toast';

function Signup({ setislogged }) {
    const navigate = useNavigate();
    const handlesubmit = async (e) => {
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
                <section className="vh-100" style={{ backgroundColor: '#eee' }}>
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-lg-12 col-xl-11">``
                                <div className="card text-black" style={{ borderRadius: '25px' }}>
                                    <div className="card-body p-md-5">
                                        <div className="row justify-content-center">
                                            <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign Up</p>

                                                <form className="mx-1 mx-md-4" onSubmit={handlesubmit} >



                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                        <div className="form-outline flex-fill mb-0">
                                                            <input type="email" name="username" id="form3Example3c" className="form-control" />
                                                            <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                                                        </div>
                                                    </div>

                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                        <div className="form-outline flex-fill mb-0">
                                                            <input type="password" name="password" id="form3Example4c" className="form-control" />
                                                            <label className="form-label" htmlFor="form3Example4c">Password</label>
                                                        </div>
                                                    </div>



                                                    <div className="form-check d-flex justify-content-center mb-5">
                                                        <input className="form-check-input me-2" type="checkbox" value=""
                                                            id="form2Example3c" />
                                                        <label className="form-check-label" htmlFor="form2Example3">
                                                            I agree all statements in <a href="#!">Terms of service</a>
                                                        </label>
                                                    </div>

                                                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                        <button type="submit" className="btn btn-primary btn-lg" >Register</button>
                                                    </div>

                                                </form>

                                            </div>
                                            <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                                    className="img-fluid" alt="Sample image" />

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