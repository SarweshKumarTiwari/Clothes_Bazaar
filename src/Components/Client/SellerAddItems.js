import Cookies from 'js-cookie';
import React,{useState} from 'react';
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { ToastContainer,toast } from 'react-toastify';
import { authorise, insert } from '../functions';

export default function SellerAddItems() {
    const [title, settitle] = useState('');
    const [isAuth, setisAuth] = useState(!Cookies.get("SellerToken") ? false : true);
    const [price, setprice] = useState('');
    const [image, setimage] = useState('');
    const [quantity, setquantity] = useState('');
    const [description, setdescription] = useState('');
    const [category, setcategory] = useState('');

    useEffect(() => {
        authorise('authoriseseller',"SellerToken").then(x => {
            if (!x.error) {
              setisAuth(true);
            }
            else {
              setisAuth(false);
            }
          })
    }, [])
    

    const insertItem=()=>{
        if (!(title&&price&&quantity&&description&&category&&image)) {
            console.log("not");
            return;
        }
        insert("fillstock",
        {title:title,
            price:price,
            quantity:quantity,
            description:description,
            category:category,
            image:image},
            "SellerToken")
            .then(e=>{
                if (e.success) {
                    toast.success("Successfully added your item")
                }
                else{
                    toast.error(e.error);
                }
            })
            .catch(error=>console.log(error))
        
    }
    return (
        isAuth?<div className="bg-white  rounded-lg shadow sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden">
            <ToastContainer/>
            <div className="mx-4 px-4 py-1 sm:px-10">
                <div className="relative mt-4">
                    <h3 className="my-6 text-xl font-medium text-center text-gray-600 dark:text-gray-200">Insert the item to Shop</h3><hr />
                    <div className="relative flex justify-center text-sm leading-5">
                        <span className="px-2 text-gray-500 bg-white">
                            Search criteria
                        </span>
                    </div>
                </div>
                <div className="mt-6">
                    <div className="w-full space-y-6">
                        <div className="w-full">
                            <div className=" relative ">
                                <p className="font-medium text-slate-700 ">Title</p>
                                <input type="text" id="search-form-price" value={title} onChange={e=>settitle(e.target.value)} className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-1 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Title of Item" />
                            </div>
                        </div>
                        <div className="w-full">
                            <div className=" relative ">
                                <p className="font-medium text-slate-700 ">Price</p>
                                <input type="text" id="search-form-location" value={price} onChange={e=>setprice(e.target.value)} className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-1 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Price of Item" />
                            </div>
                        </div>
                        <div className="w-full">
                            <div className=" relative ">
                                <p className="font-medium text-slate-700 ">Quantity</p>
                                <input type="text" id="search-form-name" value={quantity} onChange={e=>setquantity(e.target.value)} className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-1 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Quntity of Items" />
                            </div>
                        </div>
                        <div className="w-full">
                            <div className=" relative ">
                                <p className="font-medium text-slate-700 ">Category</p>
                                <div className="flex items-center gap-8 my-2">
                                    <label className="inline-flex items-center">
                                        <input type="radio" name="vehicle" className="w-5 h-5 text-red-600" onClick={()=>setcategory("men")} />
                                        <span className="ml-2 text-gray-700">
                                           Men
                                        </span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input type="radio" name="vehicle" className="w-5 h-5 text-red-600" onClick={()=>setcategory("women")} />
                                        <span className="ml-2 text-gray-700">
                                            Women
                                        </span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input type="radio" name="vehicle" className="w-5 h-5 text-red-600" onClick={()=>setcategory("kids")} />
                                        <span className="ml-2 text-gray-700">
                                            Kids
                                        </span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input type="radio" name="vehicle" className="w-5 h-5 text-red-600" onClick={()=>setcategory("more")} />
                                        <span className="ml-2 text-gray-700">
                                            More
                                        </span>
                                    </label>
                                </div>

                            </div>
                        </div>
                        <div className="w-full">
                            <div className=" relative ">
                                <p className="font-medium text-slate-700 ">Description</p>
                                <textarea type="text" id="search-form-name" value={description} onChange={e=>setdescription(e.target.value)} className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-1 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Description" />
                            </div>
                        </div>
                        <div className="w-full">
                            <div className=" relative ">
                                <p className="font-medium text-slate-700 ">Image Url</p>
                                <input type="text" id="search-form-name" value={image} onChange={e=>setimage(e.target.value)} className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-1 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="url of image" />
                            </div>
                        </div>
                        <div>

                            <span className="block w-full rounded-md shadow-sm">
                                <button type="button" className="py-2 px-4 mb-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg " onClick={insertItem}>
                                    Add to Show
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-4 py-6 border-t-2 border-gray-200 bg-gray-50 sm:px-10">
                <p className="text-xs leading-5 text-gray-500">
                    This data are display for information and can change
                </p>
            </div>
        </div>:
        <Navigate to='/sellerlogin'/>

    )
}
