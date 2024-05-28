
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addMenProducts } from '../features/products/productsSlice';

const useMensProducts = () => {
    const product = useSelector((store) => store?.product?.products)
    const dispatch = useDispatch();

    const getResult = async (url) =>{
        const data = await fetch(url);
        const json = await data.json();
        return json;
    }

    const getProductsDetails = async () => {

        const url = [
            "https://dummyjson.com/products/category/mens-shirts",
            "https://dummyjson.com/products/category/mens-shoes",
            "https://dummyjson.com/products/category/mens-watches",
            "https://dummyjson.com/products/category/sunglasses"
        ]

        const promiseArray = url.map((u)=>getResult(u)) ;
        const result = await Promise.all(promiseArray);
        // console.log(result);
        const mergedProducts = result.flatMap(obj => obj.products);
        dispatch(addMenProducts(mergedProducts));
    }

    useEffect(() => {
        getProductsDetails();
    })
}

export default useMensProducts
