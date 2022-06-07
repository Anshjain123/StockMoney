import React, { useState, useContext } from 'react'
import Tooltip from '@mui/material/Tooltip';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import toast, { Toaster } from 'react-hot-toast'
import StockContext from '../Context/stocks/StockContext';
const Wishlistitem = (props) => {
    const x = props.element.data.market_data.ohlcv_last_1_hour;
    const [saved, setsaved] = useState(true)
    const { removestock } = useContext(StockContext);
    const handleremove = async () => {
        setsaved(false);
        await removestock("crypto", props.element.data.symbol);
        toast.success("Succesfully removed from Wishlist!")
    }
    return (
        <>

            {saved && <table className='table'>
                <tbody>
                    <tr>
                        <th style={{ fontFamily: "Georgia", fontSize: '18px', width: '234px', color: 'white' }}>
                            {props.element.data.name}
                        </th>
                        <th style={{ fontFamily: "Georgia", fontSize: '18px', width: '234px', color: 'white' }}>
                            {props.element.data.symbol}
                        </th>
                        <th style={{ fontFamily: "Georgia", fontSize: '18px', width: '234px', color: 'white' }}>
                            $ {(x !== null ? parseFloat(x.low).toFixed(2) : 0)}
                        </th>
                        <th style={{ fontFamily: "Georgia", fontSize: '18px', width: '234px', color: 'white' }}>
                            $ {(x !== null ? parseFloat(x.high).toFixed(2) : 0)}
                        </th>
                        <th style={{ fontFamily: "Georgia", fontSize: '18px', width: '234px', color: (props.element.data.market_data.percent_change_eth_last_1_hour < 0 ? 'red' : 'green') }}>
                            {parseFloat(props.element.data.market_data.percent_change_eth_last_1_hour).toFixed(2)} %
                        </th>
                        <th style={{ fontSize: '18px', color: 'white', width: '234px' }}>
                            <div className="both" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div className="PRICe" style={{ display: 'flex' }}>
                                    $ {parseFloat(props.element.data.market_data.price_usd).toFixed(2)}
                                </div>
                                <div className="icon">
                                    <Tooltip title="Remove" style={{ cursor: 'pointer', }} placement='top' arrow >
                                        <BookmarkIcon style={{ color: 'white', cursor: 'pointer' }} onClick={handleremove} />
                                    </Tooltip>
                                </div>
                            </div>
                        </th>
                    </tr>
                </tbody>
            </table>}
        </>
    )
}

export default Wishlistitem