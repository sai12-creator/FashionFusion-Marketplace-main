

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addFilterData, addProducts } from '../features/products/productsSlice';

const useProductDetails = () => {
    const product = useSelector((store) => store?.product?.products)

    const dispatch = useDispatch();

    const getResult = async (url) =>{
        const data = await fetch(url);
        const json = await data.json();
        return json;
    }

    const getProductsDetails = async () => {
        const url = [
            "https://dummyjson.com/products/category/sunglasses",
            "https://dummyjson.com/products/category/mens-shirts",
            "https://dummyjson.com/products/category/womens-dresses",
            "https://dummyjson.com/products/category/mens-shoes",
            "https://dummyjson.com/products/category/womens-jewellery",
            "https://dummyjson.com/products/category/tops",
            "https://dummyjson.com/products",
            "https://dummyjson.com/products/category/womens-watches",
            "https://dummyjson.com/products/category/mens-watches",
            "https://dummyjson.com/products/category/womens-shoes",    
            "https://dummyjson.com/products/category/womens-bags",
            "https://dummyjson.com/products/category/automotive",
            
        ]

        const promiseArray = url.map((u)=>getResult(u)) ;
        const result = await Promise.all(promiseArray);
        // console.log(result);
        const mergedProducts = result.flatMap(obj => obj.products);

        // const data = await fetch("https://dummyjson.com/products");
        // const result = await data.json();
        dispatch(addProducts(mergedProducts));
        dispatch(addFilterData(mergedProducts));
    }

    useEffect(() => {
       !product && getProductsDetails();
    })

}

export default useProductDetails;
