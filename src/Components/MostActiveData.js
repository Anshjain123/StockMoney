import React from 'react'
import './MostActiveData.css'
function MostActiveData(props) {
  return (
    <div className = 'cont'>
        <div className="flex" style = {{display:'flex', justifyContent:'space-between', color:'white',margin:'10px', fontWeight:'bold'}}>
            <div className="companyname" style={{fontSize:'20px', flex:'0.3'}}>
               {props.element.name}
            </div>
            <div className="symb" style={{fontSize:'20px', flex:'0.3'}}>
                {props.element.symbol}
            </div>
            <div className="chn" style={{fontSize:'20px', flex:'0.3', color: (props.element.change >= 0?'green':'red')}}>
                {(props.element.change >= 0? '+'+props.element.change : props.element.change)}
                {/* // {props.element.change >= 0 ?} */}
            </div>
            <div className="percntchng" style={{fontSize:'20px', flex:'0.3', color:(props.element.changesPercentage >= 0 ? 'green':'red')}}>
                {props.element.changesPercentage >= 0 ? + props.element.changesPercentage: props.element.changesPercentage} %
            </div>
            <div className="p" style={{fontSize:'20px', marginRight:'10px'}}>
                $ {props.element.price}
            </div>
        </div>
    </div>
  )
}

export default MostActiveData