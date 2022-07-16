import { React, useState, useEffect } from 'react'
import './FrontPageNews.css'
import PrintFrontPageNews from './PrintFrontPageNews'
import { useNavigate } from 'react-router-dom'; 
import { Card } from '@mui/material';

function FrontPageNews(props) {  
    const navigate = useNavigate(); 
    const [CryptoData, setCryptoData] = useState([]);
    let flag = false; 
    const apikey1 = process.env.REACT_APP_FINNHUB_API_KEY;
    const apikey2 = process.env.REACT_APP_NEWS_API
    let url; 
    if(props.category === 'general' || props.category === 'forex' || props.category === 'crypto') {
        url = `https://finnhub.io/api/v1/news?category=${props.category}&token=${apikey1}`;
        flag = true; 
        
    } else {
        url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${apikey2}`;
        
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
    
    return (
        <Card className="front_page_container">
            <div className="row">
                
                {CryptoData.map((element, index) => {
                    return <div key = {index}>
                        <PrintFrontPageNews element={element} category = {props.category}/>
                    </div>
                })}

            </div>

        </Card>
    )
}

export default FrontPageNews