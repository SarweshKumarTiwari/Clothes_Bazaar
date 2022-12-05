import React, { useState, useEffect, useContext } from 'react';
import pic from "./images/cb.png";
import { Link, useLocation} from "react-router-dom"
import { authorise } from './functions';
import { StateProvider } from './context/Navtoggle';
import BigScreenCat from './Navigation/bigscreen/BigScreenCat';
import IsNotauth from './Navigation/bigscreen/IsNotauth';
import IsAuth from './Navigation/bigscreen/IsAuth';
import SellerAuth from './Navigation/bigscreen/SellerAuth';
import SmallScreenCat from './Navigation/smallscreen/SmallScreenCat';
import IsNotAuth1 from './Navigation/smallscreen/IsNotAuth';
import IsAuth1 from './Navigation/smallscreen/IsAuth';
import IsAuthSeller from './Navigation/smallscreen/IsAuthSeller';

export default function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data2 } = useContext(StateProvider);
  
  //This 'isAuth' variable is used to check if User is Authorised 
  const [isAuth, setisAuth] = useState(false);
  const [isseller, setisseller] = useState(false)

  const loc = useLocation();
  useEffect(() => {
    setIsMenuOpen(false);
  }, [loc.pathname])

  useEffect(() => {
    data2.update(isMenuOpen);  
  }, [data2,loc.pathname,isMenuOpen])
  
  useEffect(() => {
    authorise('authorise').then(x => {
      if (!x.error) {
        setisAuth(true);
      }
      else {
        setisAuth(false);
      }
    })
  });
  useEffect(() => {
    authorise('authoriseseller',"SellerToken").then(x => {
      if (!x.error) {
        setisseller(true);
      }
      else {
        setisseller(false);
      }
    })
  });
  return (
    <div className="bg-gray-900">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex grid items-center grid-cols-2 lg:grid-cols-3">
          <BigScreenCat pathname={loc.pathname} />
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
          {isseller?<SellerAuth isAuth={isseller}/>:!isAuth ? <IsNotauth isAuth={isAuth} pathname={loc.pathname} />
            :
            <IsAuth isAuth={isAuth} pathname={loc.pathname} />}
          <div className="ml-auto lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => { setIsMenuOpen(true); data2.update(!isMenuOpen) }}
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
                        onClick={() => { setIsMenuOpen(false); data2.update(!isMenuOpen) }}
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
                    <ul className="space-y-4">
                      <li>
                        <SmallScreenCat pathname={loc.pathname}/>
                      </li>
                      <li>
                        {isseller?<IsAuthSeller pathname={loc.pathname} isAuth={isseller}/>:!isAuth ? <IsNotAuth1 pathname={loc.pathname}/>:
                          <IsAuth1 isAuth={isAuth} pathname={loc.pathname}/>}
                      </li>
                      {!isseller&&<li className={loc.pathname === '/cart' ? "pl-4 bg-gray-300 rounded-md" : ""}>
                        <Link
                          to="/cart"
                          state={{ isAuth: isAuth }}
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          aria-label="Sign up"
                          title="Sign up"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                          </svg>
                        </Link>
                      </li>}
                    </ul>

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
