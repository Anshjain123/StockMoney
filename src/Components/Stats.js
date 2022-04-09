import React, { useState, useEffect } from 'react'
import PrintStockDataFrontPage from './PrintStockDataFrontPage';
// import PrintStocksPrices from './PrintStockDataFrontPage';
import './Stats.css'
const stockList = ["AAPL", "MSFT", "TSLA", "FB", "CVX", "UBER", "DIS", "SBUX"]


function Stats() {
    const [StockData, setStockData] = useState([]);
    let arrData = []
    const fetchData = async (stock) => {
        const url = `https://finnhub.io/api/v1/quote?symbol=${stock}&token=c8odtciad3iatn99hsh0`;
        const response = await fetch(url);
        // console.log(response);
        const data = await response.json();
        return data;
    }
    // const handleclicked = () => {
    //     console.log("YEHA");
    // }
    const getData = async () => {
        for (let i = 0; i < stockList.length; i++) {
            const a = await fetchData(stockList[i]);
            a.name = stockList[i];
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
                        return <div key = {`${element.name}`} className="rows">
                            <PrintStockDataFrontPage element={element} />
                        </div>
                    })}
                </div>
            </div>

    )
}

export default Stats