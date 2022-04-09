import React from 'react'
import './Printcompanystocks'
function Printcompanystocks(props) {
    const ch = props.element.d; 
    return (
        <div className="contain" style={{ marginLeft: '10px' }}>
            <div className="flex" style={{ justifyContent: 'space-between', fontSize:'20px' }}>
                
                <div className="pricc" style = {{flex:'0.3'}}>
                    {props.element.realname}
                </div>
                <div className="naam" style = {{flex:'0.3'}}>
                    {props.element.name}

                </div>

                <div className="changes"style = {{flex:'0.3', color:(props.element.d >= 0 ? 'green' :'red')}}>
                    {(props.element.d >= 0 ? '+'+props.element.d:props.element.d)}
                    {/* {props.element.d} */}
                </div>


                <div className="percentchange" style = {{flex:'0.3',color:(props.element.dp > 0 ? 'green' :'red')}}>
                {(props.element.dp > 0 ? '+'+props.element.dp:props.element.dp)} %
                </div>


                {/* <div className="changes">
                    {props.element.d}
                </div> */}

                <div className="prices" >
                    $ {props.element.c}
                </div>

                



                {/* {props.element.d}
                {props.element.dp} */}
            </div>

        </div>
    )
}

export default Printcompanystocks