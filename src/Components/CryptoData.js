import React, { useEffect, useState, useContext } from 'react'
import './CryptoData.css'
import PrintCryptoData from './PrintCryptoData'
import StockContext from '../Context/stocks/StockContext'

function CryptoData() {
  const {getstocks} = useContext(StockContext); 
  const [query, setquery] = useState("");
  const [Data, setdata] = useState([]);
  
  const url = "https://data.messari.io/api/v2/assets?fields=id,symbol,name,metrics/market_data&limit=500"
  useEffect(async () => {
    let abortcontroller = new AbortController(); 
    let signal = abortcontroller.signal; 
    let data = await fetch(url, {signal:signal});
    let res = await data.json();
    setdata(res)
    getstocks();
    return ()=>{
      abortcontroller.abort();
    } 
  }, [])
  
  return (
    <div>

      {(Data.data !== undefined && <div className='crypto_data_container'>
        <div className="head" >
          <div id="name">
            Name
          </div>
          <div id="symbol">
            Symbol
          </div>
          <div id="low">
            Low
          </div>
          <div id="high">
            High
          </div>
          <div id="percentchange">
            % change
          </div>
          <div id="price">
            Price
          </div>
        </div>
        <div className="cryptodata" >

          {Data.data.map((element, index) => {
            return <div key={index} className="rrow" style={{ width: '1470px' }}>
              <PrintCryptoData element={element} />
            </div>
          })}

        </div>
      </div>)}
    </div>
  )
}

export default CryptoData