import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Navbar from './Navbar'
import Men from "./Pages/Men"
import Women from "./Pages/Women"
import Kids from "./Pages/Kids"
import More from "./Pages/More"
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"
import Cart from "./Pages/Cart"
import Home from "./Pages/Home"
import Dashboard from "./Pages/Dashboard"

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
            <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
    </Router>
    
  )
}
