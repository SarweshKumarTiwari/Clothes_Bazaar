import React from 'react'
import { Link } from 'react-router-dom'

export default function BigScreenCat(props) {
  return (
    <ul className="flex items-center hidden space-x-8 lg:flex">
            <li>
              <Link
                to="/men"
                aria-label="Our product"
                title="Our product"
                className={`font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 ${props.pathname === '/men' ? "underline underline-offset-8" : ""}`}
              >
                Men
              </Link>
            </li>
            <li>
              <Link
                to="/women"
                aria-label="Our product"
                title="Our product"
                className={`font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 ${props.pathname === '/women' ? "underline underline-offset-8" : ""}`}
              >
                Women
              </Link>
            </li>
            <li>
              <Link
                to="/kids"
                aria-label="Product pricing"
                title="Product pricing"
                className={`font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 ${props.pathname === '/kids' ? "underline underline-offset-8" : ""}`}
              >
                Kids
              </Link>
            </li>
            <li>
              <Link
                to="/more"
                aria-label="Product pricing"
                title="Product pricing"
                className={`font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 ${props.pathname === '/more' ? "underline underline-offset-8" : ""}`}
              >
                More..
              </Link>
            </li>
          </ul>
  )
}
