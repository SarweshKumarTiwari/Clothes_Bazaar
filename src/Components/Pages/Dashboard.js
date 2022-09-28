import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Dashboard() {
  const lst = [
    {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
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
    "price": 15.99,
    "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    "rating": {
    "rate": 2.1,
    "count": 430
    }
    }
  ];
  const [first, setfirst] = useState(lst);
  const remove = e => {
    const newarr = [...first];
    const index = newarr.findIndex(ele => ele.id === Number(e.target.value));
    newarr.splice(index, 1);
    setfirst(newarr);
  }
  return (
    <div className="bg-gray-100 my-3 dark:bg-gray-900 dark:text-white text-gray-600 h-screen flex overflow-hidden text-sm">
      <div className="flex-grow overflow-hidden h-full flex flex-col">
        <div className="flex-grow flex overflow-x-hidden">
          <div className="xl:w-72 w-48 flex-shrink-0 border-r border-gray-200 dark:border-gray-800 h-full overflow-y-auto lg:block hidden p-5">
            <div className="text-xs text-gray-400 tracking-wider">USERS</div>

            <div className="space-y-4 mt-3">
              <Link to='/cart' className="bg-white p-3 w-full flex flex-col rounded-md dark:bg-gray-800 hover:shadow-lg relative hover:ring-2 ring-blue-500 shadow">
                Cart
              </Link>
              <Link to='/addProfile' className="bg-white p-3 w-full flex flex-col rounded-md dark:bg-gray-800 hover:shadow-lg relative hover:ring-2 ring-blue-500 focus:outline-none">
                Edit Profile
              </Link>
              <button className="bg-white p-3 w-full flex flex-col rounded-md dark:bg-gray-800 hover:shadow-lg relative hover:ring-2 ring-blue-500 shadow">
                Settings
              </button>
              <button className="bg-white p-3 w-full flex flex-col rounded-md dark:bg-gray-800 hover:shadow-lg relative hover:ring-2 ring-blue-500 shadow">
                Add Friends
              </button>
              <button className="bg-white p-3 w-full flex flex-col rounded-md dark:bg-gray-800 hover:shadow-lg relative hover:ring-2 ring-blue-500 shadow">
                Logout
              </button>
            </div>
          </div>
          <div className="flex-grow bg-white dark:bg-gray-900 overflow-y-auto">
            <div className="sm:px-7 sm:pt-7 px-4 pt-4 flex flex-col w-full border-b border-gray-200 bg-white dark:bg-gray-900 dark:text-white dark:border-gray-800  top-0">
              <div className="flex w-full items-center">
                <div className="flex pb-1 items-center text-3xl text-gray-900 dark:text-white">
                  <img src="https://assets.codepen.io/344846/internal/avatars/users/default.png?fit=crop&format=auto&height=512&version=1582611188&width=512" className="w-12 mr-4 rounded-full" alt="" />
                  Mert Cukuren
                </div>
                <div className="ml-auto sm:flex hidden items-center justify-end">
                  <div className="text-right">
                    <div className="text-xs text-gray-400 dark:text-gray-400">Email:</div>
                    <div className="text-gray-900 text-lg dark:text-white">nobody1234@company.com</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sm:p-7 p-4 my-5">
              {first.length ? first.map(e =>
                <div className="w-full flex  border-2 border-b-4 border-gray-200 rounded-xl my-2 hover:bg-gray-50" key={e.id}>
                  <Link to='/item' className='w-full' state={e}>
                    <div className="grid grid-cols-6 p-5 gap-y-2">
                      <div>
                        <img src={e.image} className="max-w-16 max-h-16 " alt="" />
                      </div>
                      <div className="col-span-5 md:col-span-4 ml-4">
                        <p className="text-sky-500 font-bold text-xs">{e.category}</p>
                        <p className="text-gray-600 font-bold">{e.title}</p>
                        <p className="text-gray-400">{e.price}</p>
                        <p className="text-gray-400"> {e.quantity} </p>
                      </div>
                    </div>
                  </Link>
                  <div className="flex my-3 mr-2 mx-auto justify-end" >
                    <button className="rounded-lg text-red-500 font-bold bg-red-100  py-1 px-3 text-sm w-fit h-fit hover:bg-red-200" value={e.id} onClick={remove}> Remove </button>
                  </div>
                </div>
              ) :
                <div className="container mx-0 h-screen ">
                  <div className="flex items-center justify-center h-12rem">
                    <div className="bg-white shadow-2xl p-6 rounded-2xl border-2 border-gray-50">
                      <div className="flex flex-col">
                        <div className="my-6">
                          <div className="flex flex-row space-x-4 items-center">
                            <div id="temp">
                              <h4 className="text-4xl">Not Found</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>}
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
