import React,{useState,useEffect} from 'react'
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { authorise, update } from '../functions';

export default function AddProfile() {
    const [change, setchange] = useState(0);
    const [name1, setname1] = useState("")
    const [email, setemail] = useState("null")
    const [user, setuser] = useState("");
    const [name, setname] = useState("default");
    const [phone, setphone] = useState("");
    const [add, setadd] = useState("");
    const [pass, setpass] = useState("");
    const [newpass, setnewpass] = useState("");
    const updateprof=(e)=>{
        e.preventDefault();
        const ob={UserName:user,Name:name,Phone:phone,Address:add};
        const data={'data':{}};
        for (const key in ob) {
            if (ob[key]!=='') {
                data.data[key] = ob[key];   
            }
        }
        update('http://localhost:4000/update',data)
        .then(x=>{
                if (!x.error) {
                    toast.success(x.success)
                    setchange(change+1);
                }
                else{
                    toast.error(x.error)
                }
            })
    }
    const changepassword=()=>{
        if (!pass||!newpass) {
            toast.error("Password field is empty")
        }
        else{
            update('http://localhost:4000/updatepassword',
            {data:{Password:pass,NewPassword:newpass}}
            ).then(x=>{
                if (!x.error) {
                    toast.success(x.success)
                }
                else{
                    toast.error(x.error)
                }
            })
        }
    }
    useEffect(() => {
      authorise("showprofile").then(x=>{
        if (!x.error) {
            setuser(x.success.data.UserName)
            setemail(x.success.data.Email);
            setname(x.success.data.Name);
            setname1(x.success.data.Name)
            setphone(x.success.data.Phone);
            setadd(x.success.data.Address);
        }
      });
    },[change])
    
    return (
        <section className="py-6 bg-gray-100 bg-opacity-50">
            <ToastContainer/>
            <form className="container  max-w-2xl mx-auto shadow-md md:w-3/4" id="form_submit">
                <div className="w-full rounded-t-lg p-5 bg-white ">
                    <h1 className='text-2xl text-center'>Personal Details</h1>
                    <div className="md:inline-flex w-full">
                        <div className="my-2 w-36">
                            <img src={`https://img.icons8.com/external-others-inmotus-design/344/external-${!name1?'A':name1[0]}-alphabet-others-inmotus-design-20.png`} alt="profile" className='rounded-full mr-4 w-12' srcSet="" />
                        </div>
                        <div className="mx-2 my-6 w-full">
                            <p>{name1}</p>
                        </div>
                        <div className="items-right mx-2 my-6  w-full">
                            <p className='text-right'>{email}</p>
                        </div>
                    </div>
                </div><hr/>
                <div className="space-y-6 bg-white">
                    <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                        <h2 className="max-w-sm mx-auto md:w-1/3">
                            UserName
                        </h2>
                        <div className="max-w-sm mx-auto md:w-2/3">
                            <div className="  ">
                                <input type="text" id="user-info-email" value={user} onChange={(e)=>{setuser(e.target.value)}} className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent" placeholder="UserName" />
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                        <h2 className="max-w-sm mx-auto md:w-1/3">
                            Personal info
                        </h2>
                        <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
                            <div>
                                <div className="  ">
                                    <input type="text" id="user-info-name" value={name} onChange={(e)=>{setname(e.target.value)}} className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent" placeholder="Name" />
                                </div>
                            </div>
                            <div>
                                <div className="  ">
                                    <input type="text" id="user-info-phone" value={phone} onChange={(e)=>{setphone(e.target.value)}} className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent" placeholder="Phone number" />
                                </div>
                            </div>
                            <div>
                                <div className="  ">
                                    <textarea type="text" id="user-info-phone" value={add} onChange={(e)=>{setadd(e.target.value)}} className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent" placeholder="Address" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="items-center w-full p-8 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                        <h2 className="max-w-sm mx-auto md:w-4/12">
                            Change password
                        </h2>
                        <div className="w-full max-w-sm pl-2 mx-auto space-y-5 md:w-5/12 md:pl-9">
                            <div className="  ">
                                <input type="text" id="user-info-password" value={pass} onChange={(e)=>{setpass(e.target.value)}} className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent" placeholder="Password" />
                            </div>
                            <div className="  ">
                                <input type="text" id="user-info-password" value={newpass} onChange={(e)=>{setnewpass(e.target.value)}} className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent" placeholder="New Password" />
                            </div>
                            <div className='mx-2'>
                                <h5 className='text-gray-400 hover:text-gray-700'>Forgot password?</h5>
                            </div>
                        </div>
                        <div className="text-center md:w-3/12 md:pl-6">
                            <button type="button" className="py-2 px-4  bg-pink-600 hover:bg-pink-700 focus:ring-pink-500 focus:ring-offset-pink-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg " onClick={changepassword}>
                                Change
                            </button>
                        </div>
                    </div>
                    <hr />
                    <div className="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
                        <button type="submit" className="py-2 px-4  bg-gray-600 hover:bg-gray-700  text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none   rounded-lg " onClick={updateprof}>
                            Save
                        </button>
                    </div>
                </div>
            </form>
        </section>

    )
}
