import React, { useState ,useEffect} from 'react'
import { Link,useNavigate,useLocation} from 'react-router-dom';
import { authorise,deleteitem} from '../functions';

export default function OnPurchase() {
  const nav=useNavigate();
  const [loc,setloc] = useState(useLocation().state);
  const [name, setname] = useState('default');
  const [phone, setphone] = useState('5645467');
  const [address, setaddress] = useState("cgfcf");
  const remove = e => {
    const newarr = [...loc];
    console.log(newarr)
    const index = newarr.findIndex(ele => ele._id === e.target.value);
    deleteitem('deleteitem', { product_id: newarr[index]._id }).then(e => {
      if (!e.error) {
        newarr.splice(index, 1);
        setloc(newarr);
      } else {
        console.error("Server Error");
      }
    })
  }
  useEffect(() => {
    authorise("showprofile").then(x=>{
      if (!x.error) {
          setname(x.success.data.Name);
          setphone(x.success.data.Phone);
          setaddress(x.success.data.Address)
      }
    });
  }, [loc]);
  

  return (
    <div className='container w-3/4 px-5 pb-1 my-4 border border-gray-200 py-3 mx-auto'>
      <h3 className='text-black text-2xl title-font text-center font-bold mb-2'>Payment Door</h3>
      <div className="p-5 bg-gray-100  items-center mx-auto border  mb-10 border-gray-200 rounded-lg sm:flex-row flex-col">
        <h3 className="text-black text-2xl title-font font-bold mb-2">{name}</h3>
        <h5 className="text-black title-font mb-2">{phone}</h5>
      </div>
      <div className="p-5 bg-gray-100 flex items-center mx-auto border rounded-lg  mb-10 border-gray-200  sm:flex-row flex-col">
        <h3 className="text-black text-2xl title-font  mb-2">{address}</h3>
        <Link className="flex ml-auto text-indigo-500  border-0 py-2 px-6 focus:outline-none hover:text-indigo-600 rounded" to='/addProfile' >
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
            <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
          </svg>
        </Link>
      </div>
      {loc.map(e => <div className="p-5 bg-white flex h-auto items-center mx-auto border  mb-10 border-gray-200 rounded-lg sm:flex-row flex-col" key={e._id}>
              <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center flex-shrink-0">
                <img className='h-3/4'
                  src={e.image} alt='img' />
              </div>
              <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h1 className="text-black text-2xl title-font font-bold mb-2">{e.title}</h1>
                <p className="leading-relaxed text-base">{e.description}</p>

                <div className="md:flex font-bold text-gray-800">
                  <div className="w-full md:w-1/2 flex space-x-3">
                    <div className="w-1/2 flex space-x-2">
                      <h4 className="text-gray-500">Quantity : </h4>
                      <p>1</p>
                    </div>
                    <div className="w-1/2 flex space-x-2">
                      <h2 className="text-gray-500">Price : </h2>
                      <p>₹2000</p>
                    </div>
                  </div>
                </div>
                <div className="flex ">
                  <button className="mt-6 text-red-500 text-center inline-flex items-center" value={e._id} onClick={remove} >Remove
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>)}
            <div className="flex bg-white my-4 h-14 sticky bottom-0">
            <button className="ml-auto w-1/2 mx-2 text-center text-white bg-gray-500 border-0 py-4 px-6 focus:outline-none hover:bg-gray-600" onClick={()=>nav(-1)}>Go Back</button>
            <button className="ml-auto w-1/2 mx-2 text-center text-white bg-orange-400 border-0 py-4 px-6 focus:outline-none hover:bg-orange-500">Cash on delivery</button>
            </div>
    </div>
  )
}
