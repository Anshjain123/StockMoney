import { React, useEffect, useState } from 'react'
import stockimage from './images/stockimage.jpg'
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import './PrintFrontPageNews.css'
function PrintFrontPageNews(props) {
    let flag = false;
    if(props.category === 'general' || props.category === 'crypto' || props.category === 'forex') {
        flag = true; 
    } 
    return (
        <div>
            <div className="card" >
                <div className="d-flex">
                    <img src={!flag ? props.element.urlToImage ? props.element.urlToImage : stockimage : props.element.image ? props.element.image : stockimage} style={{height:'150px', width:'250px'}} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{!flag ? props.element.title : props.element.headline}</h5>
                        <p className="card-text">{!flag ? ((props.element.description)?(props.element.description).substring(0, 200):(props.element.description)) : ((props.element.summary)?(props.element.summary).substring(0, 200):(props.element.summary))} <a href={props.element.url} target='blank' className="text">Read More</a> </p>
                        
                    </div>
                    
                </div>

            </div>
        </div>
    )
}

export default PrintFrontPageNews