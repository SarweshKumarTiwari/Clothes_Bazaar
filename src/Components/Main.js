import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
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
import { IsAuth, IsNotAuth } from './ProtectedRoutes'
import Navtoggle from './context/Navtoggle'
import SellerSignup from './Client/SellerSignup'
import SellerLogin from './Client/SellerLogin'
import SellerAddItems from './Client/SellerAddItems'


export default function Main() {
  return (
    <Navtoggle>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/men' element={<Men />} />
          <Route path='/women' element={<Women />} />
          <Route path='/kids' element={<Kids />} />
          <Route path='/more' element={<More />} />
          <Route path='/login' element={<IsAuth Component={Login} />} />
          <Route path='/signup' element={<IsAuth Component={Signup} />} />
          <Route path='/cart' element={<IsNotAuth Component={Cart} />} />
          <Route path='/item' element={<Item />} />
          <Route path='/addProfile' element={<IsNotAuth Component={AddProfile} />} />
          <Route path='/dashboard' element={<IsNotAuth Component={Dashboard} />} />
          <Route path='/sellersignup' element={<SellerSignup/>}/>
          <Route path='/sellerlogin' element={<SellerLogin/>}/>
          <Route path='/selleradditems' element={<SellerAddItems/>}></Route>
          <Route path='/forgotpassword' element={<ForgotPassword />} />
          <Route path='/reset_password/:token/:id' element={<ResetPassword />} />
          <Route path='/successfully_purchased' element={<OnPurchase />} />
        </Routes>
        <Footer style={{ marginTop: "25rem" }} />
      </Router>
    </Navtoggle>

  )
}
