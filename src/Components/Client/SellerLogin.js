import React, { useState } from 'react'
import { Link,useNavigate} from 'react-router-dom'
import { authenticate } from '../functions';

export default function SellerLogin() {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [error, seterror] = useState('');
    const navigate=useNavigate();
    const login=(e)=>{
        e.preventDefault();
        if (!email||!password) {
            seterror(<div className="my-1 flex grid-cols-2  px-6 py-1 border border-red-300 rounded-full bg-red-100">
            <div className="w-3/4">
                <p className='text-red-500'>Some fields are empty</p>
            </div>
            <button className='justify-items-end ml-20' onClick={()=>{seterror('')}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x-circle " viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
            </button>
        </div>)
        return;
        }
        authenticate("http://localhost:4000/login/seller",
        {email:email,password:password},
        "SellerToken").then(e=>{
			if (e.error) {
				seterror(<div className="my-1 flex grid-cols-2  px-6 py-1 border border-red-300 rounded-full bg-red-100">
                <div className="w-3/4">
                    <p className='text-red-500'>{e.error}</p>
                </div>
                <button className='justify-items-end ml-20' onClick={()=>{seterror('')}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x-circle " viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                </button>
            </div>)
			}
			else{
				navigate("/")
			}
		}).catch(e=>{
			console.log(e);
		})
    }
    return (
        <div className="w-full max-w-sm mx-auto my-24 overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
            <div className="px-6 py-4">
                <h2 className="text-3xl font-bold text-center text-gray-700 dark:text-white">Brand</h2>

                <h3 className="mt-1 text-xl font-medium text-center text-gray-600 dark:text-gray-200">Welcome Back</h3>

                <p className="mt-1 text-center text-gray-500 dark:text-gray-400">Login or create account</p>
                <div className="my-1">
                    {error}
                </div>

                <form>
                    <div className="w-full mt-4">
                        <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="email" placeholder="Email Address" value={email} onChange={e => setemail(e.target.value)} aria-label="Email Address" />
                    </div>

                    <div className="w-full mt-4">
                        <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="password" placeholder="Password" value={password} onChange={e => setpassword(e.target.value)} aria-label="Password" />
                    </div>

                    <div className="flex items-center justify-between mt-4">
                        <a href="/" className="text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500">Forget Password?</a>

                        <button className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50" onClick={login}>
                            Sign In
                        </button>
                    </div>
                </form>
            </div>

            <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
                <span className="text-sm text-gray-600 dark:text-gray-200">Don't have an account? </span>

                <Link to="/sellersignup" className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">Register</Link>
            </div>
        </div>
    )
}
