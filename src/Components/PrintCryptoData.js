import React, { useState, useContext, useEffect } from 'react'
import StockContext from '../Context/stocks/StockContext';
import './PrintCryptoData.css'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import Tooltip from '@mui/material/Tooltip';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import toast, { Toaster } from 'react-hot-toast';
function PrintCryptoData(props) {
  const { state, dispatch, getstocks } = useContext(StockContext);
  const x = props.element.metrics.market_data.ohlcv_last_1_hour;
  const [saved, setsaved] = useState(false)
  
  const handleadd = async () => {
    if(props.islogged) {
      dispatch({
        type: "addstock",
        symboltype: "crypto",
        symbol: props.element.symbol,
      })
      toast.success("Added Successfully!")
    } else {
      toast.error("Please login to add item in your wishlist!")
    } 
    
  }
  const handleremove = async () => {
    if(props.islogged) {
      dispatch({
        type: "removestock",
        symboltype: "crypto",
        symbol: props.element.symbol,
      })
      toast.success("Successfully removed from your watchlist");
    } else {
      toast.error("Please login to remove an item from your wishlist!")
    }
    
  }

    useEffect(async ()=>{
      let res = await getstocks();
        dispatch({
            type: "getstocks",
            items: res
        })
    },[])

    const Stocks = state.cryptoStocks;
  return (
    <>

      <table className='crypto' style={{ width: '100%' }}>
        <tbody>
          <tr id="head" style={{ display: 'flex', justifyContent: 'space-around', height: '100%', alignItems: 'center' }} >
            <th id="name" style={{ flex: 0.1, alignItems: 'flex-start' }}>
              {props.element.name}
            </th>
            <th id="symbol" style={{ flex: 0.1, alignItems: 'flex-start' }}>
              {props.element.symbol}
            </th>
            <th id="low" style={{ flex: 0.1, alignItems: 'flex-start' }} >
              $ {(x !== null ? parseFloat(x.low).toFixed(2) : 0)}
            </th>
            <th id="high" style={{ flex: 0.1, alignItems: 'flex-start' }} >
              $ {(x !== null ? parseFloat(x.high).toFixed(2) : 0)}
            </th>
            <th id="percentchange" style={{ flex: 0.1, alignItems: 'flex-start', color: (props.element.metrics.market_data.percent_change_eth_last_1_hour < 0 ? 'red' : 'green') }} >
              {parseFloat(props.element.metrics.market_data.percent_change_eth_last_1_hour).toFixed(2)} %
            </th>
            <th style={{ flex: 0.11, alignItems: 'center', display:'flex' }}>
              <div className="PRICe" style={{ flex: 0.8, textAlign: 'start' }}>
                ${parseFloat(props.element.metrics.market_data.price_usd).toFixed(2)}
              </div>
              <div className="icon" >
                {Stocks == undefined || Stocks.indexOf((props.element.symbol)) === -1 || !props.islogged ? <BookmarkBorderIcon onClick={handleadd} /> : <BookmarkIcon onClick={handleremove} />}
              </div>

            </th>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default PrintCryptoData