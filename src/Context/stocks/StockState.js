import React, {useState} from 'react'
import StockContext from './StockContext'
import toast, {Toaster} from 'react-hot-toast'; 
const StockState = (props) => {
  const [Stocks, setStocks] = useState([])
  const addstock = async(type, symbol)=>{
    
    const user = localStorage.getItem("user"); 
    const response = await fetch("http://localhost:5000/api/Stocks/addstock", {
      method:"POST", 
      headers:{
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify({username:user, type:type, symbol:symbol})
    })
    return true; 
  }

  const removestock = async(type, symbol)=>{
    const user = localStorage.getItem("user");
    
    const response = await fetch("http://localhost:5000/api/Stocks/removestock", {
      method:"POST",
      headers:{
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify({username:user, type:type, symbol:symbol})
    })
  }

  const getstocks = async()=>{
    const user = localStorage.getItem('user'); 
    const response = await fetch("http://localhost:5000/api/Stocks/getallstocks", {
      method:"POST", 
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username:user})
    })
    const res = await response.json(); 
    setStocks(res.AllStocks);  
    return res.AllStocks;  
  }

  
  return (
    <StockContext.Provider value={{addstock, getstocks, Stocks, removestock}}>
        {props.children}    
    </StockContext.Provider>
  )
}

export default StockState
