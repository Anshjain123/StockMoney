import React, { useState, useEffect } from 'react'
import PrintStockDataFrontPage from './PrintStockDataFrontPage';
import './Stats.css'
const stockList = ["AAPL", "MSFT", "TSLA", "FB", "AMZN", "UBER", "GOGL", "JPM"]
const realname = ["Apple", "Microsoft", "Tesla", "Facebook", "Amazon", "Uber", "Google", "JPMorgan Stanley"]

function Stats() {
    const [StockData, setStockData] = useState([]);
    const apikey = process.env.REACT_APP_FINNHUB_API_KEY;
    let arrData = []
    // const url = 
    
    
    useEffect(async () => {
        let abortcontroller = new AbortController();
        const signal = abortcontroller.signal;
        for (let i = 0; i < stockList.length; i++) {
            const response = await fetch(`https://finnhub.io/api/v1/quote?symbol=${stockList[i]}&token=${apikey}`, { signal: signal });
            const a = await response.json();
            a.name = stockList[i];
            a.realname = realname[i];
            arrData.push(a);
        }
        setStockData(arrData);
        return () => {
            abortcontroller.abort();
        }
    }, [])
    return (

        <div className="container2">
            <div className="heading">Companies Stocks</div>
            <div className="stock__data">
                {StockData.map((element) => {
                    return <div key={`${element.name}`} className="row">
                        <PrintStockDataFrontPage element={element} />
                    </div>
                })}
            </div>
        </div>

    )
}

export default Stats