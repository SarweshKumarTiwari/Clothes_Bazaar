import React from 'react'
import { Link } from 'react-router-dom'
export default function IsNotAuth(props) {
  return (
    <ul className="space-y-4">
                          <li className={props.pathname === '/login' ? "pl-4 bg-gray-300 rounded-md" : ""}>
                            <Link
                              to="/login"
                              aria-label="Sign in"
                              title="Sign in"
                              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                              Log In
                            </Link>
                          </li>
                          <li className={props.pathname === '/signup' ? "pl-4 bg-gray-300 rounded-md" : ""}>
                            <Link
                              to="/signup"
                              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                              aria-label="Sign up"
                              title="Sign up"
                            >
                              Sign up
                            </Link>
                          </li>
                        </ul> 
  )
}
