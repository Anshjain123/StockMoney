import React from 'react'
import './PrintTopLosers.css'
function PrintTopLosers(props) {
    return (
        <table style={{ width: '100%' }}>
            <tbody>
                <tr style={{ display: 'flex', justifyContent: 'space-around', margin: '10px', fontWeight: 'bold' }}>
                    <th style={{ fontSize: '20px', flex: 0.15 }}>
                        {props.element.name}
                    </th>
                    <th style={{ fontSize: '20px', flex: 0.1 }}>
                        {props.element.symbol}
                    </th>
                    <th style={{ fontSize: '20px', color: 'red', flex: 0.1 }}>
                        {props.element.change}
                    </th>
                    <th style={{ fontSize: '20px', color: 'red', flex: 0.1 }}>
                        {props.element.changesPercentage} %
                    </th>
                    <th style={{ fontSize: '20px', flex: 0.1 }}>
                        $ {props.element.price}
                    </th>
                </tr>
            </tbody>

        </table>
    )
}

export default PrintTopLosers