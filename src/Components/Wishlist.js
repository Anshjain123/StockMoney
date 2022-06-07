import React, {useContext, useState, useEffect} from 'react'
import './Wishlist.css'
import StockContext from '../Context/stocks/StockContext'
import Wishlistitem from './Wishlistitem';
import { width } from '@mui/system';
function Wishlist() {
    const { getstocks} = useContext(StockContext);  
    const [AllStocks, setAllStocks] = useState([])
    useEffect(async ()=>{
        const Stocks = await getstocks(); 
        let arr = []; 
        for(let i = 0; i < Stocks.length; i++) { 
            const response = await fetch(`https://data.messari.io/api/v1/assets/${Stocks[i]}/metrics`, );
            const res = await response.json(); 
            arr.push(res);  
        }
        setAllStocks(arr); 
    },[])
    console.log(AllStocks);
    return (
        <div className='Wishlist_wrapper'>

            <div className="wishlistbox" style={{ borderRadius: '20px' }}>
                <div className="header" >
                    <table className='table'>
                        <tbody>
                            <tr style = {{borderStyle:'none'}}>
                                <th style={{ fontFamily:"Georgia", fontSize:'23px', width:'234px'}}>
                                    Name
                                </th>
                                <th style={{ fontFamily:"Georgia", fontSize:'23px', width:'234px'}}>
                                    Symbol
                                </th>
                                <th style={{ fontFamily:"Georgia", fontSize:'23px', width:'234px'}}>
                                    Low
                                </th>
                                <th style={{ fontFamily:"Georgia", fontSize:'23px', width:'234px'}}>
                                    High
                                </th>
                                <th style={{ fontFamily:"Georgia", fontSize:'23px', width:'234px'}}>
                                    %Change
                                </th>
                                <th style = {{fontSize:'23px', width:'234px'}}>
                                    Price
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="content" style = {{height:'90%', backgroundColor:'black', borderRadius:'20px'}}>  
                    {AllStocks.map((element, index)=>{
                        return <div key={index} className='elements' style = {{height:'60px'}}>
                            <Wishlistitem element = {element}/>
                        </div>           
                    })}

                </div>
            </div>
        </div>
    )
}

export default Wishlist