import React, { useEffect, useState, useContext } from 'react'
import './CryptoData.css'
import PrintCryptoData from './PrintCryptoData'
import StockContext from '../Context/stocks/StockContext'
import { Card } from '@mui/material'

function CryptoData() {
  const { state, getstocks } = useContext(StockContext);
  const [query, setquery] = useState("");
  const [Data, setdata] = useState([]);

  const url = "https://data.messari.io/api/v2/assets?fields=id,symbol,name,metrics/market_data&limit=50"

  useEffect(() => {
    const getData = async () => {
      let data = await fetch(url);
      let res = await data.json();
      let newres = res.data.filter((curr) => curr.symbol !== "DOT");
      // setdata(res);  
    
      const arr = []; 
      for(let i = 0; i < res.data.length; i++) {
        if(res.data[i].symbol !== "DOT") {
          arr.push(res.data[i]); 
        }
      }
      setdata(arr); 
    }
    getData();

    console.log(Data); 
  }, [])
  const height = window.innerHeight;
  return (
    <div style={{ height: height, display: 'flex' }}>

      {(Data !== undefined && <div className='crypto_data_container'>
        <div className="head" style={{ display: 'flex' }} >
          <div id="name" style={{ flex: 0.1 }}>
            Name
          </div>
          <div id="symbol" style={{ flex: 0.1 }}>
            Symbol
          </div>
          <div id="low" style={{ flex: 0.1 }}>
            Low
          </div>
          <div id="high" style={{ flex: 0.1 }}>
            High
          </div>
          <div id="percentchange" style={{ flex: 0.1 }}>
            % change
          </div>
          <div id="price" style={{ flex: 0.1 }}>
            Price
          </div>
        </div>
        <div className="cryptodata" >

          {Data.map((element, index) => {
            return <Card key={index} className="rrow" style={{ width: '1470px', height: '60px' }}>
              <PrintCryptoData element={element} />
            </Card>
          })}

        </div>
      </div>)}
    </div>
  )
}

export default CryptoData