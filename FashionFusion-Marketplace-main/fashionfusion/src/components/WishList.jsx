
import React from 'react'
import { deleteProductFromWishList } from '../features/cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import WishListCart from './WishListCart';
import EmptyWishList from './EmptyWishList';

const WishList = () => {

const wishListProduct = useSelector((store)=> store?.cart?.wishListProduct)
if(wishListProduct.length ===0 ) return (<EmptyWishList/>)
  return (
    <div>
      {wishListProduct.map((p)=>(
        <WishListCart key={p.id} cart={p}/>
      ))}
    </div>
  )
}

export default WishList
