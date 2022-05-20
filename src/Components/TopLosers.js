import React, {useState, useEffect, useCallback} from 'react'
import PrintTopLosers from './PrintTopLosers'
import './TopLosers.css'
function TopLosers() {
    const apikey = process.env.REACT_APP_FINANCE_PREP; 
    const [toplosersdata, settoplosersdata] = useState([])
    // const fetchdata = useCallback(async () => {
        // let data = await fetch("https://financialmodelingprep.com/api/v3/stock_market/gainers?apikey=a6e448a8a8976cc4495760e37cf6e61a")
        // let res = await data.json()
        // settopgainersdata(res)
        // console.log("1");         
        // console.log(res);
        // console.log("2");
        // console.log(topgainersdata)
    // }, [])
    useEffect(async () => {
        // fetchdata();         
        let data = await fetch(`https://financialmodelingprep.com/api/v3/stock_market/losers?apikey=${apikey}`)
        let res = await data.json()
        settoplosersdata(res)
    }, [])
    // console.log(toplosersdata) 
    return (
        <div>
            <div className='toplosers_data_container'>
                {/* <div className="search_bar">
                    <div className="flex" >
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </div>
                </div> */}
                <h1 style={{ color: 'white', fontSize: '50px' }}>Top Losers</h1>
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