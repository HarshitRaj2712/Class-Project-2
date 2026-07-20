import {React,useState} from 'react'
import axios from 'axios';


const Signup = () => {
  const [data,setData]=useState({
    name:'',
    email:'',
    password:''
  });
  
const handleChange=(e)=>{
    setData({
      ...data,
      [e.target.name]:e.target.value
    })
  }

  const handlesignup=(e)=>{
    e.preventDefault();
    try{
      const response=axios.post('http://localhost:1234/signup',data);
      console.log(response);
      alert(response);
    } catch (error) {
      console.error('Error signing up:', error);
    }
    setData({
      name:'',
      email:'',
      password:''
    })
    console.log(data.name,data.email,data.password);
  

  }
  return (
    <div className="min-h-screen flex items-center justify-center">
      <form className="flex flex-col w-full max-w-sm  p-8 rounded-2xl shadow-lg">
        
        <h2 className="text-2xl font-bold text-center mb-6">
          Sign Up Here 🔐
        </h2>

        <label className="mb-1 font-medium">
          Name
        </label>

        <input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          onChange={(e)=>handleChange(e)} value={data.name}
          className="border border-gray-300 rounded-lg px-4 py-2 mb-4 outline-none focus:ring-2 focus:ring-purple-400"
        />
        <label className="mb-1 font-medium">
          Email
        </label>

        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          onChange={(e)=>handleChange(e)} value={data.email}
          className="border border-gray-300 rounded-lg px-4 py-2 mb-4 outline-none focus:ring-2 focus:ring-purple-400"
        />

        <label className="mb-1 font-medium">
          Password
        </label>

        <input
          type="password"
          name="password"
          placeholder="Enter Your Password"
          onChange={(e)=>handleChange(e)} value={data.password}
          className="border border-gray-300 rounded-lg px-4 py-2 mb-6 outline-none focus:ring-2 focus:ring-purple-400"
        />

        <button
          type="submit"
          className="bg-gray-500 text-white py-2 rounded-lg font-semibold hover:bg-gray-600 transition duration-300 cursor-pointer"
          onClick={handlesignup}
        >
          Sign Up
        </button>

      </form>
    </div>
  )
}

export default Signup