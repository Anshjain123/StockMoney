import React, { useContext } from 'react'
import StockContext from '../Context/stocks/StockContext';
import './Printcompanystocks'
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import toast, { Toaster } from 'react-hot-toast';

function Printcompanystocks(props) {
    const ch = props.element.d;
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

        dispatch({
          type: "removestock",
          symboltype: "company",
          symbol: props.element.name,
        })
        toast.success("Item Successfully removed from your watchlist");
      }
    return (
        <table className="contain" style={{ width: '100%', fontFamily:'Georgia', height:'100%' }}>
            <tbody>
                <tr style={{ fontSize: '20px', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', height:'100%', alignItems:'center' }}>
                    <th className="pricc" style={{ display: 'flex', color: 'black', justifyContent:'flex-start', flex:0.1 }}>
                        {props.element.realname}
                    </th>
                    <th className="naam" style={{ display: 'flex', justifyContent: 'flex-start', color: 'black',flex:0.1 }}>
                        {props.element.name}

                    </th>
                    <th className="changes" style={{ color: (props.element.d >= 0 ? 'green' : 'red'), display: 'flex', flex:0.1, justifyContent: 'flex-start' }}>
                        {(props.element.d >= 0 ? '+' + props.element.d : props.element.d)} $

                    </th>
                    <th className="percentchange" style={{ color: (props.element.dp > 0 ? 'green' : 'red'), display: 'flex', flex:0.1, justifyContent: 'flex-start' }}>
                        {(props.element.dp > 0 ? '+' + props.element.dp : props.element.dp)} %
                    </th>
                    <th className="prices" style={{ display: 'flex', justifyContent: 'space-between', color: 'black', alignItems: 'flex-start', marginLeft: '70px', flex:0.12 }} >
                        $ {props.element.c}
                        {/* <BookmarkBorderIcon onClick={HandleAdd} /> */}
                        {Stocks == undefined || Stocks.indexOf((props.element.name)) === -1 ? <BookmarkBorderIcon onClick={handleadd} /> : <BookmarkIcon onClick={handleremove} />}
                    </th>
                </tr>
            </tbody>
        </table>
    )
}

export default Printcompanystocks