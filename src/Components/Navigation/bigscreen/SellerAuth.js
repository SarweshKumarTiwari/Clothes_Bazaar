import Cookies from 'js-cookie';
import React,{ useState, useContext } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import { StateProvider } from '../../context/Navtoggle';

export default function SellerAuth(props) {
    const [toggle, settoggle] = useState(false);
    const {data}=useContext(StateProvider);
    const navigate=useNavigate();
    const logout=()=>{
        Cookies.remove("SellerToken");
        navigate("/")
      }
  return (
    <ul className="flex items-center hidden my-2 ml-auto space-x-8 lg:flex">
    <li onMouseOver={()=>{settoggle(true);data.updateTrue()}} onMouseLeave={()=>{settoggle(false);data.updateFalse()}} className='flex'>
      <h3 className='text-white'>Seller's Account</h3>
      <div
        className="inline-flex items-center justify-center h-4 px-6 font-medium tracking-wide text-gray-100 transition duration-200 rounded  bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
        aria-label="Sign up"
        title="Sign up"  
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
          <path style={{ color: `${props.pathname === '/dashboard' ? "grey" : ""}` }} d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
          <path style={{ color: `${props.pathname === '/dashboard' ? "grey" : ""}` }} fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
        </svg>
      </div>
      {toggle&&<div className="absolute w-36 right-10 bg-gray-800 top-8 text-white rounded-lg ">
        <ul className='my-4 mx-1'>
        <li className="mx-4 my-4 mb-2 hover:text-gray-200">Your Billings</li><hr/>
          <li className='mx-4 my-4 mb-2 hover:text-gray-200'><Link to='/selleradditems'>Add Items in Shop</Link></li><hr/>
          <li className='mx-4 my-4 mb-2 hover:text-gray-200'><Link to='/' state={{isAuth:props.isAuth}}>My Account</Link></li><hr/>
          <li className='mx-4 my-4 mb-2 hover:text-gray-200' onClick={logout}>Logout</li>
        </ul>
      </div>}
    </li>
  </ul>
  )
}
