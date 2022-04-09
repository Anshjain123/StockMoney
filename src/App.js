import { React, useState, useEffect } from 'react'
import './App.css'
import FrontPageNews from './Components/FrontPageNews';
import Navbar from './Components/Navbar';
import Stats from './Components/Stats';
import { signOut } from 'firebase/auth';
import { auth, provider } from './Components/Firebase';
import { onAuthStateChanged } from 'firebase/auth';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from './Components/Home';
import Market from './Components/Market';
import CompanyData from './Components/CompanyData';
import { signInWithPopup } from 'firebase/auth';
import Login from './Components/Login';
import { async } from '@firebase/util';
import CryptoData from './Components/CryptoData';
import Topgainers from './Components/Topgainers';
import TopLosers from './Components/TopLosers';
import MostActive from './Components/MostActive';
import AboutUs from './Components/AboutUs';
function App() {
  const [isLogged, setisLogged] = useState(false); 
  const [category, setcategory] = useState('general');
  const [userdata, setuserdata] = useState();
  const HandleClicked=()=>{
    signInWithPopup(auth, provider).then((res)=>{
      console.log(res);
    })
  }
  const signout=()=>{
    signOut(auth)
    .then(()=> console.log("signed out"))
  }
  useEffect(()=>{
    onAuthStateChanged(auth, (user)=>{
      if(user){
        // console.log(user)
        setuserdata(user);
        // console.log(userdata) 
        setisLogged(true);
      } 
    })
  }, [])
  return (
    <>  

    {(userdata != undefined && isLogged ?<BrowserRouter>
        
        <Navbar setcategory = {setcategory} isLogged = {isLogged} setisLogged = {setisLogged} userdata = {userdata} setuserdata = {setuserdata}/>
        
        <Routes>
          <Route exact path = '/' element = {<Home category = {category}/>}/>
          <Route exact path = '/companydata' element = {<CompanyData/>}/>
          <Route exact path = '/cryptodata' element = {<CryptoData/>}/>
          <Route exact path = '/topgainers' element = {<Topgainers/>}/>
          <Route exact path = '/toplosers' element = {<TopLosers/>}/>
          <Route exact path = '/mostactive' element = {<MostActive/>}/>
          <Route exact path='/aboutus' element = {<AboutUs/>}/>
        </Routes>
        </BrowserRouter>:<Login setisLogged = {setisLogged} setuserdata = {setuserdata}/>)}
        

        {/* <button onClick={HandleClicked}>
          Sign in 
        </button>
        <button onClick={signout}>
          Sign Out
        </button> */}
    </>
  );
}

export default App;
