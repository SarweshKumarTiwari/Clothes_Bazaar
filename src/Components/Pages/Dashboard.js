import React, { useState ,useEffect} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import {toast,ToastContainer} from 'react-toastify'
import { authorise,deleteitem } from '../functions';
export default function Dashboard() {
  let no=0;
  const navigate=useNavigate();
  const [before, setbefore] = useState(false)
  const [first, setfirst] = useState([]);
  const [user, setuser] = useState({name:'',email:""})
  const remove = e => {
    const newarr = [...first];
    const index = newarr.findIndex(ele => ele.id ===e.target.value);
    deleteitem('delete_Purchaseditem', { product_id: newarr[index]._id }).then(e => {
      if (!e.error) {
        newarr.splice(index, 1);
        toast.success("successfully deleted");
        setfirst(newarr);
        no += 1;
      } else {
        console.error("Server Error");
      }
    })
  }
  useEffect(() => {
    authorise('show_Purchaseditems').then(e => {
      if (!e.error) {
        setfirst(e.success.data);
        setbefore(true);
      } else {setbefore(false) }
    });
    authorise('showprofile').then(e=>{
      if (!e.error){
        setuser({name:e.success.data.Name,email:e.success.data.Email});
      }
    })
  }, [no]);
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
              <button className="bg-white p-3 w-full flex flex-col rounded-md dark:bg-gray-800 hover:shadow-lg relative hover:ring-2 ring-blue-500 shadow" onClick={()=>{localStorage.removeItem("AuthToken");navigate("/")}}>
                Logout
              </button>
            </div>
          </div>
          <div className="flex-grow bg-white dark:bg-gray-900 overflow-y-auto">
            <div className="sm:px-7 sm:pt-7 px-4 pt-4 flex flex-col w-full border-b border-gray-200 bg-white dark:bg-gray-900 dark:text-white dark:border-gray-800  top-0">
              <div className="flex w-full items-center">
                <div className="flex pb-1 items-center text-3xl text-gray-900 dark:text-white">
                  <img src="https://assets.codepen.io/344846/internal/avatars/users/default.png?fit=crop&format=auto&height=512&version=1582611188&width=512" className="w-12 mr-4 rounded-full" alt="" />
                  {user.name}
                </div>
                <div className="ml-auto sm:flex hidden items-center justify-end">
                  <div className="text-right">
                    <div className="text-xs text-gray-400 dark:text-gray-400">Email:</div>
                    <div className="text-gray-900 text-lg dark:text-white">{user.email}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sm:p-7 p-4 my-5">
              <ToastContainer/>
              {before?first.length ? first.map(e =>
                <div className="w-full flex  border-2 border-b-4 border-gray-200 rounded-xl my-2 hover:bg-gray-50" key={e._id}>
                  <Link to='/item' className='w-full' state={{ title: e.title, price: e.price, quantity:"1", description: e.description, category: e.category, image: e.image }}>
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
                </div>:
                <div>loading...</div>}
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
