import React, { useState, } from 'react'
import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth';
import { auth, provider } from './Firebase';
import { signInWithPopup } from 'firebase/auth';
import Moneyhood from './images/MoneyHood.svg'
import GoogleButton from 'react-google-button'
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';

function LandingPage() {
    let navigate = useNavigate();

    return (
        <>
            <Zoom>
                <div style={{ backgroundColor: '#e9ecef', height: '450px' }}>
                    <div style={{ width: '100%', height: '100%' }}>
                        <div className="heading" style={{ width: '100%', height: '100%' }}>

                            <h1 style={{ fontSize: '220px', textAlign: 'left', color: 'black' }}>StockMoney</h1>
                            <div style={{ marginLeft: '-1300px' }}>
                                <button type="button" onClick={() => navigate("./login")} className="btn btn-lg btn-primary" style={{ marginRight: '10px' }}>Login</button>
                                <button type="button" onClick={() => navigate("./signup")} className="btn btn-lg btn-primary">Register</button>
                            </div>

                        </div>

                    </div>
                </div>
            </Zoom>
        </>
    )
}

export default LandingPage