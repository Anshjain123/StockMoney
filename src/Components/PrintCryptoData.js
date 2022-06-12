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
  const Stocks = state.stocks;
  console.log("state", state); 
  const handleadd = async () => {

    setsaved(true);
    dispatch({
      type: "addstock",
      symboltype: "crypto",
      symbol: props.element.symbol,
    })
    toast.success("Added Successfully!")
  }
  const handleremove = async () => {

    setsaved(false);
    dispatch({
      type: "removestock",
      symboltype: "crypto",
      symbol: props.element.symbol,
    })
    toast.success("Successfully removed from your watchlist");
  }

  return (
    <>

      <table className='crypto' style={{ width: '100%' }}>
        <tbody>
          <tr id="head" style={{ color: 'white' }} >
            <th id="name" style={{ width: '300px', paddingLeft: '15px' }}>
              {props.element.name}
            </th>
            <th id="symbol" style={{ width: '250px', textAlign: 'start', marginLeft: '100px' }}>
              {props.element.symbol}
            </th>
            <th id="low" style={{ width: '230px', textAlign: 'start' }}>
              $ {(x !== null ? parseFloat(x.low).toFixed(2) : 0)}
            </th>
            <th id="high" style={{ width: '260px', textAlign: 'start' }} >
              $ {(x !== null ? parseFloat(x.high).toFixed(2) : 0)}
            </th>
            <th id="percentchange" style={{ width: '100px', textAlign: 'center', color: (props.element.metrics.market_data.percent_change_eth_last_1_hour < 0 ? 'red' : 'green') }} >
              {parseFloat(props.element.metrics.market_data.percent_change_eth_last_1_hour).toFixed(2)} %
            </th>
            <th id="price" style={{ textAlign: 'end', paddingRight: '10px' }}>
              <div className="both" >
                <div className="PRICe" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  $ {parseFloat(props.element.metrics.market_data.price_usd).toFixed(2)}
                  <div className="icon" style={{ paddingLeft: '20px' }}>
                    {/* <Tooltip title="Save" style={{ cursor: 'pointer' }} placement='top' arrow > */}
                    {Stocks == undefined || Stocks.indexOf((props.element.symbol)) === -1 ? <BookmarkBorderIcon onClick={handleadd} /> : <BookmarkIcon style={{ color: 'white' }} onClick={handleremove} />}

                    {/* </Tooltip> */}
                  </div>
                </div>
              </div>
            </th>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default PrintCryptoData