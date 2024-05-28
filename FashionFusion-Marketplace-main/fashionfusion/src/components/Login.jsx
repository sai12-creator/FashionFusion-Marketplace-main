
import React, { useState } from 'react'
import axios from 'axios'
import logo from '../assets/Logo.jpg'
import { API_END_POINT } from '../utils/constant.js'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../features/user/userSlice.js';

const Login = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true)
  const [isLoading , setIsLoading] = useState(false)
  const navigate = useNavigate(); 
  const dispatch = useDispatch();

  const handleClick = () => {
    setIsLogin(!isLogin)
    setName("")
    setEmail("")
    setPassword("")
  }

  const handleLoading = () => {
      setIsLoading(!isLoading)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isLogin) {
      //&Login (Account created and user try to login)
      try {
        const res = await axios.post(`${API_END_POINT}/login`, { email, password },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        });
        if(res.data.message){
          setIsLoading(!isLoading)
          toast.success(res.data.message)
          dispatch(addUser(res.data.user))
          navigate("/home")
        }
      } catch (error) {
        console.log(error);
        setIsLoading(!isLoading)
        toast.error(error.response.data.message)
      }
    } else {
      //& register (User try to create account)
      try {
        const res = await axios.post(`${API_END_POINT}/register`, { name, email, password },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        });
        if(res.data.message){
          setIsLoading(!isLoading)
          toast.success(res.data.message)
          //* navigate on login page
          setIsLogin(true)
          navigate("/login")
        }
      } catch (error) {
        console.log(error);
        setIsLoading(!isLoading)
        toast.error(error.response.data.message)
      }

    }

    setName("")
    setEmail("")
    setPassword("")
  }

  return (
    <div>
      <div className='flex flex-col justify-center items-center mt-4'>
        <img className='h-16 cursor-pointer' src={logo} alt="logo-img" />
        <form
          className='w-full'
          onSubmit={handleSubmit}>
          <div className='flex flex-col w-4/12 h-full m-auto mt-10 bg-gray-50 border-2 border-solid rounded-xl p-5'>
            <h1
              className='w-9/12 m-auto text-3xl font-medium mb-2'> {isLogin ? "Sign in" : "Sign up"}
            </h1>
            {isLogin ? ("") :
              (<input
                className='w-9/12 m-auto p-2 mt-2 rounded-lg  border-2 border-solid border-slate-600 outline-none font-medium'
                placeholder='Enter Name'
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />)}
            <input
              className='w-9/12 m-auto p-2 mt-2 rounded-lg  border-2 border-solid border-slate-600 outline-none font-medium'
              placeholder='Enter Email'
              type="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className='w-9/12 m-auto p-2 mt-2 rounded-lg  border-2 border-solid border-slate-600 outline-none font-medium'
              placeholder='Enter password'
              type="password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)} />
            <button
              className='w-9/12 m-auto mt-4 p-2 font-medium bg-yellow-300 rounded-lg hover:bg-yellow-400' type='submit'
              onClick={handleLoading}
              >
              {isLoading ? "Loading...." : isLogin ? ("Sign in") : ("Sign up")}
            </button>
            <p
              className='mt-3  m-auto text-gray-500'>
              {isLogin ? ("--------New to FashionFusion?--------") : ("")}
            </p>
            <p
              className='w-9/12 m-auto mt-3 p-2 pl-6 rounded-lg bg-gray-200 hover:bg-gray-300 cursor-pointer'
              onClick={handleClick}>
              {isLogin ? ("Create your FashionFusion Account") : ("Already have account?")}
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
