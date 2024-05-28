
import React, { useEffect } from 'react'
import {  useNavigate } from "react-router-dom";
import {  useSelector } from 'react-redux';
import useProductDetails from '../Hooks/useProductDetails';;
import Header from './Header';
import Body from './Body';

const Home = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store?.user?.userDetails)

  useProductDetails();

  useEffect(() => {
    if(!user){
      navigate("/")
    }
  } , [])


  return (
    <div>
      {/* <Header/> */}
      <Body />
    </div>
  )
}

export default Home
