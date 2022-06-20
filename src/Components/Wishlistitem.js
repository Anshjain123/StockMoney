import React, { useState, useContext } from 'react'
import Tooltip from '@mui/material/Tooltip';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import toast, { Toaster } from 'react-hot-toast'
import StockContext from '../Context/stocks/StockContext';
import { useNavigate } from 'react-router-dom';
const Wishlistitem = (props) => {
    const x = props.element.data.market_data.ohlcv_last_1_hour;
    const [saved, setsaved] = useState(true)
    const { state, dispatch } = useContext(StockContext);
    const navigate = useNavigate(); 
    const handleremove = async () => {
        // await removestock("crypto", props.element.data.symbol);
        let filteredArray = props.AllStocks.filter(item => item.data.symbol !== props.element.data.symbol); 
        props.setAllStocks(filteredArray); 
        dispatch({
            type: "removestock",
            symboltype: "crypto",
            symbol: props.element.data.symbol,
        })         
        toast.success("Succesfully removed from Wishlist!")
        // navigate("/home/cryptodata"); 
    }
    return (
        <>

            <table className='table'>
                <tbody>
                    <tr>
                        <th style={{ fontFamily: "Georgia", fontSize: '18px', width: '234px', color: 'black' }}>
                            {props.element.data.name}
                        </th>
                        <th style={{ fontFamily: "Georgia", fontSize: '18px', width: '234px', color: 'black' }}>
                            {props.element.data.symbol}
                        </th>
                        <th style={{ fontFamily: "Georgia", fontSize: '18px', width: '234px', color: 'black' }}>
                            $ {(x !== null ? parseFloat(x.low).toFixed(2) : 0)}
                        </th>
                        <th style={{ fontFamily: "Georgia", fontSize: '18px', width: '234px', color: 'black' }}>
                            $ {(x !== null ? parseFloat(x.high).toFixed(2) : 0)}
                        </th>
                        <th style={{ fontFamily: "Georgia", fontSize: '18px', width: '234px', color: (props.element.data.market_data.percent_change_eth_last_1_hour < 0 ? 'red' : 'green') }}>
                            {parseFloat(props.element.data.market_data.percent_change_eth_last_1_hour).toFixed(2)} %
                        </th>
                        <th style={{ fontSize: '18px', color: 'black', width: '234px' }}>
                            <div className="both" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div className="PRICe" style={{ display: 'flex' }}>
                                    $ {parseFloat(props.element.data.market_data.price_usd).toFixed(2)}
                                </div>
                                <div className="icon">
                                    <Tooltip title="Remove" style={{ cursor: 'pointer', }} placement='top' arrow >
                                        <BookmarkIcon style={{ color: 'black', cursor: 'pointer' }} onClick={handleremove} />
                                    </Tooltip>
                                </div>
                            </div>
                        </th>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default Wishlistitem