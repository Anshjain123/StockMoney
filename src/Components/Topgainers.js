import { Card } from '@mui/material';
import React, { useState, useEffect, useCallback } from 'react'
import PrintTopGainers from './PrintTopGainers'
import './Topgainers.css'
function Topgainers() {
    const [topgainersdata, settopgainersdata] = useState([])
    const apikey = process.env.REACT_APP_FINANCE_PREP;
    useEffect(async () => {
        let data = await fetch(`https://financialmodelingprep.com/api/v3/stock_market/gainers?apikey=${apikey}`)
        let res = await data.json()
        settopgainersdata(res)
    }, [])

    const height = window.innerHeight;
    return (
        <div className='topgainers_data_container' style={{ height: height }}>
            <div className="head">
                <div className="nm" style={{ fontSize: '25px', fontWeight: 'bold' }} >
                    Name
                </div>
                <div className="symb" style={{ fontSize: '25px', fontWeight: 'bold' }}>
                    Symbol
                </div>
                <div className="chn" style={{ fontSize: '25px', fontWeight: 'bold' }}>
                    Change
                </div>
                <div className="percentcnh" style={{ fontSize: '25px', fontWeight: 'bold' }}>
                    % Change
                </div>
                <div className="pr" style={{ fontSize: '25px', fontWeight: 'bold' }}>
                    Price
                </div>
            </div>
            <div className="topgainersdata">
                {topgainersdata && topgainersdata.map((element, index) => {
                    return <Card key={index} className="r" style={{ height: '70px' }}>
                        <PrintTopGainers element={element} />
                    </Card>
                })}
            </div>
        </div>

    )
}

export default Topgainers