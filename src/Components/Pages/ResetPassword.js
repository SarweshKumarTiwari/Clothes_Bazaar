import axios from 'axios';
import React,{useState,useEffect} from 'react'
import { useParams,useNavigate } from 'react-router-dom';
import { ToastContainer,toast } from 'react-toastify'
import validator from 'validator';
export default function ResetPassword() {
    let params=useParams();
    const navigate=useNavigate();
    const url=`http://localhost:4000/reset_password/${params.token}/${params.id}`;
    const [password, setpassword] = useState("");
    const [resetpassword, setresetpassword] = useState("");
    const [valid, setvalid] = useState(false);
     async function reset(e){
        e.preventDefault();
        if (!validator.isStrongPassword(password)) {
            document.getElementById('e').innerText="Password is not Strong";
            return;
        }
        if (password!==resetpassword) {
            document.getElementById('e1').innerText="Password is not Same please check";
            return;
        }
        else{
            await axios.post(url,{password:password}).then(e=>{
                if (!e.data.error) {
                   navigate("/login");
                }
                else{
                    toast.error(e.data.error);
                }
            })
        }
    }
    async function checkvalid(){
        await axios.get(`http://localhost:4000/${params.token}/${params.id}`).then(e=>{
            if(!e.data.error){
                setvalid(true);
            }else{
                setvalid(false);
            }
       })
    }
    useEffect(() => {
        checkvalid();
    });
    
  return (
    valid?<div className="max-w-lg mx-auto my-24 bg-gray-100 p-8 rounded-xl shadow shadow-slate-300">
            <ToastContainer />
            <h1 className="text-2xl font-medium">Reset Password</h1><hr className='border-slate-400 my-3' />
            <div className="my-5">
            </div>
            <div className="my-3">
                <div className="flex flex-col space-y-2">
                    <label htmlFor="password">
                        <p className="font-medium text-slate-700 pb-2">Password</p>
                        <input  name="email" type="password" value={password} onChange={(e)=>setpassword(e.target.value)} className="w-full py-2 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter Password" />
                    </label>
                    <div className="relative mt-1"><p className=' mx-3 italic text-red-500 font-light text-xs' id='e'></p></div>
                    <label htmlFor="new_password">
                        <p className="font-medium text-slate-700 pb-2">Confirm Password</p>
                        <input  name="email" type="password" value={resetpassword} onChange={e=>setresetpassword(e.target.value)} className="w-full py-2 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Confirm Password" />
                    </label>
                    <div className="relative mt-1"><p className=' mx-3 italic text-red-500 font-light text-xs' id='e1'></p></div>
                    <button className="w-auto mt-4 py-3 font-medium text-white bg-gray-800 hover:bg-gray-600 rounded-lg border-gray-600 hover:shadow inline-flex space-x-2 items-center justify-center"onClick={reset} >
                        <span>Create new Password</span>
                    </button>
                </div>
            </div>
        </div>:
        <div className="max-w-lg mx-auto my-24 bg-gray-100 p-8 rounded-xl shadow shadow-slate-300">
             <h1 className="text-2xl font-medium">OOPS...</h1>
             <p className="font-medium text-slate-700 pb-2">Please check link or link is expired</p>
        </div>
  )
}
