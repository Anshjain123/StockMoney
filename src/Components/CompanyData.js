import { Card } from '@mui/material';
import React, { useState, useEffect } from 'react'
import './CompanyData.css'
import Printcompanystocks from './Printcompanystocks';

function CompanyData() {
    const [q, setq] = useState("");
    const apikey = process.env.REACT_APP_FINNHUB_API_KEY;
    const defaultdata = [
        "AAPL",
        "MSFT",
        "GOOGL",
        'AMZN',
        'TSLA',
        'FB',
        'TSM',
        'UNH',
        'V',
        'NVDA',
        'TCEHY',
        'XOM',
        'JPM',
        'PG',
        'WMT',
        'MA',
    ]
    const [data, setData] = useState([
        "AAPL",
        "MSFT",
        "GOOGL",
        'AMZN',
        'TSLA',
        'FB',
        'TSM',
        'V',
        'NVDA',
        'TCEHY',
        'XOM',
        'JPM',
        'PG',
        'WMT',
        'MA',
    ])
    let realname = {
        "AAPL":"Apple",
        "MSFT":"Microsoft",
        "GOOGL":"Google", 
        "AMZN":"Amazon",
        "TSLA":"Tesla",
        "FB":"Meta (Facebook)",
        "TSM":"TSMC",
        "V":"Visa",
        "NVDA":"NVIDIA",
        "TCEHY":"Tencent",
        "XOM":"Exxon Mobil",
        "JPM":"JPMorgan Chase",
        "PG":"Procter & Gamble",
        "WMT":"Walmart",
        "MA":"Mastercard"
    }
    let ticker = {
        "apple":"AAPL",
        "microsoft":"MSFT",
        "google":"GOOGL", 
        "amazon":"AMZN",
        "tesla":"TSLA",
        "facebook":"FB",
        "TSMC":"TSM",
        "visa":"V",
        "nvidia":"NVDA",
        "tencent":"TCEHY",
        "exxon mobil":"XOM",
        "jpmorgan chase":"JPM",
        "procter & gamble":"PG",
        "walmart":"WMT",
        "mastercard":"MA"
    }
    const [StockData, setStockData] = useState([]);
    let arrData = []
    // console.log(realname[]); 
    const fetchData = async (stock) => {

        const url = `https://finnhub.io/api/v1/quote?symbol=${stock}&token=${apikey}`;
        const response = await fetch(url);
        // console.log(response);
        const data = await response.json();
        // console.log(data);
        return data;
    }
    const getData = async () => {
        for (let i = 0; i < data.length; i++) {

            const a = await fetchData(data[i]);
            // console.log();
            a.name = data[i];
            a.realname = realname[data[i]]; 
            arrData.push(a);

        }
        setStockData(arrData);
        // console.log(StockData)
    }
    const handleClicked = async () => {
        let arr = [];
        q.toLowerCase();
        console.log(q); 

        arr.push(ticker[q]);
        setData(arr);
    }
    useEffect(() => {
        getData();
    }, [data])
    return (
        <div className='company_data_container'>
            <div className="search_bar">
                <div className="flex" style={{ display: 'flex' }} >
                    <input className="form-control me-2" type="search" style={{ marginTop: '5px', height: '40px', width: '800px', borderRadius: '20px' }} onChange={(e) => setq(e.target.value)} placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-primary" onClick={handleClicked} style={{ marginTop: '5px', height: '40px' }} type="submit">Search</button>
                </div>

            </div>
            <table className="heading_bar">
                <tbody>
                    <tr style={{ display: 'flex', fontSize: '22px', fontWeight: 'bold', fontFamily: 'Georgia', justifyContent:'space-around' }} >
                        <th className="company_name" style={{  display: 'flex', justifyContent: 'center' }} >
                            Company
                        </th>
                        <th className="ticker_symbol" style={{  display: 'flex', justifyContent: 'center' }}>
                            Symbol
                        </th>
                        <th className="chang" style={{ display: 'flex', justifyContent: 'center' }}>
                            Change
                        </th>
                        <th className="percntchng" style={{ display: 'flex', justifyContent: 'center' }}>
                            % Change
                        </th>

                        <th className="pricee" style={{ display: 'flex', justifyContent: 'center' }}>
                            Current Price
                        </th>

                    </tr>
                </tbody>
            </table>
            <div className="data">
                {StockData.map((element, index) => {
                    return <div key={index} className="rows" style={{ height: '70px' }}>
                        <Printcompanystocks element={element} />
                    </div>
                })}
            </div>


        </div>
    )
}

export default CompanyData