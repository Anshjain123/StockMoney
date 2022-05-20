import React from 'react'
import './Printcompanystocks'
function Printcompanystocks(props) {
    const ch = props.element.d; 
    return (
        <table className="contain" >
            <tr className="flex" style={{fontSize:'20px' }}>
                
                <th className="pricc" style = {{width:'200px',display:'flex', justifyContent:'center'}}>
                    {props.element.realname}
                </th>
                <th className="naam" style = {{width:'300px',display:'flex', justifyContent:'center'}}>
                    {props.element.name}

                </th>

                <th className="changes"style = {{color:(props.element.d >= 0 ? 'green' :'red'), width:'300px',display:'flex', justifyContent:'center'}}>
                    {(props.element.d >= 0 ? '+'+props.element.d:props.element.d)}
                    {/* {props.element.d} */}
                </th>


                <th className="percentchange" style = {{width:'300px' , color:(props.element.dp > 0 ? 'green' :'red'),display:'flex', justifyContent:'center'}}>
                {(props.element.dp > 0 ? '+'+props.element.dp:props.element.dp)} %
                </th>


                <th className="prices" style = {{width:'300px',display:'flex', justifyContent:'center'}} >
                    $ {props.element.c}
                </th>

            </tr>

        </table>
    )
}

export default Printcompanystocks