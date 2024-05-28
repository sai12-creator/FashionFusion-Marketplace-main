
import React, { useEffect, useState } from 'react'
import {  useNavigate } from "react-router-dom";
import {  useSelector } from 'react-redux';
import { IoSendSharp } from "react-icons/io5";
import { KEY } from '../utils/constant';

const Contact = () => {

  const navigate = useNavigate();
  const user = useSelector((store) => store?.user?.userDetails)
  const [result , setResult] = useState("");

  useEffect(() => {
      if(!user){
        navigate("/")
      }
    } , [])

    const handleSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", KEY);
  
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      }).then((res) => res.json());

      if (res.success) {
        setResult(res.message);
        event.target.reset(); 
      } else {
        setResult(res.message);
      }
    }

  return (
    <div className='m-2 p-2 '>
      <form className='flex flex-col w-6/12 m-auto justify-center items-center border-2 border-solid ' 
      onSubmit={handleSubmit}>
        <div className='mt-2 w-6/12 '>
        <label className='text-left' >Your name*</label>
        <input className=' w-full p-2 pl-3 border-2 border-gray-900 rounded-lg font-sans bg-blue-50' 
        type="text"
        name='name' 
        placeholder= 'Enter Your Name ' 
        required
        />
        </div>

        <div className='mt-2 w-6/12'>
        <label className='text-left' >Phone no*</label>
        <input className=' w-full p-2 border-2 border-gray-900 rounded-lg font-sans bg-blue-50' 
        type="text"
        name='phone' 
        placeholder='Enter Your Phone no' 
        required
        />
        </div>

        <div className='mt-2 w-6/12'>
        <label htmlFor="">Write Your Message here</label>
        <textarea className='w-full p-2 border-2 border-gray-900 rounded-lg resize-none font-sans bg-blue-50' 
        name="message"  
        rows="5"
        cols="20" 
        placeholder='Enter your message here' 
        required>
        </textarea>
        </div>
        <button className='bg-gradient-to-bl from-sky-800 hover:from-sky-900 p-2 m-2 mb-4 rounded-2xl font-medium text-blue-950 flex items-center' 
        type='submit' >
        Send Query
        <IoSendSharp  className='font-medium text-2xl m-1 mt-2 text-sky-950'/>
        </button>
        <span className='text-orange-900'>{result}</span>
      </form>
      
    </div>
  )
}

export default Contact
