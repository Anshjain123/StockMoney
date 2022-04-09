import React, {useEffect} from 'react'
import './CryptoData.css'


function CryptoData() {
  const url = "https://data.messari.io/api/v2/assets?fields=id,symbol,name,metrics/market_data"
  useEffect(async () => {
    let data = await fetch(url);
    let res = await data.json();

    console.log(res);
    // console.log(res);s
  }, [])
  return (
    <div>
        <div className='crypto_data_container'>
            <div className="search_bar">
                <div className="flex" >
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </div>
            </div>
            <div className="cryptodata">

            </div>
        </div>
    </div>
  )
}

export default CryptoData