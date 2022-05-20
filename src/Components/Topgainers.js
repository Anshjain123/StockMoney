import React, {useState, useEffect, useCallback} from 'react'
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
    return (
        <div>
            <div className='topgainers_data_container'>
                <h1 style={{ color: 'white', fontSize: '50px' }}>Top Gainers</h1>
                <div className="flex" style={{height:'50px',display:'flex', justifyContent:'space-between'}}>
                    <div className="nm" style = { {color:'white', fontSize:'25px', fontWeight:'bold'} } >
                        Name
                    </div>
                    <div className="symb" style = { {color:'white', fontSize:'25px', fontWeight:'bold'} }>
                        Symbol
                    </div>
                    <div className="chn" style = { {color:'white', fontSize:'25px', fontWeight:'bold'} }>
                        Change
                    </div>
                    <div className="percentcnh" style = { {color:'white', fontSize:'25px', fontWeight:'bold'} }>
                        % Change
                    </div>
                    <div className="pr" style = { {color:'white', fontSize:'25px', fontWeight:'bold'} }>
                        Price
                    </div>
                </div>
                <div className="topgainersdata">
                    {topgainersdata && topgainersdata.map((element, index)=>{
                        return <div key = {index} className="r" style = { {height:'70px'} }>
                            <PrintTopGainers element = {element}/>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Topgainers