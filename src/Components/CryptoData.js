import React, { useEffect, useState } from 'react'
import './CryptoData.css'
import PrintCryptoData from './PrintCryptoData'


function CryptoData() {
  const [query, setquery] = useState("");
  const [Data, setdata] = useState([])
  const url = "https://data.messari.io/api/v2/assets?fields=id,symbol,name,metrics/market_data&limit=500"
  useEffect(async () => {
    let data = await fetch(url);
    let res = await data.json();
    setdata(res)
    // console.log(Data);
    // console.log(res);
    // console.log(res);s
  }, [])
  const handleChanged = (e) => {
    setquery(e.target.value);
  }
  const handleClicked = () => {
    console.log(query)
    for (let i = 0; i < Data.data.length; i++) {
      if (Data[i] !== null) {
        console.log(Data[i].data.name, query)
        if (Data[i].data.name === query) {
          setdata(Data[i]);
          break;
        }
      }


    }
    // console.log(Data)
  }
  return (
    <div>

      {(Data.data !== undefined && <div className='crypto_data_container'>
        {/* <div className="search_bar">
          <div className="flex" >
            <input className="form-control me-2" onChange={handleChanged} type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" onClick={handleClicked} type="submit">Search</button>
          </div>
        </div> */}
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
              return <div key={index} className="rrow">
                <PrintCryptoData element={element} />
              </div>
            })}

            Data
          </div>
        </div>)}
      </div>
      )
      }

      export default CryptoData