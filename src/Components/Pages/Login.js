import React from 'react';
import {useNavigate} from 'react-router-dom'
import {authenticate} from '../functions';
import {ToastContainer,toast} from 'react-toastify';

export default function Login() {
  const navigate=useNavigate();
  const onSubmit=(e)=>{
    e.preventDefault();
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    if(!email){
      document.getElementById("e").innerText="Please Enter Email";
    }
    else{
      document.getElementById("e").innerText="";
    }
    if(!password){
      document.getElementById("p").innerText="Please Enter Password";
    }
    else{
      document.getElementById("p").innerText="";
    }
    if (email&&password) {
      authenticate("http://localhost:4000/login",
      {email:email,password:password}
      ).then(x=>{
        if (x.error) {
          toast.error(x.error);
        }
        else{
          navigate("/");
        }
      })
    }
  }
  return (
    <div className="max-w-lg mx-auto my-5 bg-white p-8 rounded-xl shadow shadow-slate-300">
        <ToastContainer/>
        <h1 className="text-4xl font-medium">Login</h1>
        <div className="my-5">
            <button className="w-full text-center py-3 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
            <a href='/' style={{display:"flex"}}><svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-3" viewBox="0 0 48 48"            >
                  <path fill="#1f2937" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" />
                  <path fill="#1f2937" d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" />
                  <path fill="#1f2937" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" />
                  <path fill="#1f2937" d="M43.611 20.083 43.595 20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" />
                </svg> <span>Login with Google</span></a>
            </button>
        </div>
        <form action="" className="my-3">
            <div className="flex flex-col space-y-2">
                <label htmlFor="email">
                    <p className="font-medium text-slate-700 pb-2">Email address</p>
                    <input id="email" name="email" type="email" className="w-full py-2 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter email address"/>
                </label>
                <div className="relative mt-1"><p className=' mx-3 italic text-red-500 font-light text-xs' id='e'></p></div>
                <label htmlFor="password">
                    <p className="font-medium text-slate-700 pb-2">Password</p>
                    <input id="password" name="password" type="password" className="w-full py-2 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter your password"/>
                </label>
                <div className="relative mt-1"><p className=' mx-3 italic text-red-500 font-light text-xs' id='p'></p></div>
                <div className="flex flex-row justify-between">
                    <div>
                        <a href="/" className="font-medium text-gray-600">Forgot Password?</a>
                    </div>
                </div>
                <button className="w-full py-3 font-medium text-white bg-gray-800 hover:bg-gray-600 rounded-lg border-gray-600 hover:shadow inline-flex space-x-2 items-center justify-center" onClick={onSubmit}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                      </svg>
                      <span>Login</span>
                </button>
                <p className="text-center">Not registered yet? <a href="/" className="text-gray-600 font-medium inline-flex space-x-1 items-center"><span>Register now </span><span><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg></span></a></p>
            </div>
        </form>
    </div>
  )
}
