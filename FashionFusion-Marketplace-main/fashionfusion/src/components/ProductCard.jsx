
import React, { useState } from 'react'
import { IoMdStar } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => { 
    //   price, discountPercentage
    const navigate = useNavigate();


    const handleClick = () =>{
        navigate("/product/"+product.id)
    }

    return  ( 
        <div className=' m-2 p-2 w-2/12 flex flex-col justify-between items-center border-2 border-solid border-gray-200 cursor-pointer hover:border-gray-300' onClick={handleClick}>
            <div className='w-48 h-52 cover relative'>
                <img 
                className='w-full h-full rounded-md border border-solid border-transparent hover:border-gray-500' 
                src={product.thumbnail} 
                alt="thumbnail-photo" />
            </div>
            <div className='w-full text-center'>
                <h1 className='p-1 text-teal-700 font-medium'>{product.brand}</h1>
            </div>
            <div className='w-full text-center'>
                <p className='p-1 text-gray-700 from-neutral-600'>{product.title}</p>
            </div>
            <div className='w-4/12 text-center flex items-center justify-center bg-green-700 rounded-lg text-white'>
                <span className='ml-[5px]'>{product.rating}</span>
                <span><IoMdStar className='' /></span>
            </div>
            <div>
                <div className='flex items-center'>
                    <h1 className='font-semibold'>₹{product.price}</h1>&nbsp;
                    {product.price > 200 ? (
                        <>
                            <p className='text-gray-600 text-sm line-through'>₹{product.price + 200}</p>
                        </>
                    ) :
                        (
                            <>
                                <p className='text-gray-600 text-sm line-through'>₹{product.price + 30}</p>
                            </>
                        )
                    }

                    <p className='text-orange-900 text-sm font-sans'>({product.discountPercentage}% off)</p>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
