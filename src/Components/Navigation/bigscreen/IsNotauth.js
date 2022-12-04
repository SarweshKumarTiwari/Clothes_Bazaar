import React from 'react'
import { Link } from 'react-router-dom'
export default function IsNotauth(props) {
  return (
    <ul className="flex items-center hidden ml-auto space-x-8 lg:flex">
            <li>
              <Link
                to="/login"
                aria-label="Sign in"
                title="Sign in"
                className={`font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 ${props.pathname === '/login' ? "underline underline-offset-8" : ""}`}
              >
                Log in
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                className={`font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 ${props.pathname === '/signup' ? "underline underline-offset-8" : ""}`}
                aria-label="Sign up"
                title="Sign up"
              >
                Sign up
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                state={{isAuth:props.isAuth}}
                className={`inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-gray-100 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none`}
                aria-label="Sign up"
                title="Sign up"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" viewBox="0 0 16 16">
                  <path style={{ color: `${props.pathname === '/cart' ? "grey" : ""}` }} d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                </svg>
              </Link>
            </li>
          </ul>
  )
}
