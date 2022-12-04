import React from 'react';
import { Link } from 'react-router-dom';

export default function SmallScreenCat(props) {
  return (
    <ul className="space-y-4">
                        <li className={props.pathname === '/men' ? "pl-4 bg-gray-300 rounded-md" : ""}>
                          <Link
                            to="/men"
                            aria-label="Our product"
                            title="Our product"
                            className={`font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400`}
                          >
                            Men
                          </Link>
                        </li>
                        <li className={props.pathname === '/women' ? "pl-4 bg-gray-300 rounded-md" : ""}>
                          <Link
                            to="/women"
                            aria-label="Our product"
                            title="Our product"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Women
                          </Link>
                        </li>
                        <li className={props.pathname === '/kids' ? "pl-4 bg-gray-300 rounded-md" : ""}>
                          <Link
                            to="/kids"
                            aria-label="Product pricing"
                            title="Product pricing"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Kids
                          </Link>
                        </li>
                        <li className={props.pathname === '/more' ? "pl-4 bg-gray-300 rounded-md" : ""}>
                          <Link
                            to="/more"
                            aria-label="Product pricing"
                            title="Product pricing"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            More..
                          </Link>
                        </li>
                        </ul>
  )
}
