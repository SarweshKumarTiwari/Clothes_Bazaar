import React, { useState } from 'react'
import {Link} from 'react-router-dom'
export default function Cart() {
  let lst = [
    {
      "id": 1,
      "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      "quantity":1,
      "price": 109.95,
      "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      "rating": {
      "rate": 3.9,
      "count": 120
      }
      },
      {
      "id": 2,
      "title": "Mens Casual Premium Slim Fit T-Shirts ",
      "quantity":1,
      "price": 22.3,
      "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      "rating": {
      "rate": 4.1,
      "count": 259
      }
      },
      {
      "id": 3,
      "title": "Mens Cotton Jacket",
      "quantity":1,
      "price": 55.99,
      "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      "rating": {
      "rate": 4.7,
      "count": 500
      }
      },
      {
      "id": 4,
      "title": "Mens Casual Slim Fit",
      "quantity":1,
      "price": 15.99,
      "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      "rating": {
      "rate": 2.1,
      "count": 430
      }
      }
  ]
  const [first,setfirst] = useState(lst)
  const add = (e) => {
    const element = lst.findIndex(ele=> ele.id === Number(e.target.value));
    const newarr=[...first];
    newarr[element].quantity+=1;
    newarr[element].price=lst[element].price*newarr[element].quantity;
    setfirst(newarr)
  }

  const sub = (e) => {
    const element = lst.findIndex(ele => ele.id === Number(e.target.value));
    const newarr=[...first];
    if (newarr[element].quantity<= 1) {
      newarr[element].quantity= 1;
      newarr[element].price=lst[element].price*newarr[element].quantity;
      setfirst(newarr);
    }
    else {
      newarr[element].quantity-= 1;
      newarr[element].price=lst[element].price*newarr[element].quantity;
      setfirst(newarr);
    }
  }
  
  const remove=e=>{
    const newarr=[...first];
    const index=newarr.findIndex(ele => ele.id === Number(e.target.value));
    newarr.splice(index,1);
    setfirst(newarr);
  }


  return (
    <div className="bg-gray-100">
      <section>
        <section className="text-gray-600 body-font">
          <h4 className="font-medium leading-tight text-2xl mt-0 mb-2 text-gray-800 text-center">Your Cart</h4>
          <div className="container px-5 pb-1 py-3 mx-auto">
            {first.length?first.map(e => <div className="p-5 bg-white flex items-center mx-auto border-b  mb-10 border-gray-200 rounded-lg sm:flex-row flex-col" key={e.id}>
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
                      <button className='bg-gray-100 mb-3 pt-1 pb-1 px-2 py-2 rounded-2xl' value={e.id} onClick={add}>+</button>
                      <p className='px-2 py-2' >{e.quantity}</p>
                      <button className='bg-gray-100 mb-3 pt-1 pb-1 px-2 py-2 rounded-2xl' value={e.id} onClick={sub}>-</button>
                    </div>
                    <div className="w-1/2">
                      <h2 className="text-gray-500">Price</h2>
                      <p>{e.price}</p>
                    </div>
                  </div>
                </div>
                <div className="flex ">
                <Link className="mt-3 text-red-500 text-center inline-flex items-center" to='/item' state={e}>Purchase
                </Link>
                <button className="mt-3 mx-6 text-red-500 text-center inline-flex items-center" value={e.id} onClick={remove}>Remove
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
                </div>
              </div>
            </div>
            ):
            <div className="p-5 bg-white flex items-center mx-auto border-b  mb-10 border-gray-200 rounded-lg sm:flex-row flex-col" >
              <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h1 className="text-black text-2xl title-font font-bold mb-2">Nothing in Cart</h1>
                <p className="leading-relaxed text-base">your cart is Empty</p>
              </div>
            </div>}
          </div>
        </section>
      </section>
    </div>
  )
}
