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
    ]
    const [data, setData] = useState([
        "AAPL",
        "MSFT",
        "GOOGL",
        'AMZN',
        'TSLA',
        'BRK-A', 
        'FB',
        'TSM',
        'JNJ',
        'UNH',
        'V',
        'NVDA', 
        'TCEHY', 
        'XOM',
        'JPM', 
        'PG',
        'WMT', 
        'MA',
    ])
    let realname = [
        "Apple",
        "Microsoft",
        "Google",
        "Amazon",
        "Tesla",
        "Berkshire-Hathaway",
        "Meta (Facebook)",
        "TSMC",
        "Johnson & Johnson",
        "UnitedHealth",
        "Visa", 
        "NVIDIA",
        "Tencent",
        "Exxon Mobil",
        "JPMorgan Chase",
        "Procter & Gamble",
        "Walmart",
        "Mastercard"

    ]
    const [StockData, setStockData] = useState([]);
    let arrData = []
    const fetchData = async (stock) => {
        console.log("YEAH");
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
            // console.log(a);
            a.name = data[i];
            a.realname = realname[i]
            arrData.push(a);

        }
        setStockData(arrData);
        // console.log(StockData)
    }
    const handleClicked = async () => {
        let arr = []
        arr.push(q);
        setData(arr);
    }
    useEffect(() => {
        // if(q == "") {
        //     setData(defaultdata)
        // }
        getData();
        // console.log("EYAH")
    }, [data])
    return (
        <div className='company_data_container'>
            <div className="search_bar">
                <div className="flex" style={{ display: 'flex' }} >
                    <input className="form-control me-2" type="search" value={q} onChange={(e) => setq(e.target.value)} placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" onClick={handleClicked} type="submit">Search</button>
                </div>

            </div>
            <table className="heading_bar">
                <tr style={{display:'flex', color: 'white', fontSize: '22px', fontWeight: 'bold' }} >
                    <th className="company_name" style = {{width:'200px',display:'flex', justifyContent:'center'}} >
                        Company
                    </th>
                    <th className="ticker_symbol" style = {{width:'300px',display:'flex', justifyContent:'center'}}>
                        Symbol
                    </th>
                    <th className="chang" style = {{width:'300px',display:'flex', justifyContent:'center'}}>
                        Change
                    </th>
                    <th className="percntchng" style = {{width:'300px',display:'flex', justifyContent:'center'}}>
                        % Change
                    </th>

                    <th className="pricee" style = {{width:'300px',display:'flex', justifyContent:'center'}}>
                        Current Price
                    </th>

                </tr>

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