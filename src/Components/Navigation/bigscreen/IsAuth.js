import Cookies from 'js-cookie';
import React, { useState, useContext } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { StateProvider } from '../../context/Navtoggle';

export default function IsAuth(props) {
    const [toggle, settoggle] = useState(false);
    const {data}=useContext(StateProvider);
    const navigate=useNavigate();
    const logout=()=>{
        Cookies.remove("AuthToken");
        navigate("/")
      }
    return (
        <ul className="flex items-center hidden my-2 ml-auto space-x-8 lg:flex">
              <li onMouseOver={()=>{settoggle(true);data.updateTrue()}} onMouseLeave={()=>{settoggle(false);data.updateFalse()}}>
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
                {toggle&&<div className="absolute w-36 right-32 bg-gray-800 top-8 text-white rounded ">
                  <ul className='my-4 mx-1'>
                    <li className='mx-4 my-4 mb-2 hover:text-gray-200'><Link to='/dashboard'>My Orders</Link></li><hr/>
                    <li className='mx-4 my-4 mb-2 hover:text-gray-200'><Link to='/addProfile' state={{isAuth:props.isAuth}}>My Account</Link></li><hr/>
                    <li className='mx-4 my-4 mb-2 hover:text-gray-200' onClick={logout}>Logout</li>
                  </ul>
                </div>}
              </li>
              <li>
                <Link
                  to="/cart"
                  state={{isAuth:props.isAuth}}
                  className={`inline-flex items-center justify-center h-4 px-6 font-medium tracking-wide text-gray-100 transition duration-200 rounded  bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none`}
                  aria-label="Sign up"
                  title="Sign up"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" viewBox="0 0 16 16">
                    <path style={{ color: `${props.pathname === '/cart' ? "gray" : ""}` }} d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                  </svg>
                </Link>
              </li>
            </ul>
    )
}
