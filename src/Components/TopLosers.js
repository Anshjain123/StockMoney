import React, {useState, useEffect, useCallback} from 'react'
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
    return (
        <div>
            <div className='toplosers_data_container'>
                <h1 style={{ fontSize: '50px', fontFamily:"Georgia" }}>Top Losers</h1>
                <div className="flex" style={{height:'50px',display:'flex', justifyContent:'space-between', fontFamily:'Georgia'}}>
                    <div className="nm" style = { {fontSize:'25px', fontWeight:'bold'} } >
                        Name
                    </div>
                    <div className="symb" style = { {fontSize:'25px', fontWeight:'bold'} }>
                        Symbol
                    </div>
                    <div className="chn" style = { {fontSize:'25px', fontWeight:'bold'} }>
                        Change
                    </div>
                    <div className="percentcnh" style = { {fontSize:'25px', fontWeight:'bold'} }>
                        % Change
                    </div>
                    <div className="pr" style = { {fontSize:'25px', fontWeight:'bold'} }>
                        Price
                    </div>
                </div>
                <div className="toplosersdata">
                    {toplosersdata && toplosersdata.map((element, index)=>{
                        return <div key = {index} className="r" style = { {height:'70px'} }>
                            <PrintTopLosers element = {element}/>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default TopLosers