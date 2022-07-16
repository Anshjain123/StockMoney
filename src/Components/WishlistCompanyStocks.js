import React, { useContext } from 'react'
import StockContext from '../Context/stocks/StockContext';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import toast, { Toaster } from 'react-hot-toast';
import { Tooltip } from '@mui/material';

const WishlistCompanyStocks = (props) => {
    const { state, dispatch } = useContext(StockContext);
    const Stocks = state.companyStocks
    // console.log(state); 
    const handleadd = async () => {
        dispatch({
            type: "addstock",
            symboltype: "company",
            symbol: props.element.name,
        })
        toast.success("Item Successfully added to your wishlist");
    }
    const handleremove = async () => {
        // console.log(props.element); 
        let filteredArray = props.AllStocks.filter(item => item.name !== props.element.name);
        console.log(filteredArray); 
        props.setAllStocks(filteredArray)
        dispatch({
            type: "removestock",
            symboltype: "company",
            symbol: props.element.name,
        })
        toast.success("Item Successfully removed from your watchlist");
    }
    // console.log(props.element);

    return (
        <table className="contain" style={{ width: '100%', fontFamily: 'Georgia', height: '100%' }}>
            <tbody>
                <tr style={{ fontSize: '20px', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', height: '100%', alignItems: 'center' }}>
                    <th className="pricc" style={{ display: 'flex', color: 'black', justifyContent: 'flex-start', flex: 0.1 }}>
                        {props.element.realname}
                    </th>
                    <th className="naam" style={{ display: 'flex', justifyContent: 'flex-start', color: 'black', flex: 0.1 }}>
                        {props.element.name}
                    </th>
                    <th className="changes" style={{ color: (props.element.d >= 0 ? 'green' : 'red'), display: 'flex', flex: 0.1, justifyContent: 'flex-start' }}>
                        {(props.element.d >= 0 ? '+' + props.element.d : props.element.d)} $

                    </th>
                    <th className="percentchange" style={{ color: (props.element.dp > 0 ? 'green' : 'red'), display: 'flex', flex: 0.1, justifyContent: 'flex-start' }}>
                        {(props.element.dp > 0 ? '+' + props.element.dp : props.element.dp)} %
                    </th>
                    <th className="prices" style={{ display: 'flex', justifyContent: 'space-between', color: 'black', alignItems: 'flex-start', marginLeft: '70px', flex: 0.12 }} >
                        $ {props.element.c}
                        {/* <BookmarkBorderIcon onClick={HandleAdd} /> */}
                        <Tooltip title="Remove" style={{ cursor: 'pointer', }} placement='top' arrow >
                            <BookmarkIcon style={{ color: 'black', cursor: 'pointer' }} onClick={handleremove} />
                        </Tooltip>
                    </th>
                </tr>
            </tbody>
        </table>
    )
}

export default WishlistCompanyStocks