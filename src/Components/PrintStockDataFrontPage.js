import React from 'react'
// import { FaSortUp, FaSortDown } from 'react-icons/fa';
// {diff >= 0 ? <FaSortUp style={{color:'green'}}/> : <FaSortDown style={{color:'red'}}/>}
import './PrintStockDataFrontPage.css'
function PrintStockDataFrontPage(props) {
    const diff = props.element.c - props.element.pc;
    let pc = props.element.dp;
    return (

        <div className="flex">
            <div className="name">
                <b><h5>{props.element.name}</h5></b>
            </div>
            <div className="price">
                <div className="real_price">
                <b><h5>$ {props.element.c}</h5></b>
                </div>
                <div className="change">
                    <div className="d-flex">                    
                    <b><h5 style={{color: (diff>=0 ? 'green' : 'red'), fontSize:'15px'}}> {diff>=0&&'+'}{props.element.d}</h5></b>
                    <b><h5 style={{color: (diff>=0 ? 'green' : 'red'), fontSize:'15px'}}>({diff>=0&&'+'}{props.element.dp}%)</h5></b>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default PrintStockDataFrontPage