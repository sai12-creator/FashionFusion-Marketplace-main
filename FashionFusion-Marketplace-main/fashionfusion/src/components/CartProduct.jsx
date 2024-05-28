
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { CiHeart } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import {  addAllTotalPrice, addPrice, addProductInCart, decreaseProductQuantity, deleteMyCartItem, deleteProductFromCart } from '../features/cart/cartSlice';
import { addProductInWishList } from '../features/cart/cartSlice.js';

const CartProduct = ({ cart, index }) => {
    const cartProduct = useSelector((s)=> s?.cart?.cartProduct);
    const totalPrice = useSelector((s)=> s?.cart?.totalPrice);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const handleClickPayment = () => {
        const allTotalPrice = totalPrice > 500 ? totalPrice - 50 + 40 : totalPrice + 40;
        dispatch(addAllTotalPrice(allTotalPrice))
        navigate("/payment")
        toast.success("Disclaimer: The Payment method is not enabled.")
    }

    // cartProduct.map((m)=>( console.log(m.title , "==" , m.quantity)))
    useEffect(() => {
        dispatch(addPrice(cartProduct.map(item => item.price * item.quantity).reduce((total, value) => total + value, 0)));
    }, [cartProduct, dispatch]);

    const handleDeleteProduct = (id) =>{
        const index = cartProduct.findIndex(item => item.id === id);
        if (index !== -1) {
            dispatch(deleteProductFromCart(id))
        }
    }
    const handleWishList = () => {
        dispatch(addProductInWishList(cart))
        toast.success("Product added to your wishlist! Feel free to continue browsing, or you can proceed from here.");
    }

    return (
        <div className='p-2 m-2 mt-4'>
            <div className='flex justify-between gap-2'>
                <div className='flex w-9/12 gap-1 border border-gray-100 rounded-lg'> 
                    <div className='w-3/12 p-2'>
                        <img className='w-48 h-48 p-1 rounded-lg cursor-pointer' 
                        src={cart.thumbnail} 
                        alt="image" 
                        onClick={()=>{navigate("/product/"+cart.id)}}/>
                    </div>
                    <div className='flex flex-col w-7/12  p-2'>
                        <div>
                            <h1 className=' font-sans font-medium text-lg'>{cart.title}</h1>
                        </div>
                        <div className='w-10/12'>
                            <p className=' font-sans  font-medium text-lg'>{cart.description}</p>
                        </div>
                        <div className='flex mr-2'>
                            <button className='mr-5' onClick={()=>{
                                if(cart.quantity > 1){
                                    dispatch(decreaseProductQuantity(cart))
                                }else{
                                    dispatch(deleteMyCartItem(cart.id))
                                }                              
                            }}>-</button>
                            {cart?.quantity}
                            <button className='ml-4' onClick={()=>dispatch(addProductInCart(cart))}>+</button>
                        </div>
                        <div className='flex mt-2'>
                            <button className='text-sky-900 mr-2' onClick={()=>handleDeleteProduct(cart.id)}>Delete</button>
                            <div className='flex items-center'>
                                <CiHeart className='w-6 h-6' />
                                <button className='text-sky-900' 
                                onClick={handleWishList}>Move to Wishlist</button>
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
                
               {/*---------------- Order Details -----------------------------------------------*/}

                {index === 0 && <div className='w-3/12 mt-5'> 
                    <div className='flex flex-col p-2 border border-gray-200 rounded-lg'>
                        <div>
                            <h1 className='p-1 text-black font-sans font-semibold'>Order Details</h1>
                        </div>
                        <div>
                            <div className='flex flex-col'>
                                <div className='flex justify-between p-1'>
                                    <h1 className="text-sky-900">Bag total</h1>
                                    <h1 className='font-semibold'>₹{totalPrice}.00</h1>
                                </div>

                                <div className='flex justify-between p-1 '>
                                    <h1 className='text-sky-900'>Bag discount</h1>
                                    <h1 className='text-orange-900 font-semibold'>
                                    {totalPrice > 500 ? "-₹50.00" : "₹0.00"} 
                                    </h1>
                                </div>

                                <div className='flex justify-between p-1'>
                                    <h1 className='text-sky-900'>Delivery Fee</h1>
                                    <h1 className='font-semibold'>₹40.00</h1>
                                </div>

                                <div className='flex justify-between p-1 '>
                                    <h1 className='text-sky-900'>Order Total</h1>
                                    <h1 className='font-semibold'>₹{totalPrice > 500 ? totalPrice - 50 + 40 : totalPrice + 40}.00</h1>
                                </div>

                                <div className='mt-2 p-1'>
                                    <button className='w-11/12 m-auto bg-yellow-500 p-2 text-gray-900 rounded-2xl hover:bg-yellow-600' onClick={handleClickPayment}>Proceed to Buy</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default CartProduct
