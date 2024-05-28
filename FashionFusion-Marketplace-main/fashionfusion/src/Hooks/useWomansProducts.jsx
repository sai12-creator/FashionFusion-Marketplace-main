
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addwWomanProducts } from '../features/products/productsSlice';

const useWomansProducts = () => {

  const product = useSelector((store) => store?.product?.products)
  const dispatch = useDispatch();

  const getResult = async (url) =>{
      const data = await fetch(url);
      const json = await data.json();
      return json;
  }

  const getProductsDetails = async () => {

      const url = [
        "https://dummyjson.com/products/category/womens-dresses",
        "https://dummyjson.com/products/category/womens-shoes",
        "https://dummyjson.com/products/category/tops",
        "https://dummyjson.com/products/category/womens-watches",
        "https://dummyjson.com/products/category/womens-bags",
        "https://dummyjson.com/products/category/womens-jewellery",
        "https://dummyjson.com/products/category/sunglasses",
      ]

      const promiseArray = url.map((u)=>getResult(u)) ;
      const result = await Promise.all(promiseArray);
      // console.log(result);
      const mergedProducts = result.flatMap(obj => obj.products);
      dispatch(addwWomanProducts(mergedProducts));
  }

  useEffect(() => {
      getProductsDetails();
  })
}

export default useWomansProducts
