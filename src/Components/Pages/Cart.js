import React, { useState, useEffect } from 'react'
import { authorise, deleteitem } from '../functions'
import { Link, Navigate } from 'react-router-dom'
import axios from 'axios';
import {ToastContainer,toast} from 'react-toastify'
export default function Cart() {
  let no = 0;
  const list=[];
  const [isAuth, setisAuth] = useState(!localStorage.getItem("AuthToken") ? false : true);
  const [first, setfirst] = useState([]);
  const [before, setbefore] = useState(false);
  const add = (e) => {
    const ind = first.findIndex(e1 => e1._id === e.target.value);
    const newarr = [...first];
    const price = String(Number(first[ind].price) / Number(first[ind].quantity));
    newarr[ind].quantity = String(Number(first[ind].quantity) + 1);
    newarr[ind].price =String(Math.round(price * Number(first[ind].quantity)))
    setfirst(newarr);
  }

  const sub = (e) => {
    const ind = first.findIndex(e1 => e1._id === e.target.value);
    const newarr = [...first];
    const price = String(Number(first[ind].price) / Number(first[ind].quantity));
    if (first[ind].quantity <= 1) {
      newarr[ind].quantity = '1';
      newarr[ind].price = String(Math.round(price * Number(first[ind].quantity)));
      setfirst(newarr);
    }
    else {
      newarr[ind].quantity = String(Number(first[ind].quantity) - 1);
      newarr[ind].price = String(Math.round(price * Number(first[ind].quantity)));
      setfirst(newarr);
    }
  }

  const remove = e => {
    const newarr = [...first];
    const index = newarr.findIndex(ele => ele._id === e.target.value);
    deleteitem('deleteitem', { product_id: newarr[index]._id }).then(e => {
      if (!e.error) {
        newarr.splice(index, 1);
        setfirst(newarr);
        no += 1;
      } else {
        console.error("Server Error");
      }
    })
  }
  const totalPrice=()=>{
    let price=0;
    first.forEach(element => {
      price+=Number(element.price);
    });
    return Math.round(price);
  }
  const purchaseall=()=>{
    axios.post('http://localhost:4000/insert_Purchaseditems',{data:list},{
      headers:{
        "Authorization":`Bearer ${localStorage.getItem("AuthToken")}`
      }
    }).then(e=>{
      if (!e.data.error) {
        toast.success("Purchased all successfully !")
      }
      else{
        toast.error(!e.data.error)
      }
    }).catch(()=>toast.error("Server error"))
  }

  useEffect(() => {
    authorise('showitems').then(e => {
      if (!e.error) {
        setisAuth(true)
        setfirst(e.success.data);
        setbefore(true);
      } else { setisAuth(false); setbefore(false) }
    })
  }, [no]);

  return (
    isAuth ? <div className="bg-gray-100">
      {before?<section>
        <ToastContainer/>
        <section className="text-gray-600 body-font">
          <div className="container px-5  pb-1 py-3 mx-auto">
            <h4 className="font-medium leading-tight text-2xl mt-0 mb-2 text-gray-800 text-center">Your Cart</h4>
            <div className="p-5 bg-white flex items-center mx-auto border-b  mb-10 border-gray-200 rounded-lg sm:flex-row flex-col">
              <h3 className="text-black text-2xl title-font font-bold mb-2">Buy All :</h3>
              <h5 className='text-black mx-24 title-font  mb-0.5'>The total purchase Cost :<span className="font-bold px-10 text-xl">{totalPrice()}</span></h5>
              <div className="flex mb-0.5">
                <p className="text-black mx-24 title-font mb-0.5">Total number of Items :<span className="font-bold px-10 text-xl">{first.length}</span></p>
              </div>
              <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded" onClick={purchaseall}>Purchase All</button>
            </div>
            {first.length ? first.map(e =>list.push({ title: e.title, price: e.price, quantity: e.quantity, description: e.description, category: e.category, image: e.image })
              &&<div className="p-5 bg-white flex items-center mx-auto border-b  mb-10 border-gray-200 rounded-lg sm:flex-row flex-col" key={e._id}>
              <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center flex-shrink-0">
                <img
                  src={e.image} alt='img' />
              </div>
              <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h1 className="text-black text-2xl title-font font-bold mb-2">{e.title}</h1>
                <p className="leading-relaxed text-base">{e.description}</p>

                <div className="md:flex font-bold text-gray-800">
                  <div className="w-full md:w-1/2 flex space-x-3">
                    <div className="w-1/2 flex space-x-2">
                      <button className='bg-gray-100 mb-3 pt-1 pb-1 px-2 py-2 rounded-2xl' value={e._id} onClick={add}>+</button>
                      <p className='px-2 py-2' >{e.quantity}</p>
                      <button className='bg-gray-100 mb-3 pt-1 pb-1 px-2 py-2 rounded-2xl' value={e._id} onClick={sub}>-</button>
                    </div>
                    <div className="w-1/2">
                      <h2 className="text-gray-500">Price</h2>
                      <p>{Math.round(e.price)}</p>
                    </div>
                  </div>
                </div>
                <div className="flex ">
                  <Link className="mt-3 text-red-500 text-center inline-flex items-center" to='/item' state={{ title: e.title, price: e.price, quantity: e.quantity, description: e.description, category: e.category, image: e.image }}>Purchase
                  </Link>
                  <button className="mt-3 mx-6 text-red-500 text-center inline-flex items-center" value={e._id} onClick={remove}>Remove
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            ) :
              <div className="p-5 bg-white flex items-center mx-auto border-b  mb-10 border-gray-200 rounded-lg sm:flex-row flex-col" >
                <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                  <h1 className="text-black text-2xl title-font font-bold mb-2">Nothing in Cart</h1>
                  <p className="leading-relaxed text-base">your cart is Empty</p>
                </div>
              </div> 
            }

          </div>
        </section>
      </section>:
      <div className="flex items-center justify-center bg-gray-100 py-10">
      <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>}
    </div> :
      <Navigate to="/login" />
  )
}
