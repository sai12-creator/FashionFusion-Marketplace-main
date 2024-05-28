
import React, { useState } from 'react'
import { addFilterData } from '../features/products/productsSlice';
import { useDispatch, useSelector } from 'react-redux';

const Categories = () => {

    const[mens , setMens] = useState("mens")
    const[womans , setWomans] = useState("womens")
    const[watches , setWatches] = useState("watches")
    const[shoes , setShoes] = useState("shoes")
    const[search , setSearch] = useState("iPhone")

    const product = useSelector((s)=>s?.product?.products);
    const dispatch = useDispatch()

    const handleSearchAll = () => {
        dispatch(addFilterData(product))
    }

    const handleMen = () => {
        const filterData = product.filter((res)=>res.category.toLowerCase().includes(mens.toLowerCase()))
        dispatch(addFilterData(filterData))
    }
    const handleWoman = () => {
        const filterData = product.filter((res)=>res.category.toLowerCase().includes(womans.toLowerCase()))
        dispatch(addFilterData(filterData))
    }

    const handleWatches = () => {
        const filterData = product.filter((res)=>res.category.toLowerCase().includes(watches.toLowerCase()))
        dispatch(addFilterData(filterData))
    }

    const handleShoes = () => {
        const filterData = product.filter((res)=>res.category.toLowerCase().includes(shoes.toLowerCase()))
        dispatch(addFilterData(filterData))
    }


  return (
    <div className='w-full border'>
        <div className='flex p-1 m-1 mr-16 ml-12 bg-slate-700 rounded-md justify-evenly'>

            <div className='p-1'>
                <button 
                className='font-medium text-gray-200 hover:text-white'
                onClick={handleSearchAll}>
                    ALL
                </button>
            </div>

            <div className='p-1'>
                <button 
                className='font-medium text-gray-200 hover:text-white'
                onClick={handleMen}>
                    MEN
                </button>
            </div>

            <div className='p-1'>
                <button 
                className='font-medium text-gray-200 hover:text-white'
                onClick={handleWoman}>
                    WOMEN
                </button>
            </div>

            <div className='p-1'>
                <button 
                className='font-medium text-gray-200 hover:text-white'
                onClick={handleWatches}>
                    WATCHES
                </button>
            </div>

            <div className='p-1'>
                <button 
                className='font-medium text-gray-200 hover:text-white'
                onClick={handleShoes}>
                    SHOES
                </button>
            </div>

        </div>
    </div>
  )
}

export default Categories
