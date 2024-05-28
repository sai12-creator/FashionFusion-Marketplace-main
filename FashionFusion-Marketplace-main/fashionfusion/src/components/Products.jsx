
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import ProductCard from './ProductCard';
import ShimmerCard from './ShimmerCard';
import Categories from './Categories';

const Products = () => {
    const products = useSelector((store) => store?.product?.products);
    const filterData = useSelector((store) => store?.product?.filterData);
    if(products === null) return <ShimmerCard/>;
  return (
    <div className=' bg-sky-50  mt-[-2%] mr-2 p-2 ml-2 mx-auto flex justify-between flex-wrap absolute'>
         <Categories />
        {filterData.map((product) => (  
            <ProductCard key={product.id}  product={product} />
        ))}
    </div>
  )
}

export default Products
