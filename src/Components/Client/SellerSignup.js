import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {toast, ToastContainer } from 'react-toastify';
import validator from 'validator';
import { authenticate } from '../functions';
export default function SellerSignup() {
	const [name, setname] = useState('');
	const [lastname, setlastname] = useState('');
	const [password, setpassword] = useState('');
	const [confpassword, setconfpassword] = useState('');
	const [phone, setphone] = useState('');
	const [email, setemail] = useState('');
	const [address, setaddress] = useState('');
	const navigate=useNavigate();
	const createSeller=(e)=>{
		e.preventDefault();
		if (!name||!lastname||!address||!phone||!email||!password||!confpassword) {
			toast.error("Any field is empty");
			return;
		}
		if (!(password===confpassword)) {
			console.log(password,confpassword)
			toast.error("you have not entered correct password");
			return;
		}
		if(!validator.isEmail(email)){
			toast.error("Email is not valid");
			return;
		}
		if (!validator.isStrongPassword(password)) {
			toast.error("Password is not strong");
			return
		}
		authenticate("http://localhost:4000/registerseller",{name:name+" "+lastname,
		pincode:phone,
		address:address,
		email:email,
		password:password},"SellerToken").then(e=>{
			if (e.error) {
				toast.error(e.error)
			}
			else{
				navigate("/")
			}
		}).catch(e=>{
			console.log(e);
		})
		
	}
	return (
		<section className="bg-white dark:bg-gray-900 w-3/4">
			<ToastContainer/>
			<div className="flex justify-center">
				<div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
					<div className="w-full">
						<h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
							Get your seller's free account now.
						</h1>

						<form className="">
							<div className='flex w-full  grid grid-cols-2'>
								<div>
									<label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">First Name</label>
									<input type="text" placeholder="John" value={name} onChange={(e)=>{setname(e.target.value)}} className="block w-full px-5 py-3 mt-2 stext-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
								</div>

								<div>
									<label className="block mb-2 ml-4 text-sm text-gray-600 dark:text-gray-200">Last name</label>
									<input type="text" placeholder="Snow" value={lastname} onChange={(e)=>{setlastname(e.target.value)}} className="block w-full px-5 py-3 mt-2 ml-4 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
								</div>

								<div>
									<label className="block mb-2  text-sm text-gray-600 dark:text-gray-200">Pincode</label>
									<input type="text" placeholder="" value={phone} onChange={(e)=>{setphone(e.target.value)}} className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
								</div>

								<div>
									<label className="block mb-2 ml-4 text-sm text-gray-600 dark:text-gray-200">Email address</label>
									<input type="email" placeholder="johnsnow@example.com" value={email} onChange={(e)=>{setemail(e.target.value)}} className="block w-full px-5 py-3 mt-2 ml-4 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
								</div>
							</div>

							<div>
								<label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
								<textarea type="email" placeholder="johnsnow@example.com" value={address} onChange={(e)=>{setaddress(e.target.value)}} className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
							</div>
							<div className="flex grid grid-cols-2 mb-4">
							<div>
								<label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Password</label>
								<input type="password" placeholder="Enter your password" value={password} onChange={(e)=>{setpassword(e.target.value)}} className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
							</div>

							<div>
								<label className="block mb-2 ml-4 text-sm text-gray-600 dark:text-gray-200">Confirm password</label>
								<input type="password" placeholder="Enter your password" value={confpassword} onChange={(e)=>{setconfpassword(e.target.value)}} className="block w-full px-5 py-3 mt-2 ml-4 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
							</div>
							</div>

							<button
								className="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50" onClick={createSeller}>
								<span>Sign Up </span>

								<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 rtl:-scale-x-100" viewBox="0 0 20 20" fill="currentColor">
									<path fillRule="evenodd"
										d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
										clipRule="evenodd" />
								</svg>
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>

	)
}
