import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom'
import { authenticate } from '../functions';
import {ToastContainer,toast} from 'react-toastify'

export default function Signup() {
  const navigate=useNavigate();
  const [isstrong, setisstrong] = useState({col:"#f87171",text:"Not Strong"});
  const passwdStrng=()=>{
    const psd=document.getElementById("password").value;
    if (psd.length<6) {
      document.getElementById("p").innerText="Password length should be 6 or more then 6";
    }
    else{
      document.getElementById("p").innerText="";
    }
    if (/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(psd)) {
      setisstrong({col:"#4ade80",text:"Strong"});
    }
    else{
      setisstrong({col:"#f87171",text:"Not Strong"});
    }
  }

  const getinfo=(e)=>{
    e.preventDefault();
    const email=document.getElementById("email").value;
    const name=document.getElementById("username").value;
    const password=document.getElementById("password").value;
    const cnfpassword=document.getElementById("cnfpassword").value;
    const checked=document.getElementById("remember").checked;
    if (!email) {
      document.getElementById("e").innerText="Email field should not be empty";
    }
    else{
      document.getElementById("e").innerText="";
    }
    if (!name) {
      document.getElementById("n").innerText="Name field should not be empty";
    }
    else{
      document.getElementById("n").innerText="";
    }
    if (!checked) {
      document.getElementById("c").innerText="Please select privacy policy";
    }
    else{
      document.getElementById("c").innerText="";
    }
    if (email&&name&&password&&checked) {
      if (password===cnfpassword) {
        authenticate("http://localhost:4000/register",
        {name:name,email:email,password:password})
        .then(x=>{
          if(x.error){
            toast.error(x.error);
          }
          else{
            navigate("/");
          }
        });
      }
      else{
        document.getElementById("cp").innerText="Please checck the password";
      }
    }
    if(!password){
      document.getElementById("p").innerText="Please Enter Password"
    }
  }

  return (
    <div className="bg-white-800">
      <ToastContainer/>
      <div className="p-2 lg:w-1/2 mx-auto">
        <div className="bg-white rounded-t-lg p-8">
          <p className="text-center text-sm text-gray-400 font-light">Sign up with</p>
          <div>
            <div className="flex items-center justify-center space-x-4 mt-3">
              <button className="flex items-center py-2 px-4 text-sm uppercase rounded bg-white hover:bg-gray-100 text-gray-800 border border-transparent hover:border-transparent hover:text-gray-700 shadow-md hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"          >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="w-6 h-6 mr-3"            >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                </svg>
                Facebook
              </button>
              <button className="flex items-center py-2 px-4 text-sm uppercase rounded bg-white hover:bg-gray-100 text-gray-800 border border-transparent hover:border-transparent hover:text-gray-700 shadow-md hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"          >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-3" viewBox="0 0 48 48"            >
                  <path fill="#1f2937" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" />
                  <path fill="#1f2937" d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" />
                  <path fill="#1f2937" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" />
                  <path fill="#1f2937" d="M43.611 20.083 43.595 20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" />
                </svg>
                Google
              </button>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 rounded-b-lg py-12 px-4 lg:px-24">
          <p className="text-center text-sm text-gray-500 font-light">        Or sign up with credentials      </p>
          <form className="mt-6">
            <div className="relative">
              <input className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline" id="username" type="text" placeholder="Name" />
              <div className="absolute left-0 inset-y-0 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 ml-3 text-gray-400 p-1" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
              </div>
            </div>
            <div className="relative mt-1"><p className='mt-2 mx-3 italic text-red-500 font-light text-xs' id='n'></p></div>
            <div className="relative mt-3">
              <input className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline" id="email" type="text" placeholder="Email" />
              <div className="absolute left-0 inset-y-0 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 ml-3 text-gray-400 p-1" viewBox="0 0 20 20" fill="currentColor"            >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
            </div>
            <div className="relative mt-1"><p className='mt-2 mx-3 italic text-red-500 font-light text-xs' id='e'></p></div>
            <div className="relative mt-3">
              <input className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"  id="password" onChange={passwdStrng} type="password" placeholder="Password" />
              <div className="absolute left-0 inset-y-0 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 ml-3 text-gray-400 p-1" viewBox="0 0 20 20" fill="currentColor"            >
                  <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
                </svg>
              </div>
            </div>
            <div className="relative mt-1"><p className='mt-2 mx-3 italic text-red-500 font-light text-xs' id='p'></p></div>
            <div className="relative mt-3">
              <input className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline" id="cnfpassword" type="password" placeholder="Confirm Password" />
              <div className="absolute left-0 inset-y-0 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 ml-3 text-gray-400 p-1" viewBox="0 0 20 20" fill="currentColor"            >
                  <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
                </svg>
              </div>
            </div>
            <div className="relative mt-1"><p className='mt-2 mx-3 italic text-red-500 font-light text-xs' id='cp'></p></div>
            <p className="mt-4 italic text-gray-500 font-light text-xs">Password strength: <span className="font-bold" style={{color:isstrong.col}}>{isstrong.text}</span></p>
            <div className="mt-4 flex items-center text-gray-500">          
            <input type="checkbox" id="remember" name="remember" className="mr-2" />
                      <label className="text-sm" htmlFor="remember">I agree with the <a className="text-indigo-400 hover:text-indigo-500" href='/'>Privacy Policy</a></label>        </div>
            <div className="relative mt-1"><p className='mt-2 mx-3 italic text-red-500 font-light text-xs' id='c'></p></div>
            <div className="flex items-center justify-center mt-8">          <button className="text-white py-2 px-4 uppercase rounded bg-gray-800 hover:bg-gray-900 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5" onClick={getinfo}>Create Account</button>        </div>
          </form>
        </div>
      </div>
    </div>
  )
}
