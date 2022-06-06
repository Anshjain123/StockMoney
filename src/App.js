import { React, useState, useEffect } from 'react'
import './App.css'
import FrontPageNews from './Components/FrontPageNews';
import Navbar from './Components/Navbar';
import Stats from './Components/Stats';
import { signOut } from 'firebase/auth';
import { auth, provider } from './Components/Firebase';
import { onAuthStateChanged } from 'firebase/auth';
import Zoom from 'react-reveal/Zoom';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
  useNavigate
} from "react-router-dom";
import Home from './Components/Home';
import Market from './Components/Market';
import CompanyData from './Components/CompanyData';
import { signInWithPopup } from 'firebase/auth';
import LandinPage from './Components/LandingPage';
import { async } from '@firebase/util';
import CryptoData from './Components/CryptoData';
import Topgainers from './Components/Topgainers';
import TopLosers from './Components/TopLosers';
import MostActive from './Components/MostActive';
import AboutUs from './Components/AboutUs';
import Login from './Login';
import Signup from './Signup';
import StockState from "./Context/stocks/StockState"
import Wishlist from './Components/Wishlist';
function App() {
  const [category, setcategory] = useState('general');
  const navigate = useNavigate();

  const [islogged, setislogged] = useState(false);
  const [user, setuser] = useState(null);
  useEffect(async () => {
    const token = localStorage.getItem("token");
    if (token) {
      const response = await fetch("http://localhost:5000/api/auth/getuser", {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token
        }
      })
      const res = await response.json();
      
      if (res != null) {
        localStorage.setItem("user", res.user); 
        setislogged(true);
        navigate("/home");
      }
    }

  }, [])
  return (
    <>
      <StockState>
        {islogged && <Navbar setislogged={setislogged} setcategory={setcategory} />}
        <Routes>
          {!islogged && <Route exact path="/" element={<LandinPage setislogged={setislogged} />} />}
          {!islogged && <Route exact path="/login" element={<Login setislogged={setislogged} />} />}
          {!islogged && <Route exact path="/signup" element={<Signup setislogged={setislogged} />} />}
          {islogged && <Route exact path='/home' element={<Home category={category} />} />}
          {islogged && <Route exact path='/home/companydata' element={<CompanyData />} />}
          {islogged && <Route exact path='/home/cryptodata' element={<CryptoData />} />}
          {islogged && <Route exact path='/home/topgainers' element={<Topgainers />} />}
          {islogged && <Route exact path='/home/toplosers' element={<TopLosers />} />}
          {islogged && <Route exact path='/home/mostactive' element={<MostActive />} />}
          {islogged && <Route exact path='/home/aboutus' element={<AboutUs />} />}
          {islogged && <Route exact path='/home/wishlist' element={<Wishlist/>} />}
        </Routes>
      </StockState>
    </>
  );
}

export default App;































// {(userdata != undefined && isLogged ? <BrowserRouter>

//   <Navbar setcategory={setcategory} isLogged={isLogged} setisLogged={setisLogged} userdata={userdata} setuserdata={setuserdata} />

//   <Routes>
//     <Route exact path='/' element={<Home category={category} />} />
//     <Route exact path='/companydata' element={<CompanyData />} />
//     <Route exact path='/cryptodata' element={<CryptoData />} />
//     <Route exact path='/topgainers' element={<Topgainers />} />
//     <Route exact path='/toplosers' element={<TopLosers />} />
//     <Route exact path='/mostactive' element={<MostActive />} />
//     <Route exact path='/aboutus' element={<AboutUs />} />
//   </Routes>
// </BrowserRouter> : <Login setisLogged={setisLogged} setuserdata={setuserdata} />)}