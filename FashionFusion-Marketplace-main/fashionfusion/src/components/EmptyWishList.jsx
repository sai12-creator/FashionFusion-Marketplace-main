import React from 'react'
import { ImSad } from "react-icons/im";
import { EMPTY_CART_IMAGE } from '../utils/constant';
import { IoIosReturnLeft } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const EmptyWishList = () => {
    const navigate = useNavigate();

    const handleCartClick = () => {
        navigate("/cart")
    }
    return (
        <div>

            <div className='w-full absolute '>
                <img src={EMPTY_CART_IMAGE} className='w-full h-[100vh]' alt="" />
                <div className='absolute top-[30%] left-[10%] w-6/12 items-center flex flex-col'>
                    <ImSad className='text-center text-yellow-800 w-8 h-8 mb-2' />
                    <h1 className='text-pink-800 text-3xl font-serif mb-2'>Your Wishlist is empty</h1>
                    <div className='flex items-center bg-sky-500 p-3 rounded-xl hover:bg-sky-800 cursor-pointer' onClick={handleCartClick}>
                        <IoIosReturnLeft className='w-6 h-6 text-white mr-2' />
                        <button className='text-white text-lg font-sans'>RETURN TO CART</button>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default EmptyWishList
