import { Card } from '@mui/material';
import React, { useState, useEffect, useCallback } from 'react'
import PrintTopLosers from './PrintTopLosers'
import './TopLosers.css'
function TopLosers() {
    const apikey = process.env.REACT_APP_FINANCE_PREP;
    const [toplosersdata, settoplosersdata] = useState([])
    useEffect(async () => {
        let data = await fetch(`https://financialmodelingprep.com/api/v3/stock_market/losers?apikey=${apikey}`)
        let res = await data.json()
        settoplosersdata(res)
    }, [])

    const height = window.innerHeight;
    return (
        <div className='toplosers_data_container' style={{ height: height }}>
            <div className="Head" style={{ flex: 0.07, display: 'flex', justifyContent: 'space-around', fontWeight:'bold', fontSize:'25px' }} >
                <div >
                    Name
                </div>
                <div >
                    Symbol
                </div>
                <div >
                    Change
                </div>
                <div >
                    % Change
                </div>
                <div >
                    Price
                </div>
            </div>
            <div className="toplosersdata" >
                {toplosersdata && toplosersdata.map((element, index) => {
                    return <Card key={index} className="r" style={{ height: '70px' }}>
                        <PrintTopLosers element={element} />
                    </Card>
                })}
            </div>
        </div>

    )
}

export default TopLosers