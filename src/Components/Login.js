import React, {useState} from 'react'
import { signOut } from 'firebase/auth';
import { auth, provider } from './Firebase';
import { signInWithPopup } from 'firebase/auth';
import Moneyhood from './images/MoneyHood.svg'

function Login(props) {
    const HandleClicked=()=>{
        signInWithPopup(auth, provider).then((res)=>{
        // //   console.log(res.user);
        //   localStorage.setItem('data',res);
          props.setuserdata(res);
          props.setisLogged(true);
        })
      }
    //   const signout=()=>{
    //     signOut(auth)
    //     .then(()=> console.log("signed out"))
    //   }
    return (
        <div>
            <div className="container">
                <div className="heading">
                    <div className="d-flex">
                        <h1 style={{ fontSize: '220px', textAlign: 'left' }}>StockMoney</h1>
                        <img src={Moneyhood} style={{ height: '150px', width: '150px', marginTop: '65px' }} />
                    </div>
                </div>
                <div className="buttons" style={{marginTop:'300px'}}>
                    <button onClick={HandleClicked}>
                        Sign In with Google
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login