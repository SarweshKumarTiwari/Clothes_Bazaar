import axios from 'axios';
import React,{useState} from 'react';
import { ToastContainer,toast } from 'react-toastify';
import validator from 'validator';


export default function ForgotPassword() {
    const [email, setemail] = useState('')
    const [first, setfirst] = useState(false)
    async function forgotPassword(){
        if (!validator.isEmail(email)) {
            document.getElementById("e").innerText="Not valid email Please check";
            return;
        }
        else{
            await axios.post("http://localhost:4000/forgot_password",{email:email}).then(e=>{
                if (!e.data.error) {
                    setfirst(true);
                    console.log(e.data);
                }
                else{
                    toast.error(e.data.error);
                }
            }).catch(()=>{
                toast.error("Server error occured")
            })
        }
    }
    return (
        <div className="max-w-lg mx-auto my-24 bg-gray-100 p-8 rounded-xl shadow shadow-slate-300">
            <ToastContainer />
            <h1 className="text-2xl font-medium">Fogot Password</h1><hr className='border-slate-400 my-3' />
            <div className="my-3">
                {!first?<div className="flex flex-col space-y-2">
                    <label htmlFor="email">
                        <p className="font-medium text-slate-700 pb-2">Email </p>
                        <input  type="email" value={email} onChange={e=>setemail(e.target.value)} className="w-full py-2 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter email address" />
                    </label>
                    <div className="relative mt-1"><p className=' mx-3 italic text-red-500 font-light text-xs' id='e'></p></div>
                    <button className="w-auto py-3 font-medium text-white bg-gray-800 hover:bg-gray-600 rounded-lg border-gray-600 hover:shadow inline-flex space-x-2 items-center justify-center" onClick={forgotPassword} >
                        <span>Create new Password</span>
                    </button>
                </div>:
                <div className="max-w-lg mx-auto my-24 bg-gray-100 p-8 rounded-xl shadow shadow-slate-300">
                <p className="font-medium text-slate-700 pb-2">Please check you email a link is send click on it and reset your password</p>
           </div>}
            </div>
        </div>
    )
}
