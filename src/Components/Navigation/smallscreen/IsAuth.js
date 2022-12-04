import Cookies from 'js-cookie';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function IsAuth(props) {
    const navigate = useNavigate();
    const logout = () => {
        Cookies.remove("AuthToken");
        navigate("/")
    }
    return (
        <ul className='space-y-4'>
            <hr />
            <li className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">
                My Profile
            </li><hr />
            <li className={props.pathname === '/dashboard' ? "pl-4 bg-gray-300 rounded-md" : ""}>
                <Link
                    to="/dashboard"
                    state={{ isAuth: props.isAuth }}
                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    aria-label="Sign up"
                    title="Sign up"
                >
                    My Order
                </Link>
            </li>
            <li className={props.pathname === '/addProfile' ? "pl-4 bg-gray-300 rounded-md" : ""}>
                <Link
                    to="/addProfile"
                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    aria-label="Sign up"
                    title="Sign up"
                >
                    My Account
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
        </ul>
    )
}
