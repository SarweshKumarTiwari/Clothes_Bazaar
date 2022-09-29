import React, { useState, useEffect } from 'react';
import pic from "./images/cb.png";
import { Link, useLocation,useNavigate} from "react-router-dom"
import { authorise } from './functions';

export default function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate=useNavigate();

  //This 'isAuth' variable is used to check if User is Authorised 
  const [isAuth,setisAuth] = useState(false);
  const [toggle, settoggle] = useState(false);

  const loc = useLocation();
  useEffect(() => {
    setIsMenuOpen(false);
  }, [loc.pathname])

  useEffect(()=>{
    authorise('authorise').then(x=>{
      if (!x.error) {
        setisAuth(true);
      }
      else{
        setisAuth(false);
      }
    })
  });

  const logout=()=>{
    localStorage.removeItem("AuthToken");
    navigate("/")
  }

  return (
    <div className="bg-gray-900">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex grid items-center grid-cols-2 lg:grid-cols-3">
          <ul className="flex items-center hidden space-x-8 lg:flex">
            <li>
              <Link
                to="/men"
                aria-label="Our product"
                title="Our product"
                className={`font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 ${loc.pathname === '/men' ? "underline underline-offset-8" : ""}`}
              >
                Men
              </Link>
            </li>
            <li>
              <Link
                to="/women"
                aria-label="Our product"
                title="Our product"
                className={`font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 ${loc.pathname === '/women' ? "underline underline-offset-8" : ""}`}
              >
                Women
              </Link>
            </li>
            <li>
              <Link
                to="/kids"
                aria-label="Product pricing"
                title="Product pricing"
                className={`font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 ${loc.pathname === '/kids' ? "underline underline-offset-8" : ""}`}
              >
                Kids
              </Link>
            </li>
            <li>
              <Link
                to="/more"
                aria-label="Product pricing"
                title="Product pricing"
                className={`font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 ${loc.pathname === '/more' ? "underline underline-offset-8" : ""}`}
              >
                More..
              </Link>
            </li>
          </ul>
          <Link
            to="/"
            aria-label="Company"
            title="Company"
            className="inline-flex items-center lg:mx-auto"
          >
            <img src={pic} alt="" />
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
              Clothes Bazaar
            </span>
          </Link>
          {!isAuth ? <ul className="flex items-center hidden ml-auto space-x-8 lg:flex">
            <li>
              <Link
                to="/login"
                aria-label="Sign in"
                title="Sign in"
                className={`font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 ${loc.pathname === '/login' ? "underline underline-offset-8" : ""}`}
              >
                Log in
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                className={`font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 ${loc.pathname === '/signup' ? "underline underline-offset-8" : ""}`}
                aria-label="Sign up"
                title="Sign up"
              >
                Sign up
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                className={`inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-gray-100 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none`}
                aria-label="Sign up"
                title="Sign up"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" viewBox="0 0 16 16">
                  <path style={{ color: `${loc.pathname === '/cart' ? "grey" : ""}` }} d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                </svg>
              </Link>
            </li>
          </ul>
            :
            <ul className="flex items-center hidden my-2 ml-auto space-x-8 lg:flex">
              <li onMouseOver={()=>{settoggle(true)}} onMouseLeave={()=>{settoggle(false)}}>
                <div
                  className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-gray-100 transition duration-200 rounded  bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                  aria-label="Sign up"
                  title="Sign up"  
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                    <path style={{ color: `${loc.pathname === '/dashboard' ? "grey" : ""}` }} d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path style={{ color: `${loc.pathname === '/dashboard' ? "grey" : ""}` }} fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                  </svg>
                </div>
                {toggle&&<div className="absolute w-36 right-32 bg-gray-800 top-12 text-white rounded ">
                  <ul className='my-4 mx-1'>
                    <li className='mx-4 my-4 mb-2 hover:text-gray-200'><Link to='/dashboard'>My Orders</Link></li><hr/>
                    <li className='mx-4 my-4 mb-2 hover:text-gray-200'><Link to='/addProfile'>My Account</Link></li><hr/>
                    <li className='mx-4 my-4 mb-2 hover:text-gray-200' onClick={logout}>Logout</li>
                  </ul>
                </div>}
              </li>
              <li>
                <Link
                  to="/cart"
                  className={`inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-gray-100 transition duration-200 rounded  bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none`}
                  aria-label="Sign up"
                  title="Sign up"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" viewBox="0 0 16 16">
                    <path style={{ color: `${loc.pathname === '/cart' ? "gray" : ""}` }} d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                  </svg>
                </Link>
              </li>
            </ul>}
          <div className="ml-auto lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link
                        to="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                      >
                        <img src={pic} alt="" />
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                          Clothes Bazaar
                        </span>
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    {!isAuth ? <ul className="space-y-4">
                      <li className={loc.pathname === '/men' ? "pl-4 bg-gray-300 rounded-md" : ""}>
                        <Link
                          to="/men"
                          aria-label="Our product"
                          title="Our product"
                          className={`font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400`}
                        >
                          Men
                        </Link>
                      </li>
                      <li className={loc.pathname === '/women' ? "pl-4 bg-gray-300 rounded-md" : ""}>
                        <Link
                          to="/women"
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Women
                        </Link>
                      </li>
                      <li className={loc.pathname === '/kids' ? "pl-4 bg-gray-300 rounded-md" : ""}>
                        <Link
                          to="/kids"
                          aria-label="Product pricing"
                          title="Product pricing"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Kids
                        </Link>
                      </li>
                      <li className={loc.pathname === '/more' ? "pl-4 bg-gray-300 rounded-md" : ""}>
                        <Link
                          to="/more"
                          aria-label="Product pricing"
                          title="Product pricing"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          More..
                        </Link>
                      </li>
                      <li className={loc.pathname === '/login' ? "pl-4 bg-gray-300 rounded-md" : ""}>
                        <Link
                          to="/login"
                          aria-label="Sign in"
                          title="Sign in"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Log In
                        </Link>
                      </li>
                      <li className={loc.pathname === '/signup' ? "pl-4 bg-gray-300 rounded-md" : ""}>
                        <Link
                          to="/signup"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          aria-label="Sign up"
                          title="Sign up"
                        >
                          Sign up
                        </Link>
                      </li>
                      <li className={loc.pathname === '/cart' ? "pl-4 bg-gray-300 rounded-md" : ""}>
                        <Link
                          to="/cart"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          aria-label="Sign up"
                          title="Sign up"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                          </svg>
                        </Link>
                      </li>
                    </ul>
                      :
                      <ul className="space-y-4">
                        <li className={loc.pathname === '/men' ? "pl-4 bg-gray-300 rounded-md" : ""}>
                          <Link
                            to="/men"
                            aria-label="Our product"
                            title="Our product"
                            className={`font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400`}
                          >
                            Men
                          </Link>
                        </li>
                        <li className={loc.pathname === '/women' ? "pl-4 bg-gray-300 rounded-md" : ""}>
                          <Link
                            to="/women"
                            aria-label="Our product"
                            title="Our product"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Women
                          </Link>
                        </li>
                        <li className={loc.pathname === '/kids' ? "pl-4 bg-gray-300 rounded-md" : ""}>
                          <Link
                            to="/kids"
                            aria-label="Product pricing"
                            title="Product pricing"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Kids
                          </Link>
                        </li>
                        <li className={loc.pathname === '/more' ? "pl-4 bg-gray-300 rounded-md" : ""}>
                          <Link
                            to="/more"
                            aria-label="Product pricing"
                            title="Product pricing"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            More..
                          </Link>
                        </li><hr/>
                        <li className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">   
                            My Profile
                        </li><hr/>
                        <li className={loc.pathname === '/dashboard' ? "pl-4 bg-gray-300 rounded-md" : ""}>
                          <Link
                            to="/dashboard"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            aria-label="Sign up"
                            title="Sign up"
                          >
                            My Order
                          </Link>
                        </li>
                        <li className={loc.pathname === '/addProfile' ? "pl-4 bg-gray-300 rounded-md" : ""}>
                          <Link
                            to="/addProfile"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            aria-label="Sign up"
                            title="Sign up"
                          >
                            My Account
                          </Link>
                        </li>
                        <li className={loc.pathname === '/cart' ? "pl-4 bg-gray-300 rounded-md" : ""}>
                          <Link
                            to="/cart"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            aria-label="Sign up"
                            title="Sign up"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" viewBox="0 0 16 16">
                              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                            </svg>
                          </Link>
                        </li>
                        <li >
                          <div
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            aria-label="Sign up"
                            title="Sign up"
                            onClick={logout}
                          >
                            Logout
                          </div>
                        </li>
                      </ul>}
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
