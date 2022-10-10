import React,{useState,useEffect} from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Navbar from './Navbar'
import Men from "./Pages/Men"
import Women from "./Pages/Women"
import Kids from "./Pages/Kids"
import More from "./Pages/More"
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"
import Home from "./Pages/Home"
import Dashboard from "./Pages/Dashboard"
import Footer from './Footer'
import Item from './Pages/Item'
import AddProfile from './Pages/AddProfile'
import Cart from './Pages/Cart'
import ForgotPassword from './Pages/ForgotPassword'
import ResetPassword from './Pages/ResetPassword'
import OnPurchase from './Pages/OnPurchase'
import { authorise } from './functions'

export default function Main() {
  const [auth, setauth] = useState(false);
  useEffect(() => {
    authorise('authorise').then(x=>{
      if (!x.error) {
        setauth(true);
      }
      else{
        setauth(false);
      }
    })
    
  }, [auth])
  
  return (
    <Router>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/men' element={<Men/>}/>
            <Route path='/women' element={<Women/>}/>
            <Route path='/kids' element={<Kids/>}/>
            <Route path='/more' element={<More/>}/>
            <Route path='/login' element={!auth?<Login/>:<AddProfile/>}/>
            <Route path='/signup' element={!auth?<Signup/>:<AddProfile/>}/>
            <Route path='/cart' element={auth?<Cart/>:<Login/>}/>
            <Route path='/item' element={<Item/>}/>
            <Route path='/addProfile' element={auth?<AddProfile/>:<Login/>}/>
            <Route path='/dashboard' element={auth?<Dashboard/>:<Login/>}/>
            <Route path='/successfully_purchased' element={<OnPurchase/>}/>
            <Route path='/forgotpassword' element={<ForgotPassword/>}/>
            <Route path='/reset_password/:token/:id' element={<ResetPassword/>}/>
        </Routes>
        <Footer style={{marginTop:"25rem"}}/>
    </Router>
    
  )
}
