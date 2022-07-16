import React from 'react'
import './PrintTopGainers.css'
function PrintTopGainers(props) {
    return (
        <table className='top__gainers' style={{ width: '100%', height: '100%', fontSize: '18px', fontFamily:'Georgia' }}>
            <tbody>
                <tr style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <th style={{ flex: 0.15, fontWeight:'bolder' }} >
                        {props.element.name}
                    </th>
                    <th style={{ flex: 0.1 }}>
                        {props.element.symbol}
                    </th>
                    <th style={{ flex: 0.1, color:'green' }}>
                        +{props.element.change}
                    </th>
                    <th style={{ flex: 0.1, color:'green' }}>
                        +{props.element.changesPercentage} %
                    </th>
                    <th style={{ flex: 0.09 }}>
                        $ {props.element.price}
                    </th>
                </tr>
            </tbody>
        </table>
    )
}

export default PrintTopGainers