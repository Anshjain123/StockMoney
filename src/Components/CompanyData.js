import React, { useState, useEffect } from 'react'
import './CompanyData.css'
import Printcompanystocks from './Printcompanystocks';
function CompanyData() {
    const [q, setq] = useState("");
    const defaultdata = [
        "AAPL", 
        "MSFT", 
        "GOOGL", 

    ]
    const [data, setData] = useState([
        "AAPL", 
        "MSFT", 
        "GOOGL", 

    ])
    let realname = ["Apple"]
    const [StockData, setStockData] = useState([]);
    let arrData = []
    const fetchData = async (stock) => {
        console.log("YEAH");
        const url = `https://finnhub.io/api/v1/quote?symbol=${stock}&token=c8odtciad3iatn99hsh0`;
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
    const handleClicked = async ()=>{
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
                <div className="flex" style={{display:'flex'}} >
                    <input className="form-control me-2" type="search" value = {q} onChange={(e)=>setq(e.target.value)} placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" onClick={handleClicked} type="submit">Search</button>
                </div>

            </div>
            <div className="heading_bar">
                <div className="flex" style={{ display : 'flex',justifyContent:'space-between', color: 'white', fontSize:'22px', fontWeight:'bold'}} >
                    <div className="company_name">
                        Company
                    </div>
                    <div className="ticker_symbol">
                        Symbol
                    </div>
                    <div className="chang">
                        Change 
                    </div>
                    <div className="percntchng">
                        % Change
                    </div>
                    
                    <div className="pricee">
                        Current Price
                    </div>

                </div>

            </div>

             <div className="data" style = { {height:'400px'} }>
                {StockData.map((element, index) => {
                    return <div key={index} className="row" style={{ height: '70px' }}>
                        <Printcompanystocks element={element} />
                    </div>
                })}
            </div> 
        </div>
    )
}

export default CompanyData