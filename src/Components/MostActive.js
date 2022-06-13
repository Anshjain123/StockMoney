import React, {useState, useEffect, useCallback} from 'react'
import './MostActive.css'
import MostActiveData from './MostActiveData'
function MostActive() {
    const [mostactivedata, setmostactivedata] = useState([])
    const apikey = process.env.REACT_APP_FINANCE_PREP;
    useEffect(async () => {
        let data = await fetch(`https://financialmodelingprep.com/api/v3/stock_market/actives?apikey=${apikey}`)
        let res = await data.json()
        setmostactivedata(res)
    }, [])

    return (
        <div>
            <div className='mostactive_data_container'>
                <h1 style={{ fontSize: '50px', fontFamily:'Georgia' }}>Most Active</h1>
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
                    <div className="pr" style = { { fontSize:'25px', fontWeight:'bold'} }>
                        Price
                    </div>
                </div>
                <div className="mostactivedata" >
                    {mostactivedata && mostactivedata.map((element, index)=>{
                        return <div key = {index} className="r" style = { {height:'70px'} }>
                            <MostActiveData element = {element}/>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default MostActive