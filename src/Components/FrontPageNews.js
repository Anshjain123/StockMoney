import { React, useState, useEffect } from 'react'
import './FrontPageNews.css'
import PrintFrontPageNews from './PrintFrontPageNews'
import { useLocation } from 'react-router-dom'; 
function FrontPageNews(props) {
    // const location = useLocation();  
    const [CryptoData, setCryptoData] = useState([]);
    let flag = false; 
    // console.log(props.category)
    let url; 
    if(props.category === 'general' || props.category === 'forex' || props.category === 'crypto') {
        url = `https://finnhub.io/api/v1/news?category=${props.category}&token=c8odtciad3iatn99hsh0`;
        flag = true; 
        
    } else {
        url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=08e8c4fc692c4277a73760b3bbceedba`;
        
    }
    useEffect(() => {
        let abortcontroller = new AbortController(); 
        const signal = abortcontroller.signal;
        fetch(url, {signal:signal} )
        .then(results => results.json())
        .then(data =>{
            if(!flag) {
                setCryptoData(data.articles);
            } else {
                setCryptoData(data);
            }
            
        })  
        return ()=>{
            abortcontroller.abort(); 
        }
    }, [props.category])
    // const getData = async () => {
    //     // const url = " https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=08e8c4fc692c4277a73760b3bbceedba"; 
    //     // const url = "https://finnhub.io/api/v1/news?category=crypto&token=c8odtciad3iatn99hsh0";
    //     const response = await fetch(url);
    //     const data = await response.json();
    //     console.log(data);
    //     setCryptoData(data.articles);
    //     // console.log(CryptoData.length)
    // }
    
    return (
        <div className="front_page_container">
            <div className="row">
                
                {CryptoData.map((element, index) => {
                    return <div key = {index}>
                        <PrintFrontPageNews element={element} category = {props.category}/>
                    </div>
                })}

            </div>

        </div>
    )
}

export default FrontPageNews