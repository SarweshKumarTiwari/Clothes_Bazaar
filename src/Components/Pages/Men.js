import axios from 'axios';
import React,{useState,useEffect}from 'react';
import {Link} from 'react-router-dom'

export default function Men() {
  const lst=[]
  const [first,setfirst] = useState(lst);
  useEffect(() => {
    axios.get("http://localhost:4000/men").then((res)=>{
      if (!res.data.error) {
        setfirst(res.data.data)
      }
      else{
        setfirst([])
      }
    }
    ).catch(err=>{
      if (err) {
        setfirst([]);
      }
    })
  
  }, [])
  
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {first.length?first.map(e => <div className="lg:w-1/4 md:w-1/2 p-4 w-full " key={e._id}>
            <Link to='/item' state={{title:e.title,price:e.price,quantity:1,description:e.description,category:e.category,image:e.image}}>
            <div className="block h-48 rounded overflow-hidden">
              <img alt="ecommerce" className="object-fill object-center w-full h-full block" style={{height:"100%"}} src={e.image} />
            </div>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">MENS OUTFIT</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">{e.title}</h2>
              <p className="mt-1">₹{e.price}</p>
              <p className="mt-1">{e.description.length>35?e.description.slice(0,35)+"...":e.description+"..."}</p>
            </div>
            </Link>
          </div>):
          <h3 className='text-lg text-center'>Server error 404</h3>}
        </div>
      </div>
    </section>
  )
}
