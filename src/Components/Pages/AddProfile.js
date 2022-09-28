import React,{useState} from 'react'
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AddProfile() {
    const [user, setuser] = useState("");
    const [name, setname] = useState("");
    const [phone, setphone] = useState("");
    const [add, setadd] = useState("");
    const [pass, setpass] = useState("");
    const [newpass, setnewpass] = useState("");
    const update=(e)=>{
        e.preventDefault();
        toast.success("Successfully Updated");
        console.log({user:user,name:name,phone:phone,add:add,pass:pass,newpass:newpass});
    }
    return (
        <section className="py-6 bg-gray-100 bg-opacity-50">
            <ToastContainer/>
            <form className="container  max-w-2xl mx-auto shadow-md md:w-3/4" id="form_submit">
                <div className="w-full rounded-t-lg p-5 bg-white ">
                    <h1 className='text-2xl text-center'>Personal Details</h1>
                    <div className="md:inline-flex w-full">
                        <div className="my-2 w-36">
                            <img src="https://assets.codepen.io/344846/internal/avatars/users/default.png?fit=crop&format=auto&height=512&version=1582611188&width=512" alt="profile" className='rounded-full mr-4 w-12' srcSet="" />
                        </div>
                        <div className="mx-2 my-6 w-full">
                            <p>John Doe</p>
                        </div>
                        <div className="items-right mx-2 my-6  w-full">
                            <p className='text-right'>johndoe123@gmail.com</p>
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
                            <button type="button" className="py-2 px-4  bg-pink-600 hover:bg-pink-700 focus:ring-pink-500 focus:ring-offset-pink-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                Change
                            </button>
                        </div>
                    </div>
                    <hr />
                    <div className="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
                        <button type="submit" className="py-2 px-4  bg-gray-600 hover:bg-gray-700  text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none   rounded-lg " onClick={update}>
                            Save
                        </button>
                    </div>
                </div>
            </form>
        </section>

    )
}
