import React from 'react'
import Tooltip from '@mui/material/Tooltip';
import BookmarkIcon from '@mui/icons-material/Bookmark';
const Wishlistitem = (props) => {
    const x = props.element.data.market_data.ohlcv_last_1_hour;
    return (
        <table className='table'>
            <tbody>
                <tr>
                    <th style={{  fontFamily: "Georgia", fontSize: '18px', width:'234px', color:'white' }}>
                        {props.element.data.name}
                    </th>
                    <th style={{  fontFamily: "Georgia", fontSize: '18px' , width:'234px', color:'white'}}>
                        {props.element.data.symbol}
                    </th>
                    <th style={{  fontFamily: "Georgia", fontSize: '18px', width:'234px' , color:'white'}}>
                        $ {(x !== null ? parseFloat(x.low).toFixed(2) : 0)}
                    </th>
                    <th style={{ fontFamily: "Georgia", fontSize: '18px', width:'234px' , color:'white'}}>
                        $ {(x !== null ? parseFloat(x.high).toFixed(2) : 0)}
                    </th>
                    <th style={{ fontFamily: "Georgia", fontSize: '18px', width:'234px' , color:'white'}}>
                        {parseFloat(props.element.data.market_data.percent_change_eth_last_1_hour).toFixed(2)} %
                    </th>
                    <th style={{ fontSize: '18px', color:'white', width:'234px'}}>
                        <div className="both" >
                            <div className="PRICe" style={{ display: 'flex' }}>
                                $ {parseFloat(props.element.data.market_data.price_usd).toFixed(2)}
                                <div className="icon" style={{ paddingLeft: '20px'}}>
                                    <Tooltip title="Remove" style={{ cursor: 'pointer', }} placement='top' arrow >
                                        <BookmarkIcon style={{ color: 'white' }} />
                                    </Tooltip>
                                </div>
                            </div>
                        </div>
                    </th>
                </tr>
            </tbody>
        </table>
    )
}

export default Wishlistitem