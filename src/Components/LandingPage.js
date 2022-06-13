import React, { useEffect, useState, } from 'react'
import { useNavigate } from 'react-router-dom'
import './LandingPage.css'
import Zoom from 'react-reveal/Zoom';
import Login from '../Login';
import Typist from 'react-typist';
function LandingPage(props) {
    let navigate = useNavigate();
    const [landing, setlanding] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setlanding(false);
        }, 2400);
    }, [])
    return (

        <>
            <Zoom>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    {landing && <h1 className="Name" style={{ fontSize: '220px', textAlign: 'left', color: 'black',display:'flex', marginTop:'180px' }}>
                        <Typist
                            cursor={
                                {
                                    show: true,
                                    blink: true,

                                }
                            }
                            startDelay={1500}
                        >
                            StockMoney
                        </Typist>
                    </h1>}
                    <Zoom>
                        {!landing && <Login setislogged={props.setislogged} />}
                    </Zoom>

                </div>
            </Zoom>
        </>
    )
}

export default LandingPage