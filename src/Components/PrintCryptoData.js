import React from 'react'
import './PrintCryptoData.css'
function PrintCryptoData(props) {
  // console.log(props.element.metrics.market_data.ohlcv_last_1_hour)
  const x = props.element.metrics.market_data.ohlcv_last_1_hour;
  return (
    <table className='crypto'>
      <tr id="head" style = {{color:'white'}} >
        <th id="name" style={{width:'300px', paddingLeft:'15px'}}>
          {props.element.name}
        </th>
        <th id="symbol" style = {{ width:'250px',textAlign:'start', marginLeft:'100px'}}>
          {props.element.symbol}
        </th>
        <th id="low" style = {{width:'230px',textAlign:'start'}}>
          $ {(x !== null ? parseFloat(x.low).toFixed(2) : 0)}
        </th>
        <th id="high"style = {{width:'260px',textAlign:'start'}} >
          $ {(x !== null ? parseFloat(x.high).toFixed(2) : 0)}
        </th>
        <th id="percentchange"style = {{width:'100px',textAlign:'center', color:(props.element.metrics.market_data.percent_change_eth_last_1_hour < 0 ? 'red' : 'green')}} >
          {parseFloat(props.element.metrics.market_data.percent_change_eth_last_1_hour).toFixed(2)} %
        </th>
        <th id="price"style = {{textAlign:'center'}}>
          $ {parseFloat(props.element.metrics.market_data.price_usd).toFixed(2)}
        </th>
      </tr>
    </table>
  )
}

export default PrintCryptoData