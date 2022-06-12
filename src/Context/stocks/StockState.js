import React, { useReducer, useState } from 'react'
import { useEffect } from 'react';
import StockContext from './StockContext'

const StockState = (props) => {
  const addstock = async (type, symbol) => {

    const user = localStorage.getItem("user");
    const response = await fetch("http://localhost:5000/api/Stocks/addstock", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: user, type: type, symbol: symbol })
    })
  }

  const removestock = async (type, symbol) => {
    const user = localStorage.getItem("user");

    const response = await fetch("http://localhost:5000/api/Stocks/removestock", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: user, type: type, symbol: symbol })
    })
  }

  const reducer = (state, action) => {
    if (action.type === "addstock") {
      addstock(action.symboltype, action.symbol);
      return {
        ...state,
        stocks: [...state.stocks, action.symbol]
      }
    } else if (action.type === "removestock") {
      removestock(action.symboltype, action.symbol);
      return {
        ...state,
        stocks: state.stocks.filter((symbol) => symbol != action.symbol)
      }
    }
  }
  const initialState = {
    stocks: []
  }
  const getstocks = async () => {
    const user = localStorage.getItem('user');
    const response = await fetch("http://localhost:5000/api/Stocks/getallstocks", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: user })
    })
    const res = await response.json();
    // console.log(res);
    initialState.stocks = res.AllStocks;  
    return res.AllStocks;
  }
  
  const [state, dispatch] = useReducer(reducer, initialState);
  const [Stocks, setStocks] = useState([])





  return (
    <StockContext.Provider value={{ state, dispatch, getstocks }}>
      {props.children}
    </StockContext.Provider>
  )
}

export default StockState
