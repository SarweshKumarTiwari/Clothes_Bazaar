import React from 'react'
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

export default function Main() {
  return (
    <Router>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/men' element={<Men/>}/>
            <Route path='/women' element={<Women/>}/>
            <Route path='/kids' element={<Kids/>}/>
            <Route path='/more' element={<More/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/item' element={<Item/>}/>
            <Route path='/addProfile' element={<AddProfile/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/forgotpassword' element={<ForgotPassword/>}/>
            <Route path='/reset_password/:token/:id' element={<ResetPassword/>}/>
        </Routes>
        <Footer style={{marginTop:"25rem"}}/>
    </Router>
    
  )
}
