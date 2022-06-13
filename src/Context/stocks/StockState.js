import React, { useReducer, useState } from 'react'
import { useEffect } from 'react';
import StockContext from './StockContext'

const StockState = (props) => {
  const [Stocks, setstocks] = useState([])
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

    const response = await fetch("http://localhost:5000/api/Stocks/deleteStock", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: user, type: type, symbol: symbol })
    })
  }

  const reducer = (state, action) => {
    if (action.type === "addstock") {
      console.log(action.symboltype); 
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
    } else if (action.type === "getstocks") {
      const dbstocks = action.items;
      console.log(dbstocks);
      if (dbstocks !== undefined) {
        return {
          ...state,
          stocks: dbstocks
        }
      } else {
        return state; 
      }

    }
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

    return res.AllStocks
  }
  let initialState = {
    stocks: [],
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  // console.log(state);
  return (
    <StockContext.Provider value={{ state, dispatch, getstocks }}>
      {props.children}
    </StockContext.Provider>
  )
}

export default StockState
