import React, { useEffect, useState } from 'react'
import './LandingPage.css'
import Zoom from 'react-reveal/Zoom';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import logo from './images/MoneyHood.svg'
import { OceanEffect } from 'react-background-animation'

function LandingPage(props) {
    const navigate = useNavigate();
    const height = window.innerHeight;
    const width = window.innerWidth;
    return (
        <div>
            <OceanEffect style={{ zIndex: -1 }} />
            <div style={{ display: 'flex', flexDirection: 'column', zIndex: 1, alignItems: 'center', width: width, height: height, justifyContent: 'space-evenly' }}>

                <h1 className="Name" style={{ fontSize: '220px', color: 'rgb(19, 25, 33)', width: '100%', textAlign: 'center' }}>
                    StockMoney
                </h1>
                <div>
                    <Button variant="contained" onClick={() => navigate('./login')}>Login to continue</Button>
                </div>

            </div>
        </div>




    )
}

export default LandingPage