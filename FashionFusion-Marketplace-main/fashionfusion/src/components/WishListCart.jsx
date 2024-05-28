
import React from 'react'
import { CiShoppingCart } from "react-icons/ci";
import toast from 'react-hot-toast';
import { addProductInCart, deleteProductFromWishList } from '../features/cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const WishListCart = ({ cart }) => {

    const dispatch = useDispatch();
    const wishListProduct = useSelector((store) => store?.cart?.wishListProduct)
    const navigate = useNavigate()

    const handleDeleteProduct = (id) => {
        const index = wishListProduct.findIndex(item => item.id === id);
        if (index !== -1) {
            dispatch(deleteProductFromWishList(id))
        }
    }

    const handleAddCart = () => {
        dispatch(addProductInCart({ ...cart, quantity: 1 }))
        toast.success("Product Added in Cart");
        const index = wishListProduct.findIndex(item => item.id === cart.id);
        if (index !== -1) {
            dispatch(deleteProductFromWishList(cart.id))
        }
    }

    return (
        <div>
            <div className='flex w-9/12 gap-1 border border-gray-100 rounded-lg'>
                <div className='w-3/12 p-2'>
                    <img className='w-48 h-48 p-1 rounded-lg cursor-pointer'
                        src={cart.thumbnail}
                        alt="image"
                        onClick={() => { navigate("/product/" + cart.id) }} />
                </div>
                <div className='flex flex-col w-7/12  p-2'>
                    <div>
                        <h1 className=' font-sans font-medium text-lg'>{cart.title}</h1>
                    </div>
                    <div className='w-10/12'>
                        <p className=' font-sans  font-medium text-lg'>{cart.description}</p>
                    </div>
                    <div className='flex items-center'>
                    <div className='flex mt-2'>
                        <button className='text-sky-900 mr-2' onClick={() => handleDeleteProduct(cart.id)}>Delete</button>
                    </div>
                    <div className='flex items-center mt-2'>
                        <CiShoppingCart className='w-6 h-6 font-bold' />
                        <button className='text-sky-900'
                            onClick={handleAddCart}
                        >ADD TO CART</button>
                    </div>
                    </div>
                </div>

                <div className='w-2/12 p-2 flex flex-col'>
                    <div className='w-7/12'>
                        <div className='bg-red-900 text-center text-sm rounded-md text-white p-1'>
                            {cart.discountPercentage}% off
                        </div>
                    </div>
                    <div>
                        <p className='text-red-700 font-semibold'>Limited time deal</p>
                    </div>
                    <div>
                        <p className='font-semibold text-xlxl'>₹{cart.price}.00</p>
                    </div>
                    <div>
                        <div>
                            {cart.price > 200 ? (
                                <>
                                    <p className='text-gray-600 text-sm line-through'>M.R.P.:₹{cart.price + 200}.00</p>
                                </>
                            ) :
                                (
                                    <>
                                        <p className='text-gray-600 text-sm line-through'>M.R.P.:₹{cart.price + 30}.00</p>
                                    </>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WishListCart
