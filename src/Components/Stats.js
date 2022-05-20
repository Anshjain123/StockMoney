import React, { useState, useEffect } from 'react'
import PrintStockDataFrontPage from './PrintStockDataFrontPage';
import './Stats.css'
const stockList = ["AAPL", "MSFT", "TSLA", "FB", "AMZN", "UBER", "GOGL", "JPM"]
const realname = ["Apple", "Microsoft", "Tesla", "Facebook", "Amazon", "Uber", "Google", "JPMorgan Stanley"]

function Stats() {
    const [StockData, setStockData] = useState([]);
    const apikey = process.env.REACT_APP_FINNHUB_API_KEY;
    let arrData = []
    const fetchData = async (stock) => {
        const url = `https://finnhub.io/api/v1/quote?symbol=${stock}&token=${apikey}`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    const getData = async () => {
        for (let i = 0; i < stockList.length; i++) {
            const a = await fetchData(stockList[i]);
            a.name = stockList[i];
            a.realname = realname[i]; 
            arrData.push(a);
        }
        setStockData(arrData);
    }
    useEffect(() => {
        getData();
    }, [])
    return (

            <div className = "container2">
                <div className="heading">Companies Stocks</div>
                <div className="stock__data">
                    {StockData.map((element) => {
                        return <div key = {`${element.name}`} className="row">
                            <PrintStockDataFrontPage element={element} />
                        </div>
                    })}
                </div>
            </div>

    )
}

export default Stats